import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { brand, nav, studios } from '../data/site'
import { Logo, Mark } from './ui'
import { useScrollLock } from './SmoothScroll'

const EASE = [0.22, 1, 0.36, 1]

function isActive(item, location) {
  const [path, hash] = item.to.split('#')
  if (location.pathname !== path) {
    return path === '/projects' && location.pathname.startsWith('/projects/')
  }
  if (hash) return location.hash === `#${hash}`
  const siblingHashes = nav.filter((n) => n.to.startsWith(`${path}#`)).map((n) => `#${n.to.split('#')[1]}`)
  return !siblingHashes.includes(location.hash)
}

export default function Header() {
  const location = useLocation()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 8)
    setHidden(y > 160 && y > prev + 2)
    if (y < prev - 2) setHidden(false)
  })

  useEffect(() => {
    setOpen(false)
    setHidden(false)
  }, [location.pathname, location.hash])

  useScrollLock(open)

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
          scrolled ? 'border-mortise bg-canvas/88 backdrop-blur-md' : 'border-mortise/70 bg-canvas'
        }`}
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="container-arch flex h-[72px] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = isActive(item, location)
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`relative block px-3.5 py-2 t-label transition-colors duration-300 ${active ? 'text-ink' : 'text-slate hover:text-ink'}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-3.5 -bottom-[17px] h-[2px] bg-brass"
                          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <a href={brand.phoneHref} className="hidden items-center gap-2 t-index text-slate transition-colors hover:text-brass xl:flex">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-brass" />
              </span>
              {brand.phone}
            </a>
            <Link
              to="/inquire"
              className="hidden bg-ink px-5 py-2.5 t-label text-bone transition-colors duration-200 hover:bg-brass sm:inline-block"
            >
              Inquire
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative -mr-2 flex size-11 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">Menu</span>
              <motion.span
                className="absolute h-px w-6 bg-ink"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.35, ease: EASE }}
              />
              <motion.span
                className="absolute h-px w-6 bg-ink"
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.35, ease: EASE }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>{open && <MobileMenu location={location} onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  )
}

function MobileMenu({ location, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const items = [...nav, { to: '/inquire', label: 'Inquire' }]

  return (
    <motion.div
      id="mobile-menu"
      className="on-dark fixed inset-0 z-40 flex flex-col overflow-y-auto bg-graphite pt-[72px] text-bone lg:hidden"
      initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      data-lenis-prevent
    >
      <div className="blueprint pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <nav aria-label="Mobile" className="container-arch relative flex-1 py-10">
        <ul>
          {items.map((item, i) => (
            <motion.li
              key={item.to}
              className="border-b border-mortise-dark"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.06, ease: EASE }}
            >
              <Link
                to={item.to}
                onClick={onClose}
                className={`flex items-baseline justify-between py-5 font-serif text-3xl transition-colors hover:text-brass-bright ${
                  isActive(item, location) ? 'text-brass-bright' : ''
                }`}
              >
                {item.label}
                <span className="t-index text-bone-muted">{String(i + 1).padStart(2, '0')}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <motion.div
        className="container-arch relative grid gap-6 pb-10 sm:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.7 } }}
        exit={{ opacity: 0 }}
      >
        {studios.map((s) => (
          <div key={s.id}>
            <p className="t-index text-brass-bright">{s.label}</p>
            <p className="mt-2 t-body text-bone-muted">{s.lines.join(', ')}</p>
          </div>
        ))}
        <a href={brand.phoneHref} className="flex items-center gap-3 t-label text-bone">
          <Mark className="size-6 text-brass-bright" /> {brand.phone}
        </a>
      </motion.div>
    </motion.div>
  )
}
