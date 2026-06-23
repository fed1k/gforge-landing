"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BsArrowLeft, BsShieldFill, BsExclamationCircleFill } from "react-icons/bs"

export default function ActivatePage() {
  const [code, setCode] = useState("")
  const router = useRouter()

  const handleSubmit = () => {
    if (code.trim()) {
      router.push("/waitlist/success")
    }
  }

  return (
    <div className="min-h-screen bg-white px-6 pt-10 pb-12 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => router.push("/waitlist/follow")} className="text-[#0E0636] cursor-pointer" aria-label="Go back">
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
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Enter code e.g, 2026-9X7K2M"
          className="w-full border border-[#D0D0E0] rounded-2xl px-5 py-4 text-sm placeholder:text-[#AAAACC] outline-none focus:border-[#6B6AFD] transition-colors"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-[#6B6AFD] text-white font-semibold py-4 rounded-2xl hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-shadow cursor-pointer mb-6"
      >
        Submit Code
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
