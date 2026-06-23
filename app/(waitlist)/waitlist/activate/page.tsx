"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BsArrowLeft, BsShieldFill, BsExclamationCircleFill } from "react-icons/bs"
import { validateActivationCode } from "@/app/actions"
import { getEmail, saveReferralCodes } from "@/lib/waitlist-storage"

const ERROR_MESSAGES: Record<string, string> = {
  invalid: "This code doesn't exist. Double-check and try again.",
  already_used: "This code has already been used.",
  expired: "This code has expired.",
  code_required: "Please enter an activation code.",
  server_error: "Server error. Please try again in a moment.",
  network_error: "Connection failed. Check your internet and try again.",
}

export default function ActivatePage() {
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async () => {
    const trimmed = code.trim()
    if (!trimmed) {
      setError(ERROR_MESSAGES.code_required)
      return
    }

    setLoading(true)
    setError(null)

    const email = getEmail()
    const result = await validateActivationCode(trimmed, email)

    if (result.valid) {
      if (result.referralCodes?.length) saveReferralCodes(result.referralCodes)
      router.push("/waitlist/success")
    } else {
      const reason = result.reason ?? "invalid"
      setError(ERROR_MESSAGES[reason] ?? ERROR_MESSAGES.invalid)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white px-6 pt-10 pb-12 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => router.push("/waitlist")} className="text-[#0E0636] cursor-pointer" aria-label="Go back">
          <BsArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-[#888]">
          Step <span className="text-[#6B6AFD] font-semibold">3</span> of 3
        </span>
      </div>

      <div className="bg-[#F5F5FF] rounded-3xl p-8 mb-8 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#6B6AFD] flex items-center justify-center mb-5">
          <BsShieldFill className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-[#0E0636] mb-2">Activation Required</h2>
        <p className="text-sm text-[#888] text-center leading-relaxed">
          Enter your activation code to secure your spot on the waitlist.
        </p>
      </div>

      <div className="mb-6">
        <label className="block font-semibold text-[#0E0636] text-sm mb-3">
          Activation Code
        </label>
        <input
          type="text"
          value={code}
          onChange={(e) => { setCode(e.target.value); setError(null) }}
          onKeyDown={(e) => e.key === "Enter" && !loading && handleSubmit()}
          placeholder="Enter code e.g. 2026-9X7K2M"
          disabled={loading}
          className={`w-full border rounded-2xl px-5 py-4 text-sm placeholder:text-[#AAAACC] outline-none transition-colors disabled:opacity-50 ${
            error ? "border-red-400 focus:border-red-400" : "border-[#D0D0E0] focus:border-[#6B6AFD]"
          }`}
        />
        {error && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1.5">
            <BsExclamationCircleFill className="w-4 h-4 shrink-0" />
            {error}
          </p>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-[#6B6AFD] text-white font-semibold py-4 rounded-2xl hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-all cursor-pointer mb-6 disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
      >
        {loading ? "Verifying…" : "Submit Code"}
      </button>

      <div className="bg-[#F5F5FF] rounded-3xl p-5">
        <div className="flex items-start gap-3 mb-3">
          <BsExclamationCircleFill className="w-5 h-5 text-[#6B6AFD] shrink-0 mt-0.5" />
          <p className="text-sm text-[#555] leading-relaxed">
            Invite-only access: activation codes are shared by existing users and can be used once.
          </p>
        </div>
        <button className="text-[#6B6AFD] text-sm font-medium ml-8 cursor-pointer hover:underline">
          Get a code here!
        </button>
      </div>
    </div>
  )
}
