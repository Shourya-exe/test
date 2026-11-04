import { useState } from 'react'
import { submitInquiry } from '../../lib/sheets'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+()\-\s\d]{7,20}$/

/** Shared validators keyed by field name. Return an error string or ''. */
export const validators = {
  name: (v) => (!v.trim() ? 'Please tell us your name.' : v.trim().length < 2 ? 'That looks too short.' : ''),
  email: (v) => (!v.trim() ? 'We need an email to reply to.' : !EMAIL_RE.test(v.trim()) ? 'Please check the email address.' : ''),
  phone: (v) => (v.trim() && !PHONE_RE.test(v.trim()) ? 'Please check the phone number.' : ''),
  phoneRequired: (v) => (!v.trim() ? 'A phone number helps us reach you quickly.' : !PHONE_RE.test(v.trim()) ? 'Please check the phone number.' : ''),
  message: (v) => (!v.trim() ? 'A line or two about the project, please.' : v.trim().length < 10 ? 'Could you add a little more detail?' : ''),
}

/**
 * Form state + validation + Google Sheets submission.
 * @param {object} initial  initial field values
 * @param {Record<string, (v:any, all:object) => string>} rules  per-field validators
 * @param {string} formType  label written to the sheet's "Form" column
 */
export function useInquiry(initial, rules, formType) {
  const [values, setValues] = useState(initial)
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverError, setServerError] = useState('')
  const [demo, setDemo] = useState(false)

  const errorsFor = (vals) =>
    Object.fromEntries(Object.entries(rules).map(([k, fn]) => [k, fn(vals[k] ?? '', vals)]).filter(([, e]) => e))

  const errors = errorsFor(values)
  const visibleErrors = Object.fromEntries(Object.entries(errors).filter(([k]) => touched[k]))

  const setField = (name, value) => setValues((v) => ({ ...v, [name]: value }))
  const blur = (name) => setTouched((t) => ({ ...t, [name]: true }))
  const toggle = (name, option) =>
    setValues((v) => {
      const list = v[name] ?? []
      return { ...v, [name]: list.includes(option) ? list.filter((o) => o !== option) : [...list, option] }
    })

  async function submit(e) {
    e?.preventDefault()
    const errs = errorsFor(values)
    if (Object.keys(errs).length) {
      setTouched(Object.fromEntries(Object.keys(rules).map((k) => [k, true])))
      // Focus the first invalid field.
      requestAnimationFrame(() => {
        const first = e?.target?.querySelector?.('[aria-invalid="true"]')
        first?.focus()
      })
      return
    }
    setStatus('submitting')
    setServerError('')
    try {
      const res = await submitInquiry({ formType, ...values })
      setDemo(Boolean(res.demo))
      setStatus('success')
    } catch (err) {
      setServerError(err.message)
      setStatus('error')
    }
  }

  function reset() {
    setValues(initial)
    setTouched({})
    setStatus('idle')
    setServerError('')
  }

  return { values, setField, blur, toggle, errors: visibleErrors, status, serverError, demo, submit, reset }
}
