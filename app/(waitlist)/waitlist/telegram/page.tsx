"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { BsArrowLeft, BsExclamationCircleFill } from "react-icons/bs"
import { markTaskComplete } from "@/lib/waitlist-storage"
import { checkTelegramVerification } from "@/app/actions"

export default function TelegramPage() {
  const router = useRouter()
  const [sessionId, setSessionId] = useState("")
  const [polling, setPolling] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const pollTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const elapsedRef = useRef(0)

  useEffect(() => {
    setSessionId(crypto.randomUUID())
    return () => { if (pollTimer.current) clearTimeout(pollTimer.current) }
  }, [])

  const schedulePoll = (sid: string) => {
    pollTimer.current = setTimeout(async () => {
      elapsedRef.current += 3

      if (elapsedRef.current > 120) {
        setPolling(false)
        setError("Verification timed out. Please try again.")
        return
      }

      const result = await checkTelegramVerification(sid)

      if (result.status === "verified") {
        markTaskComplete("telegram")
        router.push("/waitlist")
        return
      }

      schedulePoll(sid)
    }, 3000)
  }

  const startVerification = () => {
    if (!sessionId || polling) return
    setPolling(true)
    setError(null)
    elapsedRef.current = 0
    window.open(`https://t.me/giftedforge_bot?start=gf_${sessionId}`, "_blank")
    schedulePoll(sessionId)
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
          <li>2- Click &quot;Verify Membership&quot; below — our bot will open.</li>
          <li>3- In the bot, forward any message from @Giftedforge.</li>
        </ol>
      </div>

      {error && (
        <p className="mb-5 text-sm text-red-500 flex items-center gap-1.5">
          <BsExclamationCircleFill className="w-4 h-4 shrink-0" />
          {error}
        </p>
      )}

      <button
        onClick={startVerification}
        disabled={polling || !sessionId}
        className="w-full bg-[#6B6AFD] text-white font-semibold py-4 rounded-2xl hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
      >
        {polling ? "Waiting for verification…" : "Verify Membership"}
      </button>
    </div>
  )
}
