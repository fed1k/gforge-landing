"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  BsArrowLeft,
  BsCheckCircleFill,
  BsExclamationCircleFill,
  BsHeart,
  BsArrowRepeat,
  BsChatDots,
} from "react-icons/bs"
import {
  markTaskComplete,
  getEngageClicked,
  markEngageClicked,
  type EngageAction,
} from "@/lib/waitlist-storage"
import { generateCodeVerifier, generateCodeChallenge, generateState } from "@/lib/pkce"

const X_CLIENT_ID = "WU5aenlrejRqMzVRZGdPcURxQkw6MTpjaQ"
const X_ENGAGE_REDIRECT_URI = "https://giftedforge.com/waitlist/engage/callback"
const TWEET_ID = "2057819752966316272"

const ERROR_MESSAGES: Record<string, string> = {
  not_liked: "We couldn't verify your like. Please like the tweet and try again.",
  like_unauthorized: "X didn't grant like-read permission. Re-connect your account and try again.",
  like_forbidden: "X blocked access to your likes (API access level). Please contact support.",
  like_rate_limited: "Too many requests — wait a minute and try again.",
  like_check_failed: "Couldn't check your likes. Please try again.",
  token_exchange_failed: "Authorization failed. Please try again.",
  user_fetch_failed: "Couldn't fetch your X profile. Please try again.",
  no_code: "Twitter didn't return an auth code. Please try again.",
  no_verifier: "Session expired — please try again.",
  state_mismatch: "Security check failed. Please try again.",
  access_denied: "You cancelled the X authorization. Please try again.",
}

const ACTIONS: { key: EngageAction; label: string; icon: React.ElementType; intentUrl: string }[] =
  [
    {
      key: "like",
      label: "Like the post",
      icon: BsHeart,
      intentUrl: `https://twitter.com/intent/like?tweet_id=${TWEET_ID}`,
    },
    {
      key: "repost",
      label: "Repost",
      icon: BsArrowRepeat,
      intentUrl: `https://twitter.com/intent/retweet?tweet_id=${TWEET_ID}`,
    },
    {
      key: "comment",
      label: "Leave a comment",
      icon: BsChatDots,
      intentUrl: `https://twitter.com/intent/tweet?in_reply_to=${TWEET_ID}`,
    },
  ]

export default function EngagePage() {
  const router = useRouter()
  const [clicked, setClicked] = useState<Set<EngageAction>>(new Set())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setClicked(getEngageClicked())

    const params = new URLSearchParams(window.location.search)
    const verified = params.get("verified")
    const err = params.get("error")

    if (verified === "1") {
      markTaskComplete("engage")
      router.push("/waitlist")
      return
    }

    if (err) {
      setError(ERROR_MESSAGES[err] ?? `Auth error: ${err}. Please try again.`)
    }
  }, [router])

  const handleActionClick = (action: EngageAction, intentUrl: string) => {
    window.open(intentUrl, "_blank", "width=550,height=420,noopener,noreferrer")
    markEngageClicked(action)
    setClicked(getEngageClicked())
  }

  const handleVerify = async () => {
    setLoading(true)
    setError(null)

    const verifier = generateCodeVerifier()
    const challenge = await generateCodeChallenge(verifier)
    const state = generateState()

    localStorage.setItem("x_engage_pkce_verifier", verifier)
    localStorage.setItem("x_engage_oauth_state", state)

    const params = new URLSearchParams({
      response_type: "code",
      client_id: X_CLIENT_ID,
      redirect_uri: X_ENGAGE_REDIRECT_URI,
      scope: "users.read tweet.read like.read",
      state,
      code_challenge: challenge,
      code_challenge_method: "S256",
    })

    window.location.href = `https://twitter.com/i/oauth2/authorize?${params}`
  }

  return (
    <div className="min-h-screen bg-white px-6 pt-10 pb-12 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => router.push("/waitlist")}
          className="text-[#0E0636] cursor-pointer"
          aria-label="Go back"
        >
          <BsArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-[#888]">
          Step <span className="text-[#6B6AFD] font-semibold">1</span> of 3
        </span>
      </div>

      <h1 className="text-2xl font-bold text-[#0E0636] mb-2">Like · Comment · Repost</h1>
      <p className="text-[#888] text-sm leading-relaxed mb-8">
        Engage with our latest announcement. Every share helps us reach more people.
      </p>

      <a
        href={`https://x.com/GiftedForge/status/${TWEET_ID}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#F5F5FF] rounded-3xl p-5 mb-5 hover:bg-[#EFEFFF] transition-colors"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-[#0E0636] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-[#0E0636]">@GiftedForge</span>
          <span className="text-xs text-[#AAA] ml-auto">View post →</span>
        </div>
        <p className="text-sm text-[#555] leading-relaxed">
          GiftedForge is launching. Tap to view the full post on X.
        </p>
      </a>

      <div className="space-y-3 mb-6">
        {ACTIONS.map(({ key, label, icon: Icon, intentUrl }) => (
          <button
            key={key}
            onClick={() => handleActionClick(key, intentUrl)}
            className="w-full flex items-center gap-4 bg-[#F5F5FF] rounded-2xl px-5 py-4 hover:bg-[#EFEFFF] transition-colors cursor-pointer text-left"
          >
            <Icon
              className={`w-5 h-5 shrink-0 ${clicked.has(key) ? "text-[#6B6AFD]" : "text-[#BBB]"}`}
            />
            <span
              className={`text-sm font-medium flex-1 ${clicked.has(key) ? "text-[#0E0636]" : "text-[#888]"}`}
            >
              {label}
            </span>
            {clicked.has(key) && (
              <BsCheckCircleFill className="w-4 h-4 text-[#6B6AFD] shrink-0" />
            )}
          </button>
        ))}
      </div>

      {error && (
        <p className="mb-5 text-sm text-red-500 flex items-center gap-1.5">
          <BsExclamationCircleFill className="w-4 h-4 shrink-0" />
          {error}
        </p>
      )}

      <button
        onClick={handleVerify}
        disabled={loading}
        className="w-full bg-[#6B6AFD] text-white font-semibold py-4 rounded-2xl hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
      >
        {loading ? "Redirecting to X…" : "Verify Engagement"}
      </button>

      <p className="text-center text-xs text-[#AAAACC] mt-4">
        Your like is verified via X. Repost and comment are on your honor.
      </p>
    </div>
  )
}
