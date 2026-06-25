export type TaskKey = "follow-x" | "telegram" | "engage" | "share-friends"

const TASKS_KEY = "gf_tasks"
const EMAIL_KEY = "gf_email"

export function getTaskCompletions(): Partial<Record<TaskKey, boolean>> {
  if (typeof window === "undefined") return {}
  try {
    const stored = localStorage.getItem(TASKS_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

export function markTaskComplete(key: TaskKey): void {
  const current = getTaskCompletions()
  localStorage.setItem(TASKS_KEY, JSON.stringify({ ...current, [key]: true }))
}

export function saveEmail(email: string): void {
  localStorage.setItem(EMAIL_KEY, email)
}

export function getEmail(): string {
  if (typeof window === "undefined") return ""
  return localStorage.getItem(EMAIL_KEY) ?? ""
}

const X_USERNAME_KEY = "gf_x_username"

export function saveXUsername(username: string): void {
  localStorage.setItem(X_USERNAME_KEY, username.replace(/^@/, "").trim())
}

export function getXUsername(): string {
  if (typeof window === "undefined") return ""
  return localStorage.getItem(X_USERNAME_KEY) ?? ""
}

const ENGAGE_KEY = "gf_engage_clicked"
export type EngageAction = "like" | "repost" | "comment"

export function getEngageClicked(): Set<EngageAction> {
  if (typeof window === "undefined") return new Set()
  try {
    const s = localStorage.getItem(ENGAGE_KEY)
    return s ? new Set(JSON.parse(s) as EngageAction[]) : new Set()
  } catch { return new Set() }
}

export function markEngageClicked(action: EngageAction): void {
  const current = getEngageClicked()
  current.add(action)
  localStorage.setItem(ENGAGE_KEY, JSON.stringify([...current]))
}

const REFERRAL_CODES_KEY = "gf_referral_codes"

export function saveReferralCodes(codes: string[]): void {
  localStorage.setItem(REFERRAL_CODES_KEY, JSON.stringify(codes))
}

export function getReferralCodes(): string[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(REFERRAL_CODES_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}
