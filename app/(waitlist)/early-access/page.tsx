"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BsLayersFill } from "react-icons/bs"
import { Outfit } from "next/font/google"
import { saveEmail } from "@/lib/waitlist-storage"

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit', // optional but recommended
  display: 'swap',
})

export default function EarlyAccessPage() {
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleSubmit = () => {
    if (email.trim()) {
      saveEmail(email.trim())
      router.push("/waitlist")
    }
  }

  return (
    <div className={`min-h-screen bg-[#DAD8FF] px-8 lg:px-10 xl:px-29 pt-20 lg:pt-28 pb-16 flex flex-col lg:justify-center ${outfit.className}`}>

      {/* Mobile-only icon */}
      <div className="w-22 h-22 lg:hidden bg-[#666F8B1A] rounded-2xl flex items-center justify-center mb-8">
        <img src="/sms-tracking.svg" className="w-12 h-12" alt="" />
      </div>

      {/* Heading */}
      <h1 className="text-[42px] lg:text-[96px] font-bold text-[#0E0636] leading-[1.0] uppercase mb-8 lg:mb-17">
        {/* Mobile: two short lines */}
        <span className="lg:hidden">GET EARLY<br />ACCESS</span>
        {/* Desktop: "GET EARLY ACCESS TO OUR" / "UPCOMING LAUNCH.." */}
        <span className="hidden lg:block">GET EARLY ACCESS TO OUR<br />UPCOMING LAUNCH..</span>
      </h1>

      {/* Bottom row: paragraph left | input+button right */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0">
        <p className="text-[#0E0636] text-2xl font-light ">
          Be the first to try it when we launch.<br className="lg:hidden" />
          No spam—only <br className="hidden lg:inline" /> important updates.<br className="lg:hidden" />
          Unsubscribe anytime.
        </p>

        <div className="flex flex-col items-start sm:flex-row lg:items-center gap-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Please enter your e-mail adress"
            className="w-full lg:w-[378px] border border-[#666F8B] rounded-full px-6 py-4 text-sm bg-transparent placeholder:text-[#666F8B] outline-none focus:border-[#6B6AFD] transition-colors"
          />
          <button
            onClick={handleSubmit}
            className="bg-[#6B6AFD] text-white font-semibold rounded-full px-10 h-13 whitespace-nowrap hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-shadow cursor-pointer"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  )
}
