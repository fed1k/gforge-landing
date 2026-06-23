"use client"

import { useRouter } from "next/navigation"
import {
  BsArrowLeft,
  BsTwitterX,
  BsTelegram,
  BsArrowRepeat,
  BsWallet2,
  BsPeopleFill,
  BsLockFill,
  BsChevronRight,
} from "react-icons/bs"

const tasks = [
  {
    icon: BsTwitterX,
    title: "Follow on X",
    desc: "Connect and follow our official handle.",
    href: "/waitlist/follow",
    required: true,
  },
  {
    icon: BsTelegram,
    title: "Join Telegram",
    desc: "Join our community group for updates.",
    href: "/waitlist/follow",
    required: true,
  },
  {
    icon: BsArrowRepeat,
    title: "Like · Comment · Repost",
    desc: "Interact now and be part of the momentum.",
    href: "/waitlist/follow",
    required: true,
  },
  {
    icon: BsWallet2,
    title: "Create Wallet",
    desc: "Set up your secure in-app wallet.",
    href: "/waitlist/follow",
    required: true,
  },
  {
    icon: BsPeopleFill,
    title: "Share with Friends",
    desc: "Invite others to join the community.",
    href: "/waitlist/follow",
    required: false,
  },
]

export default function WaitlistSetupPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white px-6 lg:px-16 xl:px-24 pt-10 pb-12">

      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="text-[#0E0636] cursor-pointer mb-3 block"
          aria-label="Go back"
        >
          <BsArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium">
          <span className="text-[#6B6AFD] font-semibold">Step 1</span>
          <span className="text-[#888]"> of 3</span>
        </span>
      </div>

      {/* Title */}
      <div className="mb-8 lg:mb-10">
        <h1 className="text-2xl lg:text-[28px] font-bold text-[#0E0636] mb-2">Complete Your Setup</h1>
        <p className="text-[#888] text-sm">
          Finish a few quick social tasks to verify your identity and unlock full access.
        </p>
      </div>

      {/* Task grid — 1 col on mobile, 2 col on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
        {tasks.map((task, i) => {
          const Icon = task.icon
          return (
            <button
              key={i}
              onClick={() => router.push(task.href)}
              className="bg-[#F5F5FF] rounded-2xl p-5 text-left cursor-pointer hover:bg-[#EEEEFF] transition-colors"
            >
              {/* Top: icon left, badges right */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-full bg-[#E8E8FF] flex items-center justify-center text-[#6B6AFD]">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-amber-500 font-medium">Pending</span>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full text-white ${
                      task.required ? "bg-[#6B6AFD]" : "bg-[#0E0636]"
                    }`}
                  >
                    {task.required ? "Required" : "Optional"}
                  </span>
                </div>
              </div>

              {/* Bottom: title+desc left, chevron right */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-sm lg:text-base text-[#0E0636] mb-1">{task.title}</p>
                  <p className="text-xs text-[#888]">{task.desc}</p>
                </div>
                <BsChevronRight className="w-4 h-4 text-[#AAA] shrink-0" />
              </div>
            </button>
          )
        })}
      </div>

      {/* Security note */}
      <div className="bg-[#F5F5FF] rounded-2xl p-4 flex items-center gap-3 mb-8">
        <BsLockFill className="w-4 h-4 text-[#6B6AFD] shrink-0" />
        <p className="text-sm text-[#6B6AFD]">
          Your data is encrypted and secure. Complete required tasks to verify your account.
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={() => router.push("/waitlist/follow")}
        className="w-full bg-[#6B6AFD] text-white font-semibold py-4 lg:py-5 rounded-2xl hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-shadow cursor-pointer text-base"
      >
        Check Progress
      </button>
    </div>
  )
}
