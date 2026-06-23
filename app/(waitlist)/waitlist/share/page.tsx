"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BsArrowLeft, BsPeopleFill, BsClipboard, BsCheckCircleFill } from "react-icons/bs"
import { markTaskComplete, getEmail } from "@/lib/waitlist-storage"

export default function SharePage() {
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  const referralLink = typeof window !== "undefined"
    ? `${window.location.origin}/early-access?ref=${btoa(getEmail() || "user")}`
    : ""

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDone = () => {
    markTaskComplete("share-friends")
    router.push("/waitlist")
  }

  return (
    <div className="min-h-screen bg-white px-6 pt-10 pb-12 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => router.push("/waitlist")} className="text-[#0E0636] cursor-pointer" aria-label="Go back">
          <BsArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium">
          <span className="text-[#6B6AFD] font-semibold">Step 1</span>
          <span className="text-[#888]"> of 3</span>
        </span>
      </div>

      <h1 className="text-2xl font-bold text-[#0E0636] mb-2">Share with Friends</h1>
      <p className="text-[#888] text-sm leading-relaxed mb-8">
        Invite others to join the community. The more friends you bring, the closer you get to early access.
      </p>

      <div className="bg-[#F5F5FF] rounded-3xl p-6 mb-5 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#E8E8FF] flex items-center justify-center mb-4">
          <BsPeopleFill className="w-9 h-9 text-[#6B6AFD]" />
        </div>
        <h3 className="text-lg font-bold text-[#0E0636] mb-1">Your Referral Link</h3>
        <p className="text-sm text-[#888] text-center mb-5">
          Share this link with friends to invite them
        </p>

        <div className="w-full bg-white rounded-2xl px-4 py-3 flex items-center justify-between gap-3 border border-[#E0E0F0]">
          <span className="text-xs text-[#666] truncate">{referralLink}</span>
          <button
            onClick={handleCopy}
            className="shrink-0 text-[#6B6AFD] hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Copy link"
          >
            {copied
              ? <BsCheckCircleFill className="w-5 h-5 text-green-500" />
              : <BsClipboard className="w-5 h-5" />
            }
          </button>
        </div>
      </div>

      <div className="bg-[#EEF0FF] rounded-2xl p-4 mb-8">
        <p className="text-sm text-[#6B6AFD] leading-relaxed">
          The more friends you invite, the closer you get to early access.
        </p>
      </div>

      <button
        onClick={handleDone}
        className="w-full bg-[#6B6AFD] text-white font-semibold py-4 rounded-2xl hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-shadow cursor-pointer"
      >
        Done
      </button>
    </div>
  )
}
