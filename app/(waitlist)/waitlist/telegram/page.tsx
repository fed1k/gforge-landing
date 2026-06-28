"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { BsArrowLeft, BsExclamationCircleFill } from "react-icons/bs"
import { markTaskComplete } from "@/lib/waitlist-storage"
import { checkTelegramVerification } from "@/app/actions"

const TG_BOT_USERNAME = "giftedforge_bot"
const POLL_INTERVAL_MS = 2500
const POLL_TIMEOUT_MS = 120_000 // 2 minutes

function generateSessionId(): string {
  const arr = new Uint8Array(16)
  crypto.getRandomValues(arr)
  return Array.from(arr, (b) => b.toString(16).padStart(2, "0")).join("")
}

const ERROR_MESSAGES: Record<string, string> = {
  not_member: "You haven't joined our group yet. Join first, then try again.",
  timeout: "Verification timed out. Please try again.",
  network_error: "Connection failed. Check your internet and try again.",
}

export default function TelegramPage() {
  const router = useRouter()
  const [phase, setPhase] = useState<"idle" | "waiting" | "done">("idle")
  const [error, setError] = useState<string | null>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sessionRef = useRef<string | null>(null)

  const stopPolling = () => {
    if (pollRef.current) clearInterval(pollRef.current)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  useEffect(() => () => stopPolling(), [])

  const handleVerify = () => {
    setError(null)
    const sessionId = generateSessionId()
    sessionRef.current = sessionId
    localStorage.setItem("tg_verify_session", sessionId)

    // Open bot deep link — Telegram passes start=gf_<sessionId> to the bot
    window.open(
      `https://t.me/${TG_BOT_USERNAME}?start=gf_${sessionId}`,
      "_blank",
      "noopener,noreferrer",
    )

    setPhase("waiting")

    // Poll backend every 2.5s until verified, not_member, or timeout
    pollRef.current = setInterval(async () => {
      try {
        const result = await checkTelegramVerification(sessionId)
        if (result.status === "verified") {
          stopPolling()
          markTaskComplete("telegram")
          setPhase("done")
          router.push("/waitlist")
        } else if (result.status === "not_member") {
          stopPolling()
          setError(ERROR_MESSAGES.not_member)
          setPhase("idle")
        }
        // "pending" → keep polling
      } catch {
        // network hiccup — keep trying
      }
    }, POLL_INTERVAL_MS)

    timeoutRef.current = setTimeout(() => {
      stopPolling()
      setError(ERROR_MESSAGES.timeout)
      setPhase("idle")
    }, POLL_TIMEOUT_MS)
  }

  const handleRetry = () => {
    setError(null)
    handleVerify()
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
        Join our Telegram community group and verify your membership to complete this step.
      </p>

      {/* Join group card */}
      <div className="bg-[#F5F5FF] rounded-3xl p-6 mb-5 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#229ED9] flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.06 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.888.942z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-[#0E0636] mb-1">Join GiftedForge Group</h3>
        <p className="text-sm text-[#888] text-center mb-5">
          Join our exclusive community group to stay in the loop
        </p>
        <a
          href="https://t.me/+k-pMmANm6dxhYTZi"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full border border-[#CCCCCC] rounded-2xl py-3.5 font-medium text-[#0E0636] text-sm hover:bg-gray-50 transition-colors text-center block"
        >
          Open Telegram &amp; Join
        </a>
      </div>

      {/* How to verify */}
      <div className="bg-[#F5F5FF] rounded-3xl p-5 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <BsExclamationCircleFill className="w-4 h-4 text-[#6B6AFD]" />
          <span className="font-semibold text-sm text-[#0E0636]">How to verify:</span>
        </div>
        <ol className="space-y-2 text-sm text-[#555] leading-relaxed">
          <li>1 — Join the group using the button above.</li>
          <li>2 — Click &quot;Verify Membership&quot; below.</li>
          <li>3 — Start the bot that opens — it checks instantly.</li>
        </ol>
      </div>

      {/* Waiting state */}
      {phase === "waiting" && (
        <div className="mb-5 bg-[#F5F5FF] rounded-2xl px-5 py-4 text-center">
          <p className="text-sm font-semibold text-[#0E0636] mb-1">Waiting for bot confirmation…</p>
          <p className="text-xs text-[#888]">
            Open the bot link that just appeared and tap <strong>Start</strong>. This page will update automatically.
          </p>
          <button
            onClick={() =>
              window.open(
                `https://t.me/${TG_BOT_USERNAME}?start=gf_${sessionRef.current}`,
                "_blank",
                "noopener,noreferrer",
              )
            }
            className="mt-3 text-xs text-[#6B6AFD] font-semibold cursor-pointer underline"
          >
            Reopen bot link
          </button>
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="mb-5 text-sm text-red-500 flex items-center gap-1.5">
          <BsExclamationCircleFill className="w-4 h-4 shrink-0" />
          {error}
        </p>
      )}

      {phase === "idle" && (
        <button
          onClick={error ? handleRetry : handleVerify}
          className="w-full bg-[#6B6AFD] text-white font-semibold py-4 rounded-2xl hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-all cursor-pointer"
        >
          Verify Membership
        </button>
      )}

      {phase === "waiting" && (
        <button
          onClick={() => { stopPolling(); setPhase("idle") }}
          className="w-full border border-[#CCCCCC] text-[#888] font-medium py-4 rounded-2xl cursor-pointer text-sm"
        >
          Cancel
        </button>
      )}
    </div>
  )
}
