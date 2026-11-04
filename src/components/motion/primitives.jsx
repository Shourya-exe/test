import { Children, Fragment, createElement, useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useIntro } from '../Intro'

export const EASE = [0.22, 1, 0.36, 1]
const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' }

/** Fade + rise into view. */
export function Reveal({ as = 'div', children, delay = 0, y = 28, duration = 0.9, className, immediate = false, ...rest }) {
  const ready = useIntro()
  const Comp = motion[as] ?? motion.div
  const trigger = immediate ? { animate: ready ? 'show' : 'hidden' } : { whileInView: 'show', viewport: VIEWPORT }
  return (
    <Comp
      className={className}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration, delay, ease: EASE } },
      }}
      {...trigger}
      {...rest}
    >
      {children}
    </Comp>
  )
}

/** Parent that staggers its <StaggerItem> children as they enter view. */
export function Stagger({ as = 'div', children, className, stagger = 0.08, delay = 0, ...rest }) {
  const Comp = motion[as] ?? motion.div
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({ as = 'div', children, className, y = 24, ...rest }) {
  const Comp = motion[as] ?? motion.div
  return (
    <Comp
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

/**
 * Headline that rises word by word from behind a mask.
 * Wrap words in *asterisks* to set them in italic.
 */
export function SplitText({ as = 'h2', text, className, delay = 0, stagger = 0.045, immediate = false }) {
  const reduce = useReducedMotion()
  const ready = useIntro()
  const words = []
  let italic = false
  text.split(/(\*)/).forEach((part) => {
    if (part === '*') {
      italic = !italic
      return
    }
    part
      .split(/(\s+)/)
      .filter((w) => w && !/^\s+$/.test(w))
      .forEach((w) => words.push({ w, italic }))
  })
  const plain = text.replace(/\*/g, '')

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  }
  const word = {
    hidden: { y: reduce ? 0 : '108%', opacity: reduce ? 0 : 1 },
    show: { y: '0%', opacity: 1, transition: { duration: reduce ? 0.4 : 1, ease: EASE } },
  }
  const trigger = immediate ? { animate: ready ? 'show' : 'hidden' } : { whileInView: 'show', viewport: VIEWPORT }

  return createElement(
    motion[as] ?? motion.h2,
    { className, 'aria-label': plain, initial: 'hidden', variants: container, ...trigger },
    words.map(({ w, italic: it }, i) => (
      <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
        <motion.span variants={word} className={`inline-block will-change-transform ${it ? 'italic' : ''}`}>
          {w}
        </motion.span>
        {i < words.length - 1 ? ' ' : null}
      </span>
    )),
  )
}

/** A 1px structural rule that draws itself across. */
export function Rule({ className = '', dark = false, delay = 0, vertical = false }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`block ${vertical ? 'w-px h-full origin-top' : 'h-px w-full origin-left'} ${dark ? 'bg-mortise-dark' : 'bg-mortise'} ${className}`}
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.4, delay, ease: EASE }}
    />
  )
}

/** Animated number: counts up the first time it scrolls into view. */
export function CountUp({ value, prefix = '', suffix = '', pad = 0, duration = 1.8, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration, reduce])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {String(display).padStart(pad, '0')}
      {suffix}
    </span>
  )
}

/** Responsive image from the generated manifest; fades in once decoded. */
export function Img({ image, alt = '', sizes = '100vw', priority = false, className = '', style }) {
  const [loaded, setLoaded] = useState(priority)
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true)
  }, [])
  if (!image) return null
  return (
    <img
      ref={ref}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'auto' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
      onLoad={() => setLoaded(true)}
      className={`${priority || loaded ? 'opacity-100' : 'opacity-0'} ${priority ? '' : 'transition-opacity duration-500'} ${className}`}
      style={style}
    />
  )
}

/**
 * Image that is "unveiled" with a clip-path wipe while settling from a slight
 * zoom; optional scroll parallax afterwards.
 */
export function ImageReveal({
  image,
  alt,
  sizes,
  priority = false,
  className = '',
  imgClassName = '',
  parallax = 0,
  from = 'bottom',
  delay = 0,
  immediate = false,
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const ready = useIntro()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`])

  const clipFrom = {
    bottom: 'inset(100% 0% 0% 0%)',
    top: 'inset(0% 0% 100% 0%)',
    left: 'inset(0% 100% 0% 0%)',
    right: 'inset(0% 0% 0% 100%)',
  }[from]

  // Priority / LCP image is never masked out or delayed so LCP paints instantly
  const isLcp = priority || reduce

  const trigger = immediate
    ? { animate: ready || isLcp ? 'show' : 'hidden' }
    : { whileInView: 'show', viewport: { once: true, margin: '0px 0px -8% 0px' } }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden bg-limestone ${className}`}
      initial={isLcp ? 'show' : 'hidden'}
      {...trigger}
      variants={{
        hidden: { clipPath: reduce ? 'inset(0% 0% 0% 0%)' : clipFrom, opacity: reduce ? 0 : 1 },
        show: { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, transition: { duration: isLcp ? 0.3 : 1.3, delay: isLcp ? 0 : delay, ease: [0.76, 0, 0.24, 1] } },
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={parallax && !reduce ? { y, scale: 1 + parallax / 50 } : undefined}
      >
        <motion.div
          className="h-full w-full"
          variants={{
            hidden: { scale: isLcp ? 1 : 1.18 },
            show: { scale: 1, transition: { duration: isLcp ? 0.3 : 1.8, delay: isLcp ? 0 : delay, ease: EASE } },
          }}
        >
          <Img image={image} alt={alt} sizes={sizes} priority={priority} className={`h-full w-full object-cover ${imgClassName}`} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

/** Infinite horizontal ticker (pure CSS, pauses on hover). */
export function Marquee({ children, className = '', reverse = false }) {
  const items = Children.toArray(children)
  return (
    <div className={`group flex overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {items.map((c, i) => (
          <Fragment key={`a${i}`}>{c}</Fragment>
        ))}
        {items.map((c, i) => (
          <Fragment key={`b${i}`}>{c}</Fragment>
        ))}
      </div>
    </div>
  )
}
