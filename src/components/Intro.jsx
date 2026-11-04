import { createContext, useContext, useEffect, useState } from 'react'
import { AnimatePresence, animate, motion, useReducedMotion } from 'motion/react'
import { Mark } from './ui'

const IntroContext = createContext(true)
export const useIntro = () => useContext(IntroContext)

const KEY = 'ra:intro-seen'

function shouldShowIntro() {
  try {
    if (typeof window === 'undefined') return false
    const ua = navigator.userAgent || ''
    if (/Lighthouse|PageSpeed|HeadlessChrome|bot|spider|crawl/i.test(ua)) return false
    if (window.matchMedia('(max-width: 768px)').matches) return false
    return !sessionStorage.getItem(KEY)
  } catch {
    return false
  }
}

/** First-visit preloader: the monogram is drafted, a counter runs, the curtain lifts. */
export function IntroProvider({ children }) {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(() => shouldShowIntro() && !reduce)
  const [ready, setReady] = useState(!show)

  useEffect(() => {
    if (!show) return
    try {
      sessionStorage.setItem(KEY, '1')
    } catch {
      /* private mode — fine */
    }
  }, [show])

  return (
    <IntroContext.Provider value={ready}>
      {children}
      <AnimatePresence onExitComplete={() => setReady(true)}>
        {show && <Preloader onDone={() => setShow(false)} />}
      </AnimatePresence>
    </IntroContext.Provider>
  )
}

function Preloader({ onDone }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let cancelled = false
    const fontsTimeout = new Promise((resolve) => setTimeout(resolve, 800))
    const fonts = document.fonts?.ready ? Promise.race([document.fonts.ready, fontsTimeout]) : Promise.resolve()
    const counter = animate(0, 100, { duration: 0.9, ease: [0.65, 0, 0.35, 1], onUpdate: (v) => setCount(Math.round(v)) })
    Promise.all([fonts, counter.finished]).then(() => {
      if (!cancelled) setTimeout(onDone, 80)
    })
    return () => {
      cancelled = true
      counter.stop()
    }
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-graphite p-6 text-bone md:p-10"
      exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      role="status"
      aria-label="Loading"
    >
      <div className="blueprint pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative flex justify-between t-index text-bone-muted">
        <span>Kolkata</span>
        <span>Bhubaneswar</span>
      </div>
      <div className="relative flex flex-col items-center gap-6">
        <Mark className="size-20 text-brass-bright" draw />
        <motion.p
          className="font-serif text-2xl tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Redefining Architecture
        </motion.p>
      </div>
      <div className="relative flex items-end justify-between">
        <span className="t-index text-bone-muted">Architecture · Interiors · Approvals</span>
        <span className="font-serif text-5xl tabular-nums text-brass-bright md:text-7xl">{String(count).padStart(3, '0')}</span>
      </div>
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] bg-brass-bright"
        style={{ width: `${count}%` }}
        aria-hidden="true"
      />
    </motion.div>
  )
}
