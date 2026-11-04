import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useScrollLock } from './SmoothScroll'

const EASE = [0.22, 1, 0.36, 1]

export default function Lightbox({ images, index, onClose, onChange, title }) {
  const open = index !== null && index !== undefined
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const lastFocus = useRef(null)
  useScrollLock(open)

  // Move focus into the dialog on open; give it back on close.
  useEffect(() => {
    if (!open) return
    lastFocus.current = document.activeElement
    closeRef.current?.focus()
    return () => lastFocus.current?.focus?.()
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length)
      if (e.key === 'Tab' && dialogRef.current) {
        const items = [...dialogRef.current.querySelectorAll('button')]
        const i = items.indexOf(document.activeElement)
        e.preventDefault()
        items[(i + (e.shiftKey ? -1 : 1) + items.length) % items.length]?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, index, images.length, onClose, onChange])

  const img = open ? images[index] : null
  const go = (d) => onChange((index + d + images.length) % images.length)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dialogRef}
          className="on-dark fixed inset-0 z-[90] flex flex-col bg-graphite/97 text-bone"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — image viewer`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          data-lenis-prevent
        >
          <div className="container-arch flex h-[72px] shrink-0 items-center justify-between gap-4">
            <p className="t-index text-bone-muted">
              <span className="text-brass-bright">{String(index + 1).padStart(2, '0')}</span> / {String(images.length).padStart(2, '0')} · {title}
            </p>
            <button ref={closeRef} onClick={onClose} className="group flex items-center gap-3 t-label text-bone hover:text-brass-bright">
              Close
              <span className="relative block size-4" aria-hidden="true">
                <span className="absolute top-1/2 left-0 h-px w-4 rotate-45 bg-current" />
                <span className="absolute top-1/2 left-0 h-px w-4 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-20">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={img.src}
                src={img.src}
                srcSet={img.srcSet}
                sizes="92vw"
                alt={img.caption}
                className="max-h-full max-w-full cursor-grab object-contain active:cursor-grabbing"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease: EASE }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1)
                  else if (info.offset.x > 80) go(-1)
                }}
              />
            </AnimatePresence>
            {images.length > 1 && (
              <>
                <NavButton dir="prev" onClick={() => go(-1)} />
                <NavButton dir="next" onClick={() => go(1)} />
              </>
            )}
          </div>

          <div className="container-arch flex h-20 shrink-0 items-center justify-between gap-4">
            <p className="font-serif text-lg">{img.caption}</p>
            <p className="hidden t-index text-bone-muted sm:block">← → to browse · Esc to close</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function NavButton({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Previous image' : 'Next image'}
      className={`absolute top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center border border-mortise-dark text-bone transition-colors hover:border-brass-bright hover:text-brass-bright md:flex ${
        dir === 'prev' ? 'left-4' : 'right-4'
      }`}
    >
      <svg viewBox="0 0 20 10" className={`h-2.5 w-5 ${dir === 'prev' ? 'rotate-180' : ''}`} aria-hidden="true">
        <path d="M0 5h18M14 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </button>
  )
}
