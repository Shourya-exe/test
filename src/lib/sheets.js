/**
 * Sends an inquiry to Google Sheets through a Google Apps Script web app.
 *
 * The request is a "simple" CORS request (form-urlencoded POST, no custom
 * headers), so the browser sends no preflight — which Apps Script can't answer.
 * Every submission carries a unique id; the script ignores repeats, so a retry
 * can never create a duplicate row.
 *
 * Setup: google-apps-script/Code.gs + README.md → "Connecting the inquiry form".
 */
const ENDPOINT = import.meta.env.VITE_GOOGLE_SHEETS_ENDPOINT

export const isSheetsConfigured = Boolean(ENDPOINT)

function newId() {
  if (globalThis.crypto?.randomUUID) return crypto.randomUUID()
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
}

function toParams(fields) {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === null) continue
    params.append(key, Array.isArray(value) ? value.join(', ') : String(value).trim())
  }
  return params
}

/**
 * @param {Record<string, string | string[]>} fields
 * @returns {Promise<{ ok: true, demo?: boolean }>}
 */
export async function submitInquiry(fields) {
  const body = toParams({
    ...fields,
    submissionId: newId(),
    page: typeof window !== 'undefined' ? window.location.pathname : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  })

  if (!ENDPOINT) {
    console.warn(
      '[inquiry] VITE_GOOGLE_SHEETS_ENDPOINT is not set — running in demo mode, nothing was saved.\n',
      Object.fromEntries(body),
    )
    await new Promise((r) => setTimeout(r, 900))
    return { ok: true, demo: true }
  }

  let response
  try {
    response = await fetch(ENDPOINT, { method: 'POST', body })
  } catch (err) {
    // A CORS or redirect hiccup can hide a successful write from us. Re-send
    // opaquely; the submission id stops the script from writing it twice.
    if (err instanceof TypeError && navigator.onLine !== false) {
      await fetch(ENDPOINT, { method: 'POST', body, mode: 'no-cors' })
      return { ok: true }
    }
    throw new Error('We couldn’t reach the server. Check your connection and try again.')
  }

  let data
  try {
    data = await response.json()
  } catch {
    throw new Error('The form service returned an unexpected response. Please try again shortly.')
  }
  if (!data?.ok) throw new Error(data?.error || 'Your inquiry could not be saved. Please try again.')
  return data
}
