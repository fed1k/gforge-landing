"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { verifyXEngage } from "@/app/actions"

export default function EngageCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get("code")
    const xError = params.get("error")
    const returnedState = params.get("state")
    const verifier = localStorage.getItem("x_engage_pkce_verifier")
    const savedState = localStorage.getItem("x_engage_oauth_state")

    if (xError) {
      router.replace(`/waitlist/engage?error=${xError}`)
      return
    }
    if (!code) {
      router.replace("/waitlist/engage?error=no_code")
      return
    }
    if (!verifier) {
      router.replace("/waitlist/engage?error=no_verifier")
      return
    }
    if (returnedState !== savedState) {
      router.replace("/waitlist/engage?error=state_mismatch")
      return
    }

    localStorage.removeItem("x_engage_pkce_verifier")
    localStorage.removeItem("x_engage_oauth_state")

    verifyXEngage(code, verifier).then((result) => {
      if (result.liked) {
        router.replace("/waitlist/engage?verified=1")
      } else if (result.error) {
        router.replace(`/waitlist/engage?error=${result.error}`)
      } else {
        router.replace("/waitlist/engage?error=not_liked")
      }
    })
  }, [router])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <p className="text-[#888] text-sm">Verifying your engagement…</p>
    </div>
  )
}
