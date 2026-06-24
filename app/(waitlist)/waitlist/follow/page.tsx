"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { BsArrowLeft, BsCheckCircleFill, BsExclamationCircleFill } from "react-icons/bs"
import { markTaskComplete, saveXUsername, getXUsername } from "@/lib/waitlist-storage"
import { verifyXFollow } from "@/app/actions"
import { generateCodeVerifier, generateCodeChallenge, generateState } from "@/lib/pkce"

const X_CLIENT_ID = "WU5aenlrejRqMzVRZGdPcURxQkw6MTpjaQ"
const X_REDIRECT_URI = "https://giftedforge.com/waitlist/follow/callback"

export default function FollowPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const saved = getXUsername()
    if (saved) setUsername(saved)

    const params = new URLSearchParams(window.location.search)
    const err = params.get("error")
    if (err) {
      const messages: Record<string, string> = {
        no_code: "Twitter didn't return an auth code. Please try again.",
        no_verifier: "Session expired — please try again from the same browser tab.",
        state_mismatch: "Security check failed (state mismatch). Please try again.",
        access_denied: "You cancelled the X authorization. Please try again.",
      }
      setError(messages[err] ?? `Auth error: ${err}. Please try again.`)
    }
  }, [])

  const handleConnectX = async () => {
    const verifier = generateCodeVerifier()
    const challenge = await generateCodeChallenge(verifier)
    const state = generateState()

    sessionStorage.setItem("x_pkce_verifier", verifier)
    sessionStorage.setItem("x_oauth_state", state)

    const params = new URLSearchParams({
      response_type: "code",
      client_id: X_CLIENT_ID,
      redirect_uri: X_REDIRECT_URI,
      scope: "users.read tweet.read",
      state,
      code_challenge: challenge,
      code_challenge_method: "S256",
    })

    window.location.href = `https://twitter.com/i/oauth2/authorize?${params}`
  }

  const handleVerify = async () => {
    if (!username) return
    setLoading(true)
    setError(null)

    const result = await verifyXFollow(username)

    if (result.follows) {
      markTaskComplete("follow-x")
      router.push("/waitlist")
    } else if (result.protected) {
      setError("Your X account is private. Please make it public and try again.")
      setLoading(false)
    } else {
      setError(result.message ?? "You don't seem to follow @GiftedForge yet. Follow and try again.")
      setLoading(false)
    }
  }

  const handleDisconnect = () => {
    saveXUsername("")
    setUsername("")
    setError(null)
  }

  return (
    <div className="min-h-screen bg-white px-6 pt-10 pb-12 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => router.push("/waitlist")}
          className="text-[#0E0636] cursor-pointer"
          aria-label="Go back"
        >
          <BsArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-[#888]">
          Step <span className="text-[#6B6AFD] font-semibold">2</span> of 3
        </span>
      </div>

      <h1 className="text-2xl font-bold text-[#0E0636] mb-2">Follow on X</h1>
      <p className="text-[#888] text-sm leading-relaxed mb-8">
        Connect your X account so we can verify the follow — no cheating possible.
      </p>

      {!username ? (
        <div className="bg-[#F5F5FF] rounded-3xl p-8 flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#0E0636] flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#0E0636] mb-2">Connect Your X Account</h3>
          <p className="text-sm text-[#888] text-center mb-6">
            We verify your identity so only real followers earn points.
          </p>
          {error && (
            <p className="mb-4 text-sm text-red-500 flex items-center gap-1.5">
              <BsExclamationCircleFill className="w-4 h-4 shrink-0" />
              {error}
            </p>
          )}
          <button
            onClick={handleConnectX}
            className="w-full bg-[#0E0636] text-white font-semibold py-3.5 rounded-2xl hover:opacity-90 transition-opacity cursor-pointer"
          >
            Connect with X
          </button>
        </div>
      ) : (
        <>
          <div className="bg-[#F5F5FF] rounded-3xl p-6 mb-5 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-5">
              <BsCheckCircleFill className="w-4 h-4 text-[#6B6AFD]" />
              <span className="text-sm font-semibold text-[#0E0636]">
                Connected as @{username}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#0E0636] mb-1">Now Follow @GiftedForge</h3>
            <p className="text-sm text-[#888] text-center mb-5">
              Join 2.5k+ users staying updated on our launch
            </p>
            <a
              href="https://x.com/GiftedForge"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-[#CCCCCC] rounded-2xl py-3.5 font-medium text-[#0E0636] text-sm hover:bg-gray-50 transition-colors cursor-pointer text-center block"
            >
              Open X & Follow
            </a>
          </div>

          {error && (
            <p className="mb-5 text-sm text-red-500 flex items-center gap-1.5">
              <BsExclamationCircleFill className="w-4 h-4 shrink-0" />
              {error}
            </p>
          )}

          <button
            onClick={handleVerify}
            disabled={loading}
            className="w-full bg-[#6B6AFD] text-white font-semibold py-4 rounded-2xl hover:shadow-[0px_4px_24px_0px_#6B6AFD66] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none mb-3"
          >
            {loading ? "Verifying…" : "Verify Follow"}
          </button>

          <button
            onClick={handleDisconnect}
            className="w-full text-sm text-[#AAAACC] hover:text-[#888] transition-colors cursor-pointer py-2"
          >
            Use a different X account
          </button>
        </>
      )}
    </div>
  )
}
