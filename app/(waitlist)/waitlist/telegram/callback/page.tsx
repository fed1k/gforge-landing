"use client"

import { useEffect } from "react"

export default function TelegramAuthCallbackPage() {
  useEffect(() => {
    // Telegram redirects here with auth data as query params or hash fragment
    const fromQuery = new URLSearchParams(window.location.search)
    const fromHash = new URLSearchParams(window.location.hash.replace(/^#/, ""))
    const params = fromQuery.get("hash") ? fromQuery : fromHash

    const id = params.get("id")
    const hash = params.get("hash")

    if (id && hash && window.opener) {
      const authData: Record<string, string> = {}
      params.forEach((value, key) => {
        authData[key] = value
      })
      try {
        window.opener.postMessage({ type: "tg_auth", ...authData }, window.location.origin)
      } catch {}
    }

    setTimeout(() => window.close(), 200)
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <p className="text-[#888] text-sm">Verifying…</p>
    </div>
  )
}
