"use client"

import { useEffect, useState } from "react"
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
  BsCheckCircleFill,
} from "react-icons/bs"
import { getTaskCompletions, type TaskKey } from "@/lib/waitlist-storage"

const tasks: {
  icon: React.ElementType
  title: string
  desc: string
  href: string
  key: TaskKey
  required: boolean
}[] = [
  {
    icon: BsTwitterX,
    title: "Follow on X",
    desc: "Connect and follow our official handle.",
    href: "/waitlist/follow",
    key: "follow-x",
    required: true,
  },
  {
    icon: BsTelegram,
    title: "Join Telegram",
    desc: "Join our community group for updates.",
    href: "/waitlist/telegram",
    key: "telegram",
    required: true,
  },
  {
    icon: BsArrowRepeat,
    title: "Like · Comment · Repost",
    desc: "Interact now and be part of the momentum.",
    href: "/waitlist/engage",
    key: "engage",
    required: true,
  },
  {
    icon: BsWallet2,
    title: "Create Wallet",
    desc: "Set up your secure in-app wallet.",
    href: "/waitlist/wallet",
    key: "wallet",
    required: true,
  },
  {
    icon: BsPeopleFill,
    title: "Share with Friends",
    desc: "Invite others to join the community.",
    href: "/waitlist/share",
    key: "share-friends",
    required: false,
  },
]

const REQUIRED_KEYS = tasks.filter((t) => t.required).map((t) => t.key)

export default function WaitlistSetupPage() {
  const router = useRouter()
  const [completions, setCompletions] = useState<Partial<Record<TaskKey, boolean>>>({})

  useEffect(() => {
    setCompletions(getTaskCompletions())
  }, [])

  const completedRequired = REQUIRED_KEYS.filter((k) => completions[k]).length
  const allRequiredDone = completedRequired === REQUIRED_KEYS.length

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

      {/* Task grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
        {tasks.map((task) => {
          const Icon = task.icon
          const done = !!completions[task.key]
          return (
            <button
              key={task.key}
              onClick={() => router.push(task.href)}
              className={`rounded-2xl p-5 text-left cursor-pointer transition-colors ${
                done ? "bg-[#F0FFF4]" : "bg-[#F5F5FF] hover:bg-[#EEEEFF]"
              }`}
            >
              {/* Top: icon + badges */}
              <div className="flex items-center justify-between mb-5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  done ? "bg-[#D1FAE5] text-green-600" : "bg-[#E8E8FF] text-[#6B6AFD]"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  {done ? (
                    <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                      <BsCheckCircleFill className="w-3 h-3" /> Done
                    </span>
                  ) : (
                    <span className="text-xs text-amber-500 font-medium">Pending</span>
                  )}
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full text-white ${
                    task.required ? "bg-[#6B6AFD]" : "bg-[#0E0636]"
                  }`}>
                    {task.required ? "Required" : "Optional"}
                  </span>
                </div>
              </div>

              {/* Bottom: title+desc + chevron */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-sm lg:text-base text-[#0E0636] mb-1">{task.title}</p>
                  <p className="text-xs text-[#888]">{task.desc}</p>
                </div>
                {done
                  ? <BsCheckCircleFill className="w-4 h-4 text-green-500 shrink-0" />
                  : <BsChevronRight className="w-4 h-4 text-[#AAA] shrink-0" />
                }
              </div>
            </button>
          )
        })}
      </div>

      {/* Security note */}
      <div className="bg-[#F5F5FF] rounded-2xl p-4 flex items-center gap-3 mb-4">
        <BsLockFill className="w-4 h-4 text-[#6B6AFD] shrink-0" />
        <p className="text-sm text-[#6B6AFD]">
          Your data is encrypted and secure. Complete required tasks to verify your account.
        </p>
      </div>

      {/* Progress hint */}
      {!allRequiredDone && (
        <p className="text-xs text-[#888] text-center mb-4">
          {completedRequired} of {REQUIRED_KEYS.length} required tasks completed
        </p>
      )}

      {/* CTA */}
      <button
        onClick={() => allRequiredDone
          ? router.push("/waitlist/activate")
          : router.push(tasks.find((t) => t.required && !completions[t.key])?.href ?? "/waitlist/activate")
        }
        className="w-full bg-[#6B6AFD] text-white font-semibold py-4 lg:py-5 rounded-2xl hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-shadow cursor-pointer text-base"
      >
        {allRequiredDone ? "Check Progress" : "Continue Setup"}
      </button>
    </div>
  )
}
