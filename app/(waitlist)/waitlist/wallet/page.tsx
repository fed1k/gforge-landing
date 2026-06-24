"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { BsArrowLeft, BsWallet2, BsExclamationCircleFill } from "react-icons/bs"
import { markTaskComplete } from "@/lib/waitlist-storage"
import { checkWalletVerification } from "@/app/actions"

export default function WalletPage() {
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

      const result = await checkWalletVerification(sid)

      if (result.status === "verified") {
        markTaskComplete("wallet")
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
    window.open(`https://t.me/giftedforge_bot?start=wallet_${sessionId}`, "_blank")
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
          Step <span className="text-[#6B6AFD] font-semibold">2</span> of 3
        </span>
      </div>

      <h1 className="text-2xl font-bold text-[#0E0636] mb-2">Connect Wallet</h1>
      <p className="text-[#888] text-sm leading-relaxed mb-8">
        Connect your TON wallet in the GiftedForge mini app to complete this step.
      </p>

      <div className="bg-[#F5F5FF] rounded-3xl p-6 mb-5 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#E8E8FF] flex items-center justify-center mb-4">
          <BsWallet2 className="w-9 h-9 text-[#6B6AFD]" />
        </div>
        <h3 className="text-lg font-bold text-[#0E0636] mb-1">TON Wallet</h3>
        <p className="text-sm text-[#888] text-center mb-5">
          Use Tonkeeper, MyTonWallet, or any TON-compatible wallet
        </p>
        <a
          href="https://tonkeeper.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full border border-[#CCCCCC] rounded-2xl py-3.5 font-medium text-[#0E0636] text-sm hover:bg-gray-50 transition-colors text-center block"
        >
          Don&apos;t have a wallet? Get Tonkeeper
        </a>
      </div>

      <div className="bg-[#F5F5FF] rounded-3xl p-5 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <BsExclamationCircleFill className="w-4 h-4 text-[#6B6AFD]" />
          <span className="font-semibold text-sm text-[#0E0636]">How to connect:</span>
        </div>
        <ol className="space-y-2 text-sm text-[#555] leading-relaxed">
          <li>1- Click &quot;Verify Wallet&quot; below — our bot will open in Telegram.</li>
          <li>2- Tap &quot;Open Mini App&quot; in the bot message.</li>
          <li>3- In the app, go to <strong>Wallet</strong> and connect your TON wallet.</li>
          <li>4- Return here — we&apos;ll detect it automatically.</li>
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
        {polling ? "Waiting for wallet connection…" : "Verify Wallet"}
      </button>
    </div>
  )
}
