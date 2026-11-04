import { useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { approachText, disclosure } from '../data/site'
import { categories, projects } from '../data/projects'
import { Button, SectionLabel } from '../components/ui'
import { CountUp, Reveal, SplitText, Stagger, StaggerItem } from '../components/motion/primitives'
import { ProjectCard } from '../components/ProjectCard'
import { scrollToTarget, useLenis } from '../components/SmoothScroll'

const PER_PAGE = 6
const EASE = [0.22, 1, 0.36, 1]

export default function Projects() {
  const [params, setParams] = useSearchParams()
  const lenis = useLenis()
  const gridRef = useRef(null)

  const type = categories.some((c) => c.id === params.get('type')) ? params.get('type') : 'all'
  const filtered = useMemo(() => (type === 'all' ? projects : projects.filter((p) => p.category === type)), [type])
  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const page = Math.min(pages, Math.max(1, Number(params.get('page')) || 1))
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const update = (next) => {
    const p = new URLSearchParams(params)
    Object.entries(next).forEach(([k, v]) => (v === null ? p.delete(k) : p.set(k, v)))
    setParams(p, { replace: true, preventScrollReset: true })
  }
  const setType = (id) => update({ type: id === 'all' ? null : id, page: null })
  const setPage = (n) => {
    update({ page: n === 1 ? null : String(n) })
    scrollToTarget(lenis, gridRef.current, { offset: -120 })
  }

  const tabs = [{ id: 'all', label: 'All', count: projects.length }, ...categories.map((c) => ({ ...c, count: projects.filter((p) => p.category === c.id).length }))]

  return (
    <>
      <title>Projects — Redefining Architecture</title>
      <meta name="description" content="Selected architecture, interiors, housing, health care, hospitality and industrial projects by Redefining Architecture." />

      {/* Hero */}
      <section className="relative pt-[72px]">
        <div className="container-arch grid gap-10 pt-16 pb-14 lg:grid-cols-12 lg:items-end lg:pt-24">
          <div className="lg:col-span-8">
            <Reveal immediate delay={0.2} y={12}>
              <SectionLabel>Comprehensive projects register</SectionLabel>
            </Reveal>
            <SplitText as="h1" immediate delay={0.3} text="Selected Architectural Commissions & Masterworks *(2006 — Present)*" className="t-display-xl mt-8 max-w-[18ch]" />
          </div>
          <Reveal immediate delay={0.8} className="lg:col-span-4">
            <p className="t-body text-slate">
              Two decades of work across high-rise residences, housing, villas, health care, hospitality, institutions, offices and industrial parks.
            </p>
            <p className="mt-5 border-t border-mortise pt-4 t-index text-slate">{disclosure}</p>
          </Reveal>
        </div>

        <div className="container-arch">
          <Stagger className="hairline-grid grid grid-cols-2 pl-px pt-px md:grid-cols-4" stagger={0.06}>
            {[
              { v: projects.length, l: 'Projects featured' },
              { v: categories.length, l: 'Building typologies' },
              { v: 2, pad: 2, l: 'Studios', note: 'Kolkata · Bhubaneswar' },
              { v: 20, suffix: '+', l: 'Years of experience' },
            ].map((s) => (
              <StaggerItem key={s.l} className="bg-canvas px-5 py-6">
                <p className="t-index text-slate">{s.l}</p>
                <p className="mt-3 flex items-baseline gap-2 font-serif text-3xl">
                  <CountUp value={s.v} pad={s.pad} suffix={s.suffix} />
                  {s.note && <span className="t-index text-slate">{s.note}</span>}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Filters */}
      <section className="pt-14" aria-label="Filter projects">
        <div className="container-arch">
          <LayoutGroup id="project-tabs">
            <div className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none]" data-lenis-prevent>
              <ul role="tablist" aria-label="Project typologies" className="flex min-w-max border-b border-mortise">
                {tabs
                  .filter((t) => t.count > 0)
                  .map((t) => {
                    const active = t.id === type
                    return (
                      <li key={t.id} role="presentation">
                        <button
                          role="tab"
                          aria-selected={active}
                          aria-controls="project-grid"
                          onClick={() => setType(t.id)}
                          className={`relative px-4 py-3.5 t-label transition-colors duration-300 ${active ? 'text-brass' : 'text-slate hover:text-ink'}`}
                        >
                          {t.label}
                          <sup className="ml-1 text-[9px] opacity-70">{String(t.count).padStart(2, '0')}</sup>
                          {active && (
                            <motion.span layoutId="tab-underline" className="absolute inset-x-0 -bottom-px h-[2px] bg-brass" transition={{ type: 'spring', stiffness: 400, damping: 36 }} />
                          )}
                        </button>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </LayoutGroup>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 md:py-16">
        <div className="container-arch" ref={gridRef}>
          <motion.div id="project-grid" role="tabpanel" layout className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.06, ease: EASE } }}
                  exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.3 } }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination */}
          <div className="mt-20 flex flex-col gap-6 border-t border-mortise pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="t-index text-slate" aria-live="polite">
              Showing {String((page - 1) * PER_PAGE + 1).padStart(2, '0')} — {String(Math.min(page * PER_PAGE, filtered.length)).padStart(2, '0')} of{' '}
              {String(filtered.length).padStart(2, '0')} projects
            </p>
            {pages > 1 && (
              <nav aria-label="Pagination" className="flex items-center gap-2">
                {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    aria-current={n === page ? 'page' : undefined}
                    className={`size-10 t-label transition-colors ${n === page ? 'bg-brass text-plaster' : 'border border-mortise text-slate hover:border-ink hover:text-ink'}`}
                  >
                    {String(n).padStart(2, '0')}
                  </button>
                ))}
                <button
                  onClick={() => setPage(page < pages ? page + 1 : 1)}
                  className="ml-2 h-10 border border-mortise px-4 t-label text-slate transition-colors hover:border-ink hover:text-ink"
                >
                  {page < pages ? 'Next →' : '← First'}
                </button>
              </nav>
            )}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="pb-24 md:pb-32">
        <div className="container-arch">
          <Reveal className="relative overflow-hidden border border-mortise bg-plaster px-6 py-14 md:px-14 md:py-20">
            <SectionLabel>Terrain & material discipline</SectionLabel>
            <SplitText as="p" text="“What is drawn can be built — *and what is built stays comfortable and economical to run.*”" className="t-display-md mt-8 max-w-[30ch] md:text-[2rem] md:leading-[1.35]" />
            <p className="mt-6 max-w-2xl t-body text-slate">{approachText.split('. ').slice(0, 1).join('')}.</p>
            <Button to="/inquire" className="mt-10">
              Start a project brief
            </Button>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -bottom-10 select-none font-serif text-[clamp(4rem,14vw,11rem)] leading-none text-mortise/40"
            >
              Redefining
            </span>
          </Reveal>
        </div>
      </section>
    </>
  )
}
