"use client"

import { useEffect, useState } from "react"
import { BsPatchCheckFill, BsClipboard, BsCheckLg } from "react-icons/bs"
import { getReferralCodes, getEmail } from "@/lib/waitlist-storage"
import { getWaitlistStats } from "@/app/actions"

export default function WaitlistSuccessPage() {
  const [codes, setCodes] = useState<string[]>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [allCopied, setAllCopied] = useState(false)
  const [stats, setStats] = useState<{ invited: number; activated: number } | null>(null)

  useEffect(() => {
    setCodes(getReferralCodes())
    const email = getEmail()
    if (email) {
      getWaitlistStats(email).then(setStats)
    }
  }, [])

  const copyCode = (value: string, index: number) => {
    navigator.clipboard.writeText(value)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const copyAll = () => {
    navigator.clipboard.writeText(codes.join("\n"))
    setAllCopied(true)
    setTimeout(() => setAllCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white px-6 pt-10 pb-12 max-w-md mx-auto">
      <div className="bg-[#F5F5FF] rounded-3xl p-8 flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-full bg-[#6B6AFD] flex items-center justify-center mb-5">
          <BsPatchCheckFill className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-[#0E0636] mb-3">You&apos;re In!</h2>
        <p className="text-sm text-[#888] text-center leading-relaxed">
          You now have {codes.length} activation code{codes.length !== 1 ? "s" : ""}. Share them
          with friends and bring them on board.
        </p>
      </div>

      {codes.length > 0 ? (
        <>
          <div className="flex flex-col gap-3 mb-5">
            {codes.map((code, i) => (
              <div
                key={code}
                className="bg-[#F5F5FF] rounded-2xl px-5 py-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-xs text-[#888] mb-1">Code {i + 1}</p>
                  <p className="font-semibold text-[#0E0636] tracking-wide">{code}</p>
                </div>
                <button
                  onClick={() => copyCode(code, i)}
                  className="bg-white rounded-full px-4 py-2 text-sm font-medium text-[#6B6AFD] shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-1.5"
                >
                  {copiedIndex === i ? (
                    <>
                      <BsCheckLg className="w-3.5 h-3.5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <BsClipboard className="w-3.5 h-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={copyAll}
            className="w-full bg-[#6B6AFD] text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-shadow cursor-pointer mb-10"
          >
            <BsClipboard className="w-4 h-4" />
            {allCopied ? "Copied!" : "Copy All Codes"}
          </button>
        </>
      ) : (
        <div className="bg-[#F5F5FF] rounded-2xl px-5 py-6 text-center mb-10">
          <p className="text-sm text-[#888]">Your referral codes are loading…</p>
        </div>
      )}

      <h3 className="font-bold text-[#0E0636] text-lg mb-4">Your Progress</h3>

      <div className="border border-[#E8E8F5] rounded-2xl flex items-center mb-5">
        <div className="flex-1 text-center py-5">
          <p className="text-2xl font-bold text-[#0E0636]">
            {stats === null ? "—" : String(stats.invited).padStart(2, "0")}
          </p>
          <p className="text-xs text-[#888] mt-1">Friends Invited</p>
        </div>
        <div className="w-px h-10 bg-[#E8E8F5]" />
        <div className="flex-1 text-center py-5">
          <p className="text-2xl font-bold text-[#0E0636]">
            {stats === null ? "—" : String(stats.activated).padStart(2, "0")}
          </p>
          <p className="text-xs text-[#888] mt-1">Activated</p>
        </div>
      </div>

      <div className="bg-[#EEF0FF] rounded-2xl p-4">
        <p className="text-sm text-[#6B6AFD] leading-relaxed">
          The more friends you invite, the closer you get to early access.
        </p>
      </div>
    </div>
  )
}
