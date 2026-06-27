"use server";

import crypto from "crypto"

const BACKEND_URL = process.env.GIFTEDFORGE_API_URL ?? "https://nft.giftedforge.com"
const X_CLIENT_ID = "WU5aenlrejRqMzVRZGdPcURxQkw6MTpjaQ"
const X_CLIENT_SECRET = "qHBLKPA8twv7rIFsyDO3YNBCTQPLd5RpWL9hEH_t7XhgujYpBr"
const X_REDIRECT_URI = "https://giftedforge.com/waitlist/follow/callback"
const X_ENGAGE_REDIRECT_URI = "https://giftedforge.com/waitlist/engage/callback"
const ENGAGE_TWEET_ID = "2057819752966316272"
const TG_BOT_TOKEN = "8064319708:AAGAKR9GYx9xZz5Xy20b3NP5FqlCyilNaX4"

export async function validateActivationCode(
  code: string,
  email: string,
): Promise<{ valid: boolean; reason?: string; referralCodes?: string[] }> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/waitlist/codes/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: code.trim().toUpperCase(), email: email.trim() }),
      cache: "no-store",
    })
    if (!res.ok) return { valid: false, reason: "server_error" }
    const data = await res.json()
    return data as { valid: boolean; reason?: string; referralCodes?: string[] }
  } catch {
    return { valid: false, reason: "network_error" }
  }
}

export async function verifyXFollow(
  username: string,
): Promise<{ follows: boolean; protected?: boolean; message?: string }> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/waitlist/verify/follow`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
      cache: "no-store",
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      return { follows: false, message: err.message ?? "Verification failed. Please try again." }
    }
    return await res.json()
  } catch {
    return { follows: false, message: "Connection failed. Check your internet and try again." }
  }
}

export async function getWaitlistStats(
  email: string,
): Promise<{ invited: number; activated: number }> {
  try {
    const url = `${BACKEND_URL}/api/waitlist/stats?email=${encodeURIComponent(email)}`
    const res = await fetch(url, { cache: "no-store" })
    if (!res.ok) return { invited: 0, activated: 0 }
    return await res.json()
  } catch {
    return { invited: 0, activated: 0 }
  }
}

export async function exchangeXCode(
  code: string,
  codeVerifier: string,
): Promise<{ username?: string; error?: string }> {
  try {
    // Twitter requires Basic auth header even for public PKCE clients.
    // Format: base64(client_id:) — empty secret for public clients.
    const basicAuth = Buffer.from(`${X_CLIENT_ID}:${X_CLIENT_SECRET}`).toString("base64")

    const tokenRes = await fetch("https://api.twitter.com/2/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${basicAuth}`,
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: X_REDIRECT_URI,
        code_verifier: codeVerifier,
      }).toString(),
      cache: "no-store",
    })

    if (!tokenRes.ok) {
      const err = await tokenRes.text()
      console.error("[x-oauth] token exchange failed:", tokenRes.status, err)
      return { error: "token_exchange_failed" }
    }

    const { access_token } = await tokenRes.json()

    const userRes = await fetch("https://api.twitter.com/2/users/me", {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: "no-store",
    })

    if (!userRes.ok) {
      const body = await userRes.text()
      console.error("[x-oauth] users/me failed:", userRes.status, body)
      return { error: "user_fetch_failed" }
    }

    const { data } = await userRes.json()
    return { username: data?.username }
  } catch {
    return { error: "network_error" }
  }
}

