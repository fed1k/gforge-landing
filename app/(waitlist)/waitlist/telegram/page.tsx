"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { BsArrowLeft, BsExclamationCircleFill } from "react-icons/bs"
import { markTaskComplete } from "@/lib/waitlist-storage"
import { verifyTelegramMembership } from "@/app/actions"

const TG_BOT_ID = "8064319708"

interface TelegramAuthData {
  id: number
  first_name: string
  last_name?: string
  username?: string
  photo_url?: string
  auth_date: number
  hash: string
}

const ERROR_MESSAGES: Record<string, string> = {
  not_member: "You haven't joined @Giftedforge yet. Join the channel first and try again.",
  auth_expired: "Session expired. Please try again.",
  invalid_hash: "Verification failed. Please try again.",
  check_failed: "Couldn't check your membership. Please try again.",
  network_error: "Connection failed. Check your internet and try again.",
  popup_blocked: "Popup was blocked. Please allow popups for this site and try again.",
  cancelled: "Verification cancelled. Please try again.",
}

export default function TelegramPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const authCompleted = useRef(false)

  const handleVerify = () => {
    setLoading(true)
    setError(null)
    authCompleted.current = false

    const origin = encodeURIComponent(window.location.origin)
    const returnTo = encodeURIComponent(`${window.location.origin}/waitlist/telegram/callback`)
    const left = Math.round(window.screen.width / 2 - 275)
    const top = Math.round(window.screen.height / 2 - 235)
    const popup = window.open(
      `https://oauth.telegram.org/auth?bot_id=${TG_BOT_ID}&origin=${origin}&embed=1&return_to=${returnTo}`,
      "telegram_login",
      `width=550,height=470,left=${left},top=${top}`,
    )

    if (!popup) {
      setError(ERROR_MESSAGES.popup_blocked)
      setLoading(false)
      return
    }

    const handleMessage = async (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return
      const raw = event.data as Record<string, string> & { type?: string }
      if (raw?.type !== "tg_auth" || !raw.hash) return
      authCompleted.current = true
      window.removeEventListener("message", handleMessage)
      popup.close()

      const data: TelegramAuthData = {
        id: Number(raw.id),
        first_name: raw.first_name ?? "",
        last_name: raw.last_name,
        username: raw.username,
        photo_url: raw.photo_url,
        auth_date: Number(raw.auth_date),
        hash: raw.hash,
      }

      const result = await verifyTelegramMembership(data)
      if (result.member) {
        markTaskComplete("telegram")
        router.push("/waitlist")
      } else {
        setError(ERROR_MESSAGES[result.error ?? ""] ?? ERROR_MESSAGES.check_failed)
        setLoading(false)
      }
    }

    window.addEventListener("message", handleMessage)

    const checkClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkClosed)
        // Delay before treating as cancelled — postMessage may arrive just after close
        setTimeout(() => {
          window.removeEventListener("message", handleMessage)
          if (!authCompleted.current) {
            setError(ERROR_MESSAGES.cancelled)
            setLoading(false)
          }
        }, 1000)
      }
    }, 500)
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

      <h1 className="text-2xl font-bold text-[#0E0636] mb-2">Join Telegram</h1>
      <p className="text-[#888] text-sm leading-relaxed mb-8">
        Join our Telegram channel and verify your membership to complete this step.
      </p>

      <div className="bg-[#F5F5FF] rounded-3xl p-6 mb-5 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#229ED9] flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.06 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.888.942z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-[#0E0636] mb-1">Join @Giftedforge</h3>
        <p className="text-sm text-[#888] text-center mb-5">
          Get the latest updates directly in Telegram
        </p>
        <a
          href="https://t.me/Giftedforge"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full border border-[#CCCCCC] rounded-2xl py-3.5 font-medium text-[#0E0636] text-sm hover:bg-gray-50 transition-colors text-center block"
        >
          Open Telegram &amp; Join
        </a>
      </div>

      <div className="bg-[#F5F5FF] rounded-3xl p-5 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <BsExclamationCircleFill className="w-4 h-4 text-[#6B6AFD]" />
          <span className="font-semibold text-sm text-[#0E0636]">How to verify:</span>
        </div>
        <ol className="space-y-2 text-sm text-[#555] leading-relaxed">
          <li>1- Click &quot;Open Telegram &amp; Join&quot; above and join the channel.</li>
          <li>2- Click &quot;Verify Membership&quot; below and log in with your Telegram account.</li>
          <li>3- We&apos;ll confirm your membership instantly — no bot required.</li>
        </ol>
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
        {loading ? "Verifying…" : "Verify Membership"}
      </button>
    </div>
  )
}
