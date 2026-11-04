import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'

const LenisContext = createContext(null)

/** Inertial smooth scrolling for wheel/trackpad. Disabled for reduced-motion users. */
export function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 1024) return
    const instance = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true })
    let frame
    const raf = (time) => {
      instance.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    setLenis(instance)
    return () => {
      cancelAnimationFrame(frame)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

export const useLenis = () => useContext(LenisContext)

/** Scroll to a y-position or element, using Lenis when it is running. */
export function scrollToTarget(lenis, target, { immediate = false, offset = -96 } = {}) {
  if (lenis) {
    lenis.scrollTo(target, { immediate, offset: typeof target === 'number' ? 0 : offset, force: true })
    return
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: immediate ? 'instant' : 'smooth' })
  } else if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top, behavior: immediate ? 'instant' : 'smooth' })
  }
}

/** Pause page scrolling while an overlay (menu, lightbox) is open. */
export function useScrollLock(locked) {
  const lenis = useLenis()
  useEffect(() => {
    if (!locked) return
    lenis?.stop()
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      lenis?.start()
      document.documentElement.style.overflow = prev
    }
  }, [locked, lenis])
}
