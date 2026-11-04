import { Link } from 'react-router'
import { motion } from 'motion/react'
import { brand } from '../data/site'

/** RA monogram: a drafted square with a mortise notch. */
export function Mark({ className = 'size-9', draw = false }) {
  const stroke = draw
    ? { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 1.2, ease: [0.65, 0, 0.35, 1] } }
    : {}
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      <motion.rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1.25" {...stroke} />
      <motion.path d="M1 30h10v9" stroke="currentColor" strokeWidth="1.25" {...stroke} />
      <text x="21" y="25" textAnchor="middle" fill="currentColor" style={{ font: '400 14px "Playfair Display", Georgia, serif' }}>
        RA
      </text>
    </svg>
  )
}

export function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`} aria-label={`${brand.name} — home`}>
      <Mark className={`size-9 shrink-0 transition-colors duration-300 ${light ? 'text-bone group-hover:text-brass-bright' : 'text-ink group-hover:text-brass'}`} />
      <span className={`flex flex-col leading-none ${light ? 'text-bone' : 'text-ink'}`}>
        <span className="font-serif text-[17px] tracking-[0.01em]">Redefining</span>
        <span className="t-index mt-1 text-[9px] tracking-[0.28em] opacity-70">Architecture</span>
      </span>
    </Link>
  )
}

const ARROW = (
  <svg viewBox="0 0 20 10" className="h-2.5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
    <path d="M0 5h18M14 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

const VARIANTS = {
  primary: 'bg-ink text-bone hover:bg-brass',
  ghost: 'border border-ink text-ink hover:border-brass hover:text-brass',
  light: 'bg-bone text-ink hover:bg-brass-bright',
  ghostLight: 'border border-bone/60 text-bone hover:border-brass-bright hover:text-brass-bright',
}

/** Sharp right-angled action (DESIGN.md → Buttons). Renders <Link>, <a> or <button>. */
export function Button({ to, href, variant = 'primary', arrow = true, className = '', children, ...rest }) {
  const cls = `group inline-flex items-center justify-center gap-3 px-7 py-3.5 t-label transition-colors duration-200 disabled:opacity-60 disabled:pointer-events-none ${VARIANTS[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && ARROW}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>
  return <button className={cls} {...rest}>{content}</button>
}

/** Editorial text link with a hairline rule and arrow. */
export function ArrowLink({ to, href, children, className = '', light = false, ...rest }) {
  const cls = `group inline-flex items-center gap-2.5 t-label border-b pb-1.5 transition-colors duration-300 ${
    light ? 'border-mortise-dark text-bone hover:text-brass-bright hover:border-brass-bright' : 'border-mortise text-ink hover:text-brass hover:border-brass'
  } ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}{ARROW}</Link>
  return <a href={href} className={cls} {...rest}>{children}{ARROW}</a>
}

/** "01 / SECTION" index label with a short brass rule. */
export function SectionLabel({ index, children, light = false, className = '' }) {
  return (
    <div className={`flex items-center gap-3 t-index ${light ? 'text-brass-bright' : 'text-brass'} ${className}`}>
      <motion.span
        aria-hidden="true"
        className="h-px w-8 origin-left bg-current"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      {index && <span>{index}</span>}
      {index && <span className="opacity-50">/</span>}
      <span className={light ? 'text-bone-muted' : 'text-slate'}>{children}</span>
    </div>
  )
}

export const Arrow = () => ARROW
