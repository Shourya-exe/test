import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { motion, useMotionValue, useMotionValueEvent, useScroll } from 'motion/react'
import { approachText, brand, disclosure, principles, services } from '../data/site'
import { categories, featuredSlugs, getProject, projects } from '../data/projects'
import { Arrow, ArrowLink, Button, SectionLabel } from '../components/ui'
import { CountUp, Img, ImageReveal, Reveal, SplitText, Stagger, StaggerItem } from '../components/motion/primitives'
import { ProjectFrame } from '../components/ProjectCard'

export default function Home() {
  return (
    <>
      <title>Redefining Architecture — Architecture, Interiors & Approvals · Kolkata & Bhubaneswar</title>
      <Hero />
      <Stats />
      <SelectedWork />
      <Typologies />
      <Dialogue />
      <Services />
    </>
  )
}

/* ------------------------------------------------------------------ Hero */

function Hero() {
  const duet = getProject('the-duet')
  return (
    <section className="relative overflow-hidden pt-[72px]">
      <div className="blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden="true" />
      <div className="container-arch relative grid gap-12 pt-14 pb-20 lg:grid-cols-12 lg:gap-6 lg:pt-20 lg:pb-28">
        <div className="lg:col-span-7 lg:pr-10">
          <Reveal immediate delay={0.2} y={12}>
            <SectionLabel>Architecture · Interiors · Landscape · Approvals</SectionLabel>
          </Reveal>
          <SplitText as="h1" immediate delay={0.3} text="Buildings shaped by climate, city and *the people who use them.*" className="t-display-xl mt-8 max-w-[15ch]" />
          <Reveal immediate delay={0.9} className="mt-10 max-w-xl border-l border-brass pl-5">
            <p className="font-serif text-xl italic leading-relaxed text-slate-2">
              “Every project starts with the site — its orientation, its rainfall, the street it faces and the rules that govern it.”
            </p>
          </Reveal>
          <Reveal immediate delay={1.05}>
            <p className="mt-8 max-w-xl t-body text-slate">{brand.lead}</p>
          </Reveal>
          <Reveal immediate delay={1.2} className="mt-10 flex flex-wrap gap-3">
            <Button to="/projects">Explore selected work</Button>
            <Button to="/practice" variant="ghost">The practice</Button>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Link to={`/projects/${duet.slug}`} className="group block">
            <ImageReveal
              immediate
              delay={0.45}
              image={duet.images[0]}
              alt={duet.images[0].caption}
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 90vw, 100vw"
              priority
              parallax={6}
              className="aspect-[4/5] w-full"
              imgClassName="transition-transform duration-[1400ms] group-hover:scale-[1.03]"
            />
          </Link>
          <Reveal immediate delay={1.1} className="border-x border-b border-mortise bg-plaster px-5 py-4">
            <div className="flex items-center justify-between t-index text-slate">
              <span>
                Selected work <span className="text-brass">· {duet.index}</span>
              </span>
              <span>{duet.categoryLabel}</span>
            </div>
            <div className="mt-2 flex items-end justify-between gap-4">
              <div>
                <p className="t-display-sm">{duet.title}</p>
                <p className="mt-1 text-[13px] leading-5 text-slate">{duet.summary}</p>
              </div>
              <Link to={`/projects/${duet.slug}`} className="shrink-0 p-2 text-ink transition-colors hover:text-brass" aria-label={`View ${duet.title}`}>
                <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- Stats */

function Stats() {
  const stats = [
    { value: 20, suffix: '+', label: 'Years of practice' },
    { value: 11, label: 'Services under one roof' },
    { value: projects.length, label: 'Projects featured' },
    { value: categories.length, label: 'Building typologies' },
    { value: 2, pad: 2, label: 'Studios — Kolkata & Bhubaneswar' },
  ]
  return (
    <section aria-label="The practice in numbers" className="pb-4">
      <div className="container-arch">
        <Stagger className="hairline-grid grid grid-cols-2 pl-px pt-px md:grid-cols-3 lg:grid-cols-6" stagger={0.07}>
          {stats.map((s) => (
            <StaggerItem key={s.label} className="bg-canvas px-5 py-8">
              <p className="font-serif text-[2.6rem] leading-none tracking-tight">
                <CountUp value={s.value} suffix={s.suffix} pad={s.pad} />
              </p>
              <p className="mt-3 t-index text-slate">{s.label}</p>
            </StaggerItem>
          ))}
          <StaggerItem className="flex flex-col justify-center bg-plaster px-5 py-8">
            <p className="font-serif text-[1.6rem] leading-none text-brass">B.Arch · M.Arch</p>
            <p className="mt-3 t-index text-slate">
              <span className="hl">NIT Calicut</span> · Urban Development
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}

/* --------------------------------------------------------- Selected work */

function SelectedWork() {
  const main = getProject('the-curve')
  const side = getProject('club-interiors')
  const cards = featuredSlugs.filter((s) => !['the-curve', 'the-duet', 'club-interiors'].includes(s)).slice(0, 3).map(getProject)

  return (
    <section className="py-24 md:py-32" aria-labelledby="selected-work">
      <div className="container-arch">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel index="01">Selected work</SectionLabel>
            <SplitText as="h2" text="Selected Architectural *Commissions*" className="t-display-lg mt-6 max-w-[14ch]" />
            <span id="selected-work" className="sr-only">Selected work</span>
          </div>
          <Reveal className="flex flex-col items-start gap-5 md:col-span-5 md:items-end md:text-right" delay={0.15}>
            <p className="max-w-sm t-body text-slate">
              High-rise residences, housing, health care, hospitality, interiors and industrial parks — across {categories.length} typologies.
            </p>
            <ArrowLink to="/projects">View all {projects.length} projects</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-6">
          <FeatureCard project={main} className="lg:col-span-8" ratio="aspect-[16/10]" sizes="(min-width: 1024px) 62vw, (min-width: 640px) 90vw, 100vw" />
          <FeatureCard project={side} className="lg:col-span-4" ratio="aspect-[4/5]" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 90vw, 100vw" />
        </div>

        <Stagger className="hairline-grid mt-16 grid pl-px pt-px md:grid-cols-3" stagger={0.1}>
          {cards.map((p) => (
            <StaggerItem key={p.slug} className="group relative bg-plaster/40 transition-colors duration-500 hover:bg-plaster">
              <Link to={`/projects/${p.slug}`} className="flex h-full flex-col p-6 md:p-7">
                <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                <div className="relative mb-6 aspect-[16/9] overflow-hidden">
                  <Img image={p.images[0]} alt={p.images[0].caption} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                </div>
                <p className="t-index text-slate">
                  <span className="text-brass">{p.index}</span> / {p.categoryLabel}
                </p>
                <h3 className="t-display-sm mt-2">{p.title}</h3>
                <p className="mt-2 t-body text-slate">{p.summary}</p>
                <div className="mt-auto flex items-center justify-between pt-6 t-index text-slate">
                  <span>{p.credit ? `For a ${p.credit.toLowerCase()}` : p.scope[0]}</span>
                  <span className="flex items-center gap-2 text-ink transition-colors group-hover:text-brass">
                    View <Arrow />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal as="p" className="mt-6 t-index text-slate">
          {disclosure}
        </Reveal>
      </div>
    </section>
  )
}

function FeatureCard({ project, className, ratio, sizes }) {
  return (
    <Reveal className={`group ${className}`}>
      <Link to={`/projects/${project.slug}`} className="block">
        <ImageReveal image={project.images[0]} alt={project.images[0].caption} sizes={sizes} parallax={4} className={`${ratio} w-full`} imgClassName="transition-transform duration-[1400ms] ease-[var(--ease-arch)] group-hover:scale-[1.04]" />
      </Link>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="t-index text-slate">
            <span className="text-brass">{project.index}</span> / {project.categoryLabel}
            {project.status && <span className="ml-3 border border-mortise px-1.5 py-0.5">{project.status}</span>}
          </p>
          <h3 className="t-display-md mt-2">
            <Link to={`/projects/${project.slug}`} className="transition-colors hover:text-brass">
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 max-w-xl t-body text-slate">{project.summary}</p>
        </div>
        <Link to={`/projects/${project.slug}`} className="mt-1 hidden shrink-0 items-center gap-2 t-label transition-colors hover:text-brass sm:flex">
          Explore <Arrow />
        </Link>
      </div>
    </Reveal>
  )
}

/* ------------------------------------- Typologies: pinned horizontal scroll */

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']

function Typologies() {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const distance = useRef(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useMotionValue(0)
  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 1024 : true))

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Measure how far the track must travel so the last card ends flush with the margin.
  // Deferred via requestAnimationFrame to prevent forced reflow during mount.
  const rafRef = useRef(0)
  useEffect(() => {
    if (!isDesktop) return
    const measure = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const track = trackRef.current
        if (!track) return
        const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0
        distance.current = Math.max(0, track.scrollWidth - window.innerWidth + pad)
        x.set(-scrollYProgress.get() * distance.current)
      })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', measure)
    }
  }, [x, scrollYProgress, isDesktop])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (isDesktop) x.set(-v * distance.current)
  })

  const items = categories
    .map((c) => {
      const list = projects.filter((p) => p.category === c.id)
      return list.length ? { ...c, list, cover: list[0] } : null
    })
    .filter(Boolean)

  const Card = ({ item, i }) => (
    <Link to={`/projects?type=${item.id}`} className="group block w-[78vw] shrink-0 sm:w-[46vw] lg:w-[30vw]">
      <ProjectFrame project={item.cover} ratio="aspect-[3/4]" badge={false} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw" />
      <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-mortise-dark pb-4">
        <h3 className="t-display-sm text-bone transition-colors group-hover:text-brass-bright">{item.label}</h3>
        <span className="t-index text-bone-muted">
          {String(i + 1).padStart(2, '0')} · {item.list.length} {item.list.length === 1 ? 'project' : 'projects'}
        </span>
      </div>
      <p className="mt-3 text-[13px] leading-5 text-bone-muted">{item.list.map((p) => p.title).join(' · ')}</p>
    </Link>
  )

  return (
    <section ref={ref} className="on-dark relative bg-graphite text-bone lg:h-[300vh]" aria-labelledby="typologies-title">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden">
        <div className="container-arch flex flex-col gap-6 pt-24 md:flex-row md:items-end md:justify-between lg:pt-0">
          <div>
            <SectionLabel index="02" light>
              Typologies
            </SectionLabel>
            <SplitText as="h2" text={`One studio, *${WORDS[items.length] ?? items.length}* building types`} className="t-display-lg mt-6 max-w-[16ch]" />
            <span id="typologies-title" className="sr-only">Typologies</span>
          </div>
          <div className="flex items-center gap-4 lg:w-64">
            <span className="t-index text-bone-muted">Scroll</span>
            <div className="relative hidden h-px flex-1 bg-mortise-dark lg:block">
              <motion.span className="absolute inset-y-0 left-0 w-full origin-left bg-brass-bright" style={{ scaleX: scrollYProgress }} />
            </div>
          </div>
        </div>

        {isDesktop ? (
          /* Desktop: pinned, scroll-linked track */
          <motion.div ref={trackRef} style={{ x }} className="mt-12 flex gap-6 pl-[max(3.5rem,calc((100vw-1280px)/2))]">
            {items.map((item, i) => (
              <Card key={item.id} item={item} i={i} />
            ))}
          </motion.div>
        ) : (
          /* Mobile / tablet: native swipe */
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-24 [scrollbar-width:none]" data-lenis-prevent>
            {items.map((item, i) => (
              <div key={item.id} className="snap-start">
                <Card item={item} i={i} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------- Dialogue with Nature */

function Dialogue() {
  return (
    <section className="on-dark relative overflow-hidden bg-graphite-2 py-24 text-bone md:py-32" aria-labelledby="dialogue-title">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="container-arch relative grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <SectionLabel index="03" light>
            The studio method
          </SectionLabel>
          <h2 id="dialogue-title" className="sr-only">
            Dialogue with Nature
          </h2>
          <SplitText as="p" text="Dialogue with Nature." className="t-display-xl mt-8 text-bone" />
          <SplitText as="p" delay={0.25} text="*Read. Respect. Resolve. Remain.*" className="t-display-xl text-brass-bright" />
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-xl t-body-lg text-bone-muted">{approachText}</p>
          </Reveal>
          <Stagger className="mt-12 grid gap-8 sm:grid-cols-2" delay={0.2}>
            {[
              { t: 'IGBC Green Building', d: 'Design guidance and documentation for IGBC green-building certification.' },
              { t: 'Vaastu Consultation', d: 'Vaastu-aligned planning that fits the site and the brief.' },
            ].map((x) => (
              <StaggerItem key={x.t} className="border-t border-mortise-dark pt-5">
                <p className="t-display-sm text-bone">{x.t}</p>
                <p className="mt-2 t-body text-bone-muted">{x.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="self-end lg:col-span-5" delay={0.2}>
          <div className="border border-mortise-dark bg-graphite/70 p-7 backdrop-blur-sm md:p-9">
            <p className="t-index text-brass-bright">Four working principles</p>
            <ol className="mt-6">
              {principles.map((p, i) => (
                <li key={p.word} className="group border-t border-mortise-dark py-5 first:border-t-0 first:pt-0">
                  <div className="flex gap-5">
                    <span className="t-index pt-1.5 text-brass-bright">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="t-label text-bone">{p.title}</p>
                      <p className="mt-1.5 t-body text-bone-muted">{p.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <Button to="/practice#approach" variant="light" className="mt-6 w-full">
              Read the approach
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Services */

function Services() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="services-title">
      <div className="container-arch">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel index="04">Everything under one roof</SectionLabel>
            <SplitText as="h2" text="Complete Architectural & *Project Delivery*" className="t-display-lg mt-6 max-w-[15ch]" />
            <span id="services-title" className="sr-only">Services</span>
          </div>
          <Reveal className="md:col-span-5" delay={0.15}>
            <p className="t-body text-slate">
              Eleven services from one studio — so drawings, approvals, quantities and site supervision stay one job, and design intent survives all the
              way to handover.
            </p>
          </Reveal>
        </div>

        <Stagger className="hairline-grid mt-14 grid pl-px pt-px sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {services.map((s, i) => (
            <StaggerItem key={s.title} className="group relative bg-canvas p-7 transition-colors duration-500 hover:bg-plaster">
              <span className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-brass transition-transform duration-500 group-hover:scale-y-100" aria-hidden="true" />
              <p className="t-index text-slate">
                <span className="text-brass">{String(i + 1).padStart(2, '0')}</span> / Discipline
              </p>
              <h3 className="t-display-sm mt-3">{s.title}</h3>
              <p className="mt-2 t-body text-slate">{s.text}</p>
            </StaggerItem>
          ))}
          <StaggerItem className="flex flex-col justify-between bg-limestone p-7">
            <div>
              <p className="t-index text-brass">Commission the studio</p>
              <h3 className="t-display-sm mt-3">Begin a consultation</h3>
              <p className="mt-2 t-body text-slate">Share your site and brief. We reply within two working days.</p>
            </div>
            <ArrowLink to="/inquire" className="mt-6 self-start">
              Start a brief
            </ArrowLink>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}
