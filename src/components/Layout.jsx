import { cloneElement, useEffect, useRef } from 'react'
import { useLocation, useOutlet } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import Header from './Header'
import Footer from './Footer'
import { Mark } from './ui'
import { scrollToTarget, useLenis } from './SmoothScroll'
import { getProject } from '../data/projects'

const CURTAIN = [0.76, 0, 0.24, 1]

function routeLabel(pathname) {
  if (pathname === '/') return 'Overview'
  if (pathname === '/projects') return 'Projects'
  if (pathname.startsWith('/projects/')) return getProject(pathname.split('/')[2])?.title ?? 'Project'
  if (pathname === '/practice') return 'The Practice'
  if (pathname === '/inquire') return 'Inquire'
  return 'Redefining Architecture'
}

function scrollToHash(lenis, hash, immediate) {
  if (!hash) return false
  const el = document.getElementById(decodeURIComponent(hash.slice(1)))
  if (!el) return false
  scrollToTarget(lenis, el, { immediate })
  return true
}

/** Wraps each route: a graphite curtain sweeps over on exit and lifts on enter. */
function PageShell({ children }) {
  const location = useLocation()
  const lenis = useLenis()
  const label = routeLabel(location.pathname)

  // Arriving with a #hash (e.g. /practice#approach): scroll once the page is in place.
  useEffect(() => {
    if (!location.hash) return
    const t = setTimeout(() => scrollToHash(lenis, location.hash, false), 650)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] flex origin-bottom items-center justify-center bg-graphite"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.55, ease: CURTAIN }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] flex origin-top flex-col items-center justify-center gap-5 bg-graphite text-bone"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.75, delay: 0.15, ease: CURTAIN } }}
        exit={{ scaleY: 0 }}
      >
        <Mark className="size-12 text-brass-bright" />
        <span className="font-serif text-2xl">{label}</span>
      </motion.div>
      <motion.main
        id="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }}
        exit={{ opacity: 1 }}
      >
        {children}
      </motion.main>
    </>
  )
}

export default function Layout() {
  const location = useLocation()
  const outlet = useOutlet()
  const lenis = useLenis()
  const prevPath = useRef(location.pathname)

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  // Same-page hash links (e.g. "Contact" while already on /inquire).
  useEffect(() => {
    if (prevPath.current === location.pathname) scrollToHash(lenis, location.hash, false)
    prevPath.current = location.pathname
  }, [location.pathname, location.hash, lenis])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-ink focus:px-4 focus:py-3 focus:text-bone"
      >
        Skip to content
      </a>
      <Header />
      <AnimatePresence mode="wait" onExitComplete={() => scrollToTarget(lenis, 0, { immediate: true })}>
        {outlet && (
          <PageShell key={location.pathname}>
            {cloneElement(outlet)}
          </PageShell>
        )}
      </AnimatePresence>
      <Footer />
    </>
  )
}
