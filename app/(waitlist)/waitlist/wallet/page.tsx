"use client"

import { useRouter } from "next/navigation"
import { BsArrowLeft, BsWallet2, BsExclamationCircleFill } from "react-icons/bs"
import { markTaskComplete } from "@/lib/waitlist-storage"

export default function WalletPage() {
  const router = useRouter()

  const handleVerify = () => {
    markTaskComplete("wallet")
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

      <h1 className="text-2xl font-bold text-[#0E0636] mb-2">Create Wallet</h1>
      <p className="text-[#888] text-sm leading-relaxed mb-8">
        Set up your secure in-app wallet to send, receive, and manage payments on GiftedForge.
      </p>

      <div className="bg-[#F5F5FF] rounded-3xl p-6 mb-5 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#E8E8FF] flex items-center justify-center mb-4">
          <BsWallet2 className="w-9 h-9 text-[#6B6AFD]" />
        </div>
        <h3 className="text-lg font-bold text-[#0E0636] mb-1">GiftedForge Wallet</h3>
        <p className="text-sm text-[#888] text-center mb-5">
          Secure, instant payments built into your account
        </p>
        <button className="w-full border border-[#CCCCCC] rounded-2xl py-3.5 font-medium text-[#0E0636] text-sm hover:bg-gray-50 transition-colors cursor-pointer">
          Create My Wallet
        </button>
      </div>

      <div className="bg-[#F5F5FF] rounded-3xl p-5 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <BsExclamationCircleFill className="w-4 h-4 text-[#6B6AFD]" />
          <span className="font-semibold text-sm text-[#0E0636]">How it works:</span>
        </div>
        <ol className="space-y-2 text-sm text-[#555] leading-relaxed">
          <li>1- Click the button above to create your wallet.</li>
          <li>2- Your wallet is linked to your GiftedForge account.</li>
          <li>3- Come back here and tap &apos;Wallet Created&apos; to confirm.</li>
        </ol>
      </div>

      <button
        onClick={handleVerify}
        className="w-full bg-[#6B6AFD] text-white font-semibold py-4 rounded-2xl hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-shadow cursor-pointer"
      >
        Wallet Created
      </button>
    </div>
  )
}
