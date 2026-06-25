"use client"

import { useEffect } from "react"

export default function TelegramAuthCallbackPage() {
  useEffect(() => {
    const fromQuery = new URLSearchParams(window.location.search)
    const fromHash = new URLSearchParams(window.location.hash.replace(/^#/, ""))
    const params = fromQuery.get("hash") ? fromQuery : fromHash

    const id = params.get("id")
    const hash = params.get("hash")

    if (id && hash) {
      const authData: Record<string, string> = {}
      params.forEach((value, key) => {
        authData[key] = value
      })
      localStorage.setItem("tg_auth_result", JSON.stringify(authData))
    }

    window.close()
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <p className="text-[#888] text-sm">Verifying…</p>
    </div>
  )
}
