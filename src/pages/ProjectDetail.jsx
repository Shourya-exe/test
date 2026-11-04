import { useCallback, useState } from 'react'
import { Link, useParams } from 'react-router'
import { getProject, neighbours, projects } from '../data/projects'
import { disclosure } from '../data/site'
import { Arrow, ArrowLink, SectionLabel } from '../components/ui'
import { Img, ImageReveal, Reveal, Rule, SplitText, Stagger, StaggerItem } from '../components/motion/primitives'
import { QuickInquiryForm } from '../components/forms/Forms'
import Lightbox from '../components/Lightbox'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  const [lightbox, setLightbox] = useState(null)
  const close = useCallback(() => setLightbox(null), [setLightbox])
  if (!project) return <NotFound />

  const { prev, next } = neighbours(project.slug)
  const [hero, ...restImages] = project.images
  const views = restImages.map((img, k) => ({ img, i: k + 1 })).filter(({ img }) => !img.isDrawing)
  const drawings = project.images.map((img, i) => ({ img, i })).filter(({ img }) => img.isDrawing)
  const open = (i) => setLightbox(i)

  const meta = [
    { label: 'Typology', value: project.categoryLabel },
    { label: 'Worked for', value: project.credit ?? '—' },
    { label: 'Scope', value: project.scope.join(' · ') },
    { label: project.year ? 'Year' : 'Status', value: project.year ?? project.status ?? 'Design' },
  ]

  return (
    <>
      <title>{`${project.title} — Redefining Architecture`}</title>
      <meta name="description" content={project.summary} />

      {/* Title block */}
      <section className="pt-[72px]">
        <div className="container-arch">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-mortise py-5 t-index text-slate">
            <Link to="/projects" className="group flex items-center gap-3 transition-colors hover:text-brass">
              <span className="rotate-180">
                <Arrow />
              </span>
              Back to selected works
            </Link>
            <span>
              Project <span className="text-brass">{project.index}</span> / {String(projects.length).padStart(2, '0')} · {project.categoryLabel}
            </span>
          </div>

          <div className="grid gap-8 pt-12 pb-10 lg:grid-cols-12 lg:items-end lg:pt-16">
            <div className="lg:col-span-9">
              <Reveal immediate delay={0.2} y={10}>
                <SectionLabel>Case study / {project.badge}</SectionLabel>
              </Reveal>
              <SplitText as="h1" immediate delay={0.3} text={project.title} className="t-display-xl mt-6 max-w-[20ch]" />
            </div>
            {project.status && (
              <Reveal immediate delay={0.7} className="lg:col-span-3 lg:text-right">
                <span className="inline-block border border-brass px-3 py-1.5 t-index text-brass">{project.status}</span>
              </Reveal>
            )}
          </div>

          <Stagger className="hairline-grid grid grid-cols-2 pl-px pt-px lg:grid-cols-4" stagger={0.06} delay={0.5}>
            {meta.map((m) => (
              <StaggerItem key={m.label} className="bg-canvas px-4 py-4 md:px-5">
                <p className="t-index text-slate">{m.label}</p>
                <p className="mt-1.5 text-[14px] leading-6">{m.value}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Hero plate */}
      <section className="pt-10">
        <div className="container-arch">
          <button type="button" onClick={() => open(0)} className="group block w-full cursor-zoom-in text-left" aria-label={`Enlarge: ${hero.caption}`}>
            <ImageReveal
              immediate
              delay={0.55}
              image={hero}
              alt={hero.caption}
              priority
              sizes="(min-width: 1400px) 1280px, 100vw"
              parallax={5}
              className={`w-full ${hero.ratio < 1 ? 'aspect-[4/5] md:aspect-[16/10]' : 'aspect-[4/3] md:aspect-[16/9]'}`}
              imgClassName={hero.ratio < 1 ? 'object-[50%_30%]' : ''}
            />
          </button>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-mortise py-3 t-index text-slate">
            <span>
              <span className="text-brass">Plate {project.index}.1</span> · {hero.caption}
            </span>
            <span>{project.images.length} plates · click any to enlarge</span>
          </div>
        </div>
      </section>

      {/* Narrative + colophon */}
      <section className="py-20 md:py-28">
        <div className="container-arch grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <SectionLabel index="01">The project</SectionLabel>
            <SplitText as="h2" text={project.summary} className="t-display-md mt-6 md:text-[2rem] md:leading-[1.35]" stagger={0.02} />
            <div className="mt-10 space-y-5">
              {project.body.map((para, i) => (
                <Reveal key={i} as="p" delay={i * 0.08} className="t-body-lg text-slate-2">
                  {para}
                </Reveal>
              ))}
            </div>
            {project.quote && (
              <Reveal as="blockquote" className="mt-12 border-l-2 border-brass bg-plaster px-6 py-7 md:px-8">
                <p className="font-serif text-xl italic leading-relaxed md:text-2xl">“{project.quote}”</p>
                <footer className="mt-4 t-index text-slate">From the concept statement</footer>
              </Reveal>
            )}
          </div>

          <aside className="space-y-10 lg:col-span-5 lg:pl-6">
            <Reveal className="border border-mortise bg-plaster">
              <div className="flex items-center justify-between border-b border-mortise px-5 py-4">
                <p className="t-index text-brass">Project colophon</p>
                <p className="t-index text-slate">{project.index}</p>
              </div>
              <dl>
                {[...project.facts, { label: 'Worked for', value: project.credit ?? '—' }, { label: 'Scope', value: project.scope.join(', ') }].map((f) => (
                  <div key={f.label} className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 border-b border-mortise px-5 py-3.5 last:border-b-0">
                    <dt className="t-index pt-0.5 text-slate">{f.label}</dt>
                    <dd className="text-[13px] leading-5">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {drawings.length > 0 && (
              <Reveal className="border border-mortise">
                <div className="flex items-center justify-between border-b border-mortise px-5 py-4">
                  <p className="t-index text-brass">Drawings & sheets</p>
                  <p className="t-index text-slate">{drawings.length} sheets</p>
                </div>
                <div className="grid grid-cols-2 gap-px bg-mortise">
                  {drawings.map(({ img, i }) => (
                    <button key={i} onClick={() => open(i)} className="group relative block aspect-[4/3] cursor-zoom-in overflow-hidden bg-plaster p-2" aria-label={`Enlarge: ${img.caption}`}>
                      <Img image={img} alt={img.caption} sizes="240px" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute inset-x-0 bottom-0 translate-y-full bg-graphite/85 px-2 py-1.5 text-left t-index text-bone transition-transform duration-300 group-hover:translate-y-0">
                        {img.caption}
                      </span>
                    </button>
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal as="p" className="t-index leading-5 text-slate">
              {disclosure}
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      {views.length > 0 && (
        <section className="pb-24 md:pb-32" aria-labelledby="views-title">
          <div className="container-arch">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <SectionLabel index="02">Selected views</SectionLabel>
                <h2 id="views-title" className="t-display-lg mt-5">
                  Spatial studies
                </h2>
              </div>
              <p className="hidden t-index text-slate md:block">{views.length} views</p>
            </div>
            <div className="grid gap-4 md:grid-cols-12 md:gap-6">
              {views.map(({ img, i }, k) => {
                const pattern = k % 3
                const span = pattern === 0 ? 'md:col-span-12' : pattern === 1 ? 'md:col-span-7' : 'md:col-span-5'
                const height = pattern === 0 ? 'aspect-[4/3] md:aspect-[21/9]' : 'aspect-[4/3] md:aspect-auto md:h-[clamp(300px,36vw,520px)]'
                const lone = pattern === 1 && k === views.length - 1
                return (
                  <figure key={i} className={`${lone ? 'md:col-span-12' : span}`}>
                    <button onClick={() => open(i)} className="group block w-full cursor-zoom-in" aria-label={`Enlarge: ${img.caption}`}>
                      <ImageReveal
                        image={img}
                        alt={img.caption}
                        sizes={pattern === 0 || lone ? '(min-width: 1400px) 1280px, 100vw' : '(min-width: 768px) 55vw, 100vw'}
                        className={`w-full ${lone ? 'aspect-[4/3] md:aspect-[21/9]' : height}`}
                        imgClassName="transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                        from={k % 2 ? 'left' : 'bottom'}
                        parallax={pattern === 0 ? 4 : 0}
                      />
                    </button>
                    <figcaption className="mt-3 flex items-center justify-between t-index text-slate">
                      <span>
                        <span className="text-brass">
                          Plate {project.index}.{i + 1}
                        </span>{' '}
                        · {img.caption}
                      </span>
                    </figcaption>
                  </figure>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Prev / next */}
      <section className="border-t border-mortise" aria-label="More projects">
        <div className="grid md:grid-cols-2">
          {[
            { p: prev, label: 'Previous project' },
            { p: next, label: 'Next project' },
          ].map(({ p, label }, k) => (
            <Link
              key={label}
              to={`/projects/${p.slug}`}
              className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden p-6 md:min-h-[300px] md:p-10 ${k === 0 ? 'md:border-r md:border-mortise' : 'border-t border-mortise md:border-t-0 md:text-right'}`}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <Img image={p.images[0]} alt="" sizes="50vw" className="h-full w-full scale-105 object-cover transition-transform duration-[1600ms] group-hover:scale-100" />
                <div className="absolute inset-0 bg-graphite/60" />
              </div>
              <p className="relative t-index text-slate transition-colors duration-500 group-hover:text-brass-bright">
                {k === 0 ? '← ' : ''}
                {label}
                {k === 1 ? ' →' : ''}
              </p>
              <p className="relative t-display-md mt-3 transition-colors duration-500 group-hover:text-bone">{p.title}</p>
              <p className="relative mt-1 t-index text-slate transition-colors duration-500 group-hover:text-bone-muted">{p.categoryLabel}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Inquiry */}
      <section className="on-dark relative overflow-hidden bg-graphite-2 py-24 text-bone md:py-28">
        <div className="blueprint pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-arch relative grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel light>Commissions & inquiries</SectionLabel>
            <SplitText as="h2" text={`Planning something like *${project.title}*?`} className="t-display-lg mt-6 max-w-[16ch]" />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md t-body text-bone-muted">
                Tell us about the site and the brief. We reply within two working days — or share the full brief with all the details.
              </p>
              <ArrowLink to="/inquire" light className="mt-8">
                Open the full project brief
              </ArrowLink>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7" delay={0.15}>
            <div className="border border-mortise-dark bg-graphite/60 p-6 md:p-9">
              <Rule dark className="mb-8" />
              <QuickInquiryForm dark context={project.title} />
            </div>
          </Reveal>
        </div>
      </section>

      <Lightbox images={project.images} index={lightbox} onClose={close} onChange={setLightbox} title={project.title} />
    </>
  )
}
