"use client"

import { useState } from "react"
import { BsPatchCheckFill, BsClipboard } from "react-icons/bs"

const codes = [
  { label: "Code 1", value: "2026-9X7K2M" },
  { label: "Code 2", value: "2026-9X7K2M" },
  { label: "Code 3", value: "2026-9X7K2M" },
]

export default function WaitlistSuccessPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [allCopied, setAllCopied] = useState(false)

  const copyCode = (value: string, index: number) => {
    navigator.clipboard.writeText(value)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const copyAll = () => {
    navigator.clipboard.writeText(codes.map((c) => c.value).join("\n"))
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
          You now have 3 activation codes. Share them with friends and bring them on board.
        </p>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        {codes.map((code, i) => (
          <div
            key={i}
            className="bg-[#F5F5FF] rounded-2xl px-5 py-4 flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-[#888] mb-1">{code.label}</p>
              <p className="font-semibold text-[#0E0636]">{code.value}</p>
            </div>
            <button
              onClick={() => copyCode(code.value, i)}
              className="bg-white rounded-full px-4 py-2 text-sm font-medium text-[#6B6AFD] shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              {copiedIndex === i ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={copyAll}
        className="w-full bg-[#6B6AFD] text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-shadow cursor-pointer mb-10"
      >
        <BsClipboard className="w-4 h-4" />
        {allCopied ? "Copied!" : "Copy All Code"}
      </button>

      <h3 className="font-bold text-[#0E0636] text-lg mb-4">Your Progress</h3>

      <div className="border border-[#E8E8F5] rounded-2xl flex items-center mb-5">
        <div className="flex-1 text-center py-5">
          <p className="text-2xl font-bold text-[#0E0636]">06</p>
          <p className="text-xs text-[#888] mt-1">Friends Invited</p>
        </div>
        <div className="w-px h-10 bg-[#E8E8F5]" />
        <div className="flex-1 text-center py-5">
          <p className="text-2xl font-bold text-[#0E0636]">02</p>
          <p className="text-xs text-[#888] mt-1">Activated</p>
        </div>
        <div className="w-px h-10 bg-[#E8E8F5]" />
        <div className="flex-1 text-center py-5">
          <p className="text-2xl font-bold text-[#0E0636]">#98</p>
          <p className="text-xs text-[#888] mt-1">Your Position</p>
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