export async function verifyXEngage(
  code: string,
  codeVerifier: string,
): Promise<{ retweeted: boolean; commented: boolean; username?: string; error?: string }> {
  try {
    const basicAuth = Buffer.from(`${X_CLIENT_ID}:${X_CLIENT_SECRET}`).toString("base64")

    const tokenRes = await fetch("https://api.twitter.com/2/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${basicAuth}`,
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: X_ENGAGE_REDIRECT_URI,
        code_verifier: codeVerifier,
      }).toString(),
      cache: "no-store",
    })

    if (!tokenRes.ok) {
      console.error("[x-engage] token exchange failed:", tokenRes.status, await tokenRes.text())
      return { retweeted: false, commented: false, error: "token_exchange_failed" }
    }

    const { access_token } = await tokenRes.json()

    const userRes = await fetch("https://api.twitter.com/2/users/me", {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: "no-store",
    })

    if (!userRes.ok) {
      console.error("[x-engage] users/me failed:", userRes.status, await userRes.text())
      return { retweeted: false, commented: false, error: "user_fetch_failed" }
    }

    const { data: user } = await userRes.json()

    // Check retweet + comment via our backend session-based checker
    const engageRes = await fetch(
      `${BACKEND_URL}/api/waitlist/verify/engage?username=${encodeURIComponent(user.username)}&tweet_id=${ENGAGE_TWEET_ID}`,
      { cache: "no-store" },
    )

    if (!engageRes.ok) {
      const err = await engageRes.json().catch(() => ({}))
      console.error("[x-engage] engage check failed:", engageRes.status, err)
      if (engageRes.status === 429) return { retweeted: false, commented: false, error: "rate_limited" }
      if (engageRes.status === 404) return { retweeted: false, commented: false, error: "user_not_found" }
      if (engageRes.status === 503) return { retweeted: false, commented: false, error: "checker_not_configured" }
      return { retweeted: false, commented: false, error: "engage_check_failed" }
    }

    const { retweeted, commented } = await engageRes.json()
    return { retweeted: !!retweeted, commented: !!commented, username: user.username }
  } catch {
    return { retweeted: false, commented: false, error: "network_error" }
  }
}

export async function verifyTelegramMembership(authData: {
  id: number
  first_name: string
  last_name?: string
  username?: string
  auth_date: number
  hash: string
}): Promise<{ member: boolean; error?: string }> {
  try {
    const { hash, ...fields } = authData
    const checkString = Object.keys(fields)
      .filter((k) => fields[k as keyof typeof fields] != null)
      .sort()
      .map((k) => `${k}=${fields[k as keyof typeof fields]}`)
      .join("\n")
    const secretKey = crypto.createHash("sha256").update(TG_BOT_TOKEN).digest()
    const hmac = crypto.createHmac("sha256", secretKey).update(checkString).digest("hex")
    if (hmac !== hash) return { member: false, error: "invalid_hash" }

    const ageSeconds = Math.floor(Date.now() / 1000) - authData.auth_date
    if (ageSeconds > 3600) return { member: false, error: "auth_expired" }

    const res = await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/getChatMember`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: -1004412821147, user_id: authData.id }),
      cache: "no-store",
    })
    const json = await res.json()
    if (!json.ok) {
      console.error("[tg-verify] getChatMember failed:", json)
      return { member: false, error: "check_failed" }
    }
    const status: string = json.result?.status ?? "left"
    const isMember = ["creator", "administrator", "member"].includes(status)
    return { member: isMember, error: isMember ? undefined : "not_member" }
  } catch {
    return { member: false, error: "network_error" }
  }
}

export async function checkTelegramVerification(
  sessionId: string,
): Promise<{ status: "pending" | "waiting" | "verified" }> {
  try {
    const res = await fetch(
      `${BACKEND_URL}/api/waitlist/verify/telegram?session_id=${encodeURIComponent(sessionId)}`,
      { cache: "no-store" },
    )
    if (!res.ok) return { status: "pending" }
    return await res.json()
  } catch {
    return { status: "pending" }
  }
}

export async function sendEmailToTelegram(email: string) {
  const token = "8749755157:AAGePFzvLAOEog5MzURG3wzakDTteVKRCSM";
  const chatId = -5226409806;

  if (!token || !chatId) {
    console.error("Telegram credentials are not set in environment variables.");
    return { success: false, error: "Server configuration error" };
  }

  const message = `Wishlist request for Coming Soon: ${email}`;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    const data = await response.json();

    if (data.ok) {
      return { success: true };
    } else {
      console.error("Telegram API error:", data);
      return { success: false, error: data.description || "Failed to send message" };
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return { success: false, error: "Internal server error" };
  }
}
