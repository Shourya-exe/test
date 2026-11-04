import { useId } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const inputBase =
  'w-full border bg-plaster px-4 py-3.5 text-[14px] leading-6 text-ink placeholder:text-slate/60 transition-colors duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-brass hover:border-slate/60'
const inputDark =
  'w-full border bg-graphite-2 px-4 py-3.5 text-[14px] leading-6 text-bone placeholder:text-bone-muted/50 transition-colors duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-brass-bright hover:border-bone-muted/60'

function FieldShell({ id, label, required, error, hint, dark, children, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className={`mb-2 block t-index ${dark ? 'text-bone-muted' : 'text-slate'}`}>
        {label}
        {required && <span className={dark ? 'text-brass-bright' : 'text-brass'}> *</span>}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error ? (
          <motion.p
            key="err"
            id={`${id}-error`}
            className="mt-1.5 text-[12px] text-error"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
          >
            {error}
          </motion.p>
        ) : hint ? (
          <p key="hint" id={`${id}-hint`} className={`mt-1.5 text-[12px] ${dark ? 'text-bone-muted' : 'text-slate'}`}>
            {hint}
          </p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function describedBy(id, error, hint) {
  if (error) return `${id}-error`
  if (hint) return `${id}-hint`
  return undefined
}

export function TextField({ label, name, value, onChange, onBlur, error, hint, required, dark, className, type = 'text', ...rest }) {
  const id = useId()
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint} dark={dark} className={className}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur?.(name)}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={`${dark ? inputDark : inputBase} ${error ? 'border-error' : dark ? 'border-mortise-dark' : 'border-mortise'}`}
        {...rest}
      />
    </FieldShell>
  )
}

export function TextArea({ label, name, value, onChange, onBlur, error, hint, required, dark, className, rows = 5, ...rest }) {
  const id = useId()
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint} dark={dark} className={className}>
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur?.(name)}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={`${dark ? inputDark : inputBase} resize-y ${error ? 'border-error' : dark ? 'border-mortise-dark' : 'border-mortise'}`}
        {...rest}
      />
    </FieldShell>
  )
}

export function SelectField({ label, name, value, onChange, options, placeholder = 'Select…', error, hint, required, dark, className }) {
  const id = useId()
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint} dark={dark} className={className}>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, error, hint)}
          className={`${dark ? inputDark : inputBase} appearance-none pr-10 ${!value ? (dark ? 'text-bone-muted/70' : 'text-slate/70') : ''} ${
            error ? 'border-error' : dark ? 'border-mortise-dark' : 'border-mortise'
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <svg viewBox="0 0 10 6" className={`pointer-events-none absolute right-4 top-1/2 h-1.5 w-2.5 -translate-y-1/2 ${dark ? 'text-bone-muted' : 'text-slate'}`} aria-hidden="true">
          <path d="M0 0l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>
    </FieldShell>
  )
}

/** Square checkbox with a solid brass inner block when checked (DESIGN.md → Checkboxes). */
export function CheckMark({ checked, dark }) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex size-4 shrink-0 items-center justify-center border transition-colors ${
        checked ? (dark ? 'border-brass-bright' : 'border-brass') : dark ? 'border-bone-muted' : 'border-slate/70'
      }`}
    >
      <motion.span
        className={`size-2 ${dark ? 'bg-brass-bright' : 'bg-brass'}`}
        initial={false}
        animate={{ scale: checked ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </span>
  )
}

/** A selectable card (multi-select), e.g. project typology. */
export function CheckCard({ label, hint, checked, onToggle }) {
  return (
    <label
      className={`group relative flex cursor-pointer items-start gap-3 border p-4 transition-colors duration-200 ${
        checked ? 'border-brass bg-plaster' : 'border-mortise bg-plaster/50 hover:border-slate/60'
      } has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brass`}
    >
      <input type="checkbox" className="sr-only" checked={checked} onChange={onToggle} />
      <span className="flex-1">
        <span className="block text-[14px] font-medium leading-5 text-ink">{label}</span>
        {hint && <span className="mt-1 block text-[12px] leading-5 text-slate">{hint}</span>}
      </span>
      <CheckMark checked={checked} />
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-brass"
        initial={false}
        animate={{ scaleX: checked ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </label>
  )
}

/** Compact toggle chip (multi-select), e.g. services. */
export function Chip({ label, checked, onToggle }) {
  return (
    <label
      className={`inline-flex cursor-pointer items-center gap-2.5 border px-3.5 py-2.5 text-[13px] transition-colors duration-200 ${
        checked ? 'border-brass bg-plaster text-ink' : 'border-mortise text-slate hover:border-slate/60 hover:text-ink'
      } has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brass`}
    >
      <input type="checkbox" className="sr-only" checked={checked} onChange={onToggle} />
      <CheckMark checked={checked} />
      {label}
    </label>
  )
}

/** Hidden spam trap. Humans never see or fill it. */
export function Honeypot({ value, onChange }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Leave this empty
        <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange('hp_field', e.target.value)} />
      </label>
    </div>
  )
}
