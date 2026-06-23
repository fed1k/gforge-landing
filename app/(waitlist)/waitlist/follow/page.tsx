"use client"

import { useRouter } from "next/navigation"
import { BsArrowLeft, BsPersonCircle, BsExclamationCircleFill } from "react-icons/bs"

export default function FollowPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white px-6 pt-10 pb-12 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => router.push("/waitlist")} className="text-[#0E0636] cursor-pointer" aria-label="Go back">
          <BsArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-[#888]">
          Step <span className="text-[#6B6AFD] font-semibold">2</span> of 3
        </span>
      </div>

      <h1 className="text-2xl font-bold text-[#0E0636] mb-2">Follow on X</h1>
      <p className="text-[#888] text-sm leading-relaxed mb-8">
        To complete activation, please follow our official X account and stay connected for
        important announcements and benefits.
      </p>

      <div className="bg-[#F5F5FF] rounded-3xl p-6 mb-5 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#DDDDE8] flex items-center justify-center mb-4">
          <BsPersonCircle className="w-10 h-10 text-[#AAAACC]" />
        </div>
        <h3 className="text-lg font-bold text-[#0E0636] mb-1">Follow @GiftedForge</h3>
        <p className="text-sm text-[#888] text-center mb-5">
          To stay updated, Join 2.5k+ users and other owners
        </p>
        <button className="w-full border border-[#CCCCCC] rounded-2xl py-3.5 font-medium text-[#0E0636] text-sm hover:bg-gray-50 transition-colors cursor-pointer">
          Open X & Follow
        </button>
      </div>

      <div className="bg-[#F5F5FF] rounded-3xl p-5 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <BsExclamationCircleFill className="w-4 h-4 text-[#6B6AFD]" />
          <span className="font-semibold text-sm text-[#0E0636]">How to verify:</span>
        </div>
        <ol className="space-y-2 text-sm text-[#555] leading-relaxed">
          <li>1- Click the button above to launch the X application or website.</li>
          <li>2- Follow @GiftedForge on our official profile page.</li>
          <li>3- Come back here and tap &apos;Verify follow&apos; to confirm activation.</li>
        </ol>
      </div>

      <button
        onClick={() => router.push("/waitlist/activate")}
        className="w-full bg-[#6B6AFD] text-white font-semibold py-4 rounded-2xl hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-shadow cursor-pointer"
      >
        Verify Follow
      </button>
    </div>
  )
}
