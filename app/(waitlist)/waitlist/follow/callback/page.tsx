"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { exchangeXCode } from "@/app/actions"
import { saveXUsername } from "@/lib/waitlist-storage"

export default function XCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get("code")
    const xError = params.get("error")
    const returnedState = params.get("state")
    const verifier = sessionStorage.getItem("x_pkce_verifier")
    const savedState = sessionStorage.getItem("x_oauth_state")

    // Twitter returned an error (e.g. user denied access)
    if (xError) {
      router.replace(`/waitlist/follow?error=${xError}`)
      return
    }

    // Diagnose exactly which check failed
    if (!code) {
      router.replace("/waitlist/follow?error=no_code")
      return
    }
    if (!verifier) {
      router.replace("/waitlist/follow?error=no_verifier")
      return
    }
    if (returnedState !== savedState) {
      router.replace("/waitlist/follow?error=state_mismatch")
      return
    }

    sessionStorage.removeItem("x_pkce_verifier")
    sessionStorage.removeItem("x_oauth_state")

    exchangeXCode(code, verifier).then((result) => {
      if (result.username) {
        saveXUsername(result.username)
        router.replace("/waitlist/follow?connected=1")
      } else {
        router.replace(`/waitlist/follow?error=${result.error ?? "exchange_failed"}`)
      }
    })
  }, [router])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <p className="text-[#888] text-sm">Connecting your X account…</p>
    </div>
  )
}
