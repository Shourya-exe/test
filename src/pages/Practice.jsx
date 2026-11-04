import { Link } from 'react-router'
import {
  approachText,
  brand,
  disciplines,
  phases,
  practiceText,
  principal,
  principles,
  studios,
} from '../data/site'
import { getProject } from '../data/projects'
import { ArrowLink, SectionLabel } from '../components/ui'
import { ImageReveal, Reveal, SplitText } from '../components/motion/primitives'
import { QuickInquiryForm } from '../components/forms/Forms'

export default function Practice() {
  const exteriorProject = getProject('housing-enclave')
  const exteriorImage = exteriorProject.images[0]

  const interiorProject = getProject('club-interiors')
  const interiorImage = interiorProject.images[0]

  return (
    <>
      <title>The Practice & Leadership — Redefining Architecture</title>

      {/* ----------------------------------------------------------- Hero */}
      <section className="pt-[72px]">
        <div className="container-arch grid gap-12 pt-16 pb-12 lg:grid-cols-12 lg:gap-8 lg:pt-24 lg:pb-16">
          <div className="lg:col-span-7">
            <Reveal immediate delay={0.2} y={10}>
              <div className="flex items-center justify-between border-b border-mortise pb-3">
                <SectionLabel>Disciplinary engagement</SectionLabel>
                <span className="t-index text-brass hidden sm:inline">Kolkata & Bhubaneswar · Est. 20+ Yrs</span>
              </div>
            </Reveal>
            <SplitText
              as="h1"
              immediate
              delay={0.3}
              text="The Practice, Leadership & *Dialogue with Nature*"
              className="t-display-xl mt-8 max-w-[16ch]"
            />
            <Reveal immediate delay={0.9} className="mt-8 space-y-4">
              {practiceText.map((t) => (
                <p key={t} className="t-body-lg text-slate">
                  {t}
                </p>
              ))}
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <Reveal immediate delay={0.8} className="border border-mortise bg-plaster divide-y divide-mortise">
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="t-display-sm text-ink">20+ Yrs</span>
                  <span className="t-index text-brass">Cross-Disciplinary</span>
                </div>
                <h3 className="t-index mt-2 text-ink font-semibold tracking-wider">Atelier Experience</h3>
                <p className="mt-2 text-[13px] text-slate leading-relaxed">
                  Architecture, interiors, landscape, vaastu and urban development under one roof, led by an architect with experience in India and the Gulf.
                </p>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="t-display-sm text-ink">100%</span>
                  <span className="t-index text-brass">Municipal Precedent</span>
                </div>
                <h3 className="t-index mt-2 text-ink font-semibold tracking-wider">Statutory Mastery</h3>
                <p className="mt-2 text-[13px] text-slate leading-relaxed">
                  Direct liaison for KMC, NKDA, BMC, BDA, CDA, plus PCB consents and environmental clearances handled from the first sketch.
                </p>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="t-display-sm text-ink">IGBC Standard</span>
                  <span className="t-index text-brass">Climate Physics</span>
                </div>
                <h3 className="t-index mt-2 text-ink font-semibold tracking-wider">Green Building Discipline</h3>
                <p className="mt-2 text-[13px] text-slate leading-relaxed">
                  Passive microclimate orientation, daylight harvesting, cross-ventilation, and native vegetation integration for lower life-cycle running costs.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Image Pair (Screen 12) */}
        <div className="container-arch pb-24">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            {/* Left wide landscape */}
            <div className="lg:col-span-7">
              <div className="border border-mortise bg-plaster p-2">
                <ImageReveal
                  immediate
                  delay={0.45}
                  image={exteriorImage}
                  alt={exteriorImage.caption}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="aspect-[16/10] w-full"
                  parallax={5}
                />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 pb-1 t-index text-slate">
                  <span>FIG 01.1 / BUILT MANIFEST</span>
                  <span className="text-brass">Residential Enclave & Climatic Envelope</span>
                  <span>22.5726° N, 88.3639° E</span>
                </div>
              </div>
            </div>

            {/* Right portrait study */}
            <div className="lg:col-span-5">
              <div className="border border-mortise bg-plaster p-2 flex flex-col">
                <ImageReveal
                  immediate
                  delay={0.6}
                  image={interiorImage}
                  alt={interiorImage.caption}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="aspect-[4/5] w-full"
                  parallax={5}
                />
                <div className="mt-3 px-3 pb-2">
                  <div className="flex items-center justify-between t-index text-slate">
                    <span>FIG 01.2 / ATELIER SANCTUARY</span>
                    <span className="text-brass">Interior & Joinery Craft</span>
                  </div>
                  <h3 className="t-display-sm mt-2 text-ink">The Material & Spatial Sanctuary</h3>
                  <p className="mt-2 text-[13px] text-slate leading-relaxed">
                    Textured plaster surfaces, uninterrupted daylight apertures, and climate-responsive planning bridging living systems with structural discipline.
                  </p>
                  <div className="mt-4 pt-3 border-t border-mortise/60 flex items-center justify-between">
                    <span className="t-index text-slate/70">Passive Ventilation & Light</span>
                    <Link to="/projects" className="t-index text-brass link-arch">
                      Explore Projects →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Dialogue with Nature */}
      <section id="approach" className="border-t border-mortise bg-plaster/40 py-24">
        <div className="container-arch">
          <div className="grid gap-6 border-b border-mortise pb-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionLabel index="01">Philosophy & manifesto</SectionLabel>
              <SplitText as="h2" text="Dialogue with *Nature*" className="t-display-lg mt-4" />
            </div>
            <div className="md:col-span-5">
              <p className="t-body text-slate">
                Architecture in the tropical subcontinent cannot exist as an aggressive object superimposed on the terrain. It must act as a breath — an
                orchestrated skin that moderates humidity, gathers monsoonal breezes, and protects historical roots.
              </p>
              <p className="mt-3 text-[13px] text-slate-2">{approachText}</p>
              <p className="mt-4 text-[11px] t-index text-brass">Our four-fold environmental charter:</p>
            </div>
          </div>

          <div className="hairline-grid mt-12 grid sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.word} delay={i * 0.08} className="bg-plaster p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-mortise/60 pb-3">
                    <span className="t-index text-brass">Pillar 0{i + 1}</span>
                    <span className="font-serif text-lg text-ink italic">{p.word}</span>
                  </div>
                  <h3 className="t-display-sm mt-4 text-ink">{p.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-slate">{p.text}</p>
                </div>
                <div className="mt-8 pt-3 border-t border-mortise/40 flex items-center justify-between t-index text-slate/80">
                  <span>{p.tag}</span>
                  <span className="text-brass">Charter 0{i + 1}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------- Principals & Atelier Leadership */}
      <section className="border-t border-mortise py-24">
        <div className="container-arch">
          <div className="grid gap-6 border-b border-mortise pb-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionLabel index="02">Leadership roster</SectionLabel>
              <SplitText as="h2" text="Principals & Atelier *Leadership*" className="t-display-lg mt-4" />
            </div>
            <div className="md:col-span-5">
              <p className="t-body text-slate">
                Two decades of disciplined inquiry across multi-disciplinary scopes of urban engineering, architecture, and environmental planning.
              </p>
            </div>
          </div>

          {/* Principal card */}
          <Reveal className="mt-12 border border-mortise bg-plaster">
            <div className="flex flex-wrap items-center justify-between border-b border-mortise px-6 py-4 t-index text-slate">
              <span className="text-brass">Founding Principal</span>
              <span>Registered Architect</span>
            </div>

            <div className="p-6 sm:p-10">
              <div className="max-w-3xl">
                <h3 className="t-display-md text-ink">{principal.name || principal.role}</h3>
                <p className="t-index mt-2 text-brass">
                  B.Arch, <span className="hl">NIT Calicut</span> · M.Arch, Urban Development · 20+ Years Practice
                </p>

                <blockquote className="mt-6 border-l-2 border-brass pl-5 font-serif text-xl italic leading-relaxed text-slate-2">
                  “Architecture must transcend borrowed western glass-box paradigms. We construct deep verandas, thermodynamic chimneys, and masonry screens
                  that celebrate tropical humidity while maintaining rigorous municipal compliance.”
                </blockquote>

                <p className="mt-6 t-body-lg text-slate">{principal.summary}</p>
              </div>

              {/* Data specifications row */}
              <div className="hairline-grid mt-10 grid sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-canvas p-4 sm:p-5">
                  <span className="t-index block text-slate">Alumni</span>
                  <span className="mt-1 block text-sm font-medium text-ink">
                    B.Arch, <span className="hl">NIT Calicut</span>
                  </span>
                </div>
                <div className="bg-canvas p-4 sm:p-5">
                  <span className="t-index block text-slate">Post-Graduate</span>
                  <span className="mt-1 block text-sm font-medium text-ink">M.Arch, Urban Development</span>
                </div>
                <div className="bg-canvas p-4 sm:p-5">
                  <span className="t-index block text-slate">Experience</span>
                  <span className="mt-1 block text-sm font-medium text-ink">20+ Years · India & Gulf</span>
                </div>
                <div className="bg-canvas p-4 sm:p-5">
                  <span className="t-index block text-slate">Status</span>
                  <span className="mt-1 block text-sm font-medium text-ink">Registered Architect</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Studio Hierarchy & Multidisciplinary structure (Screen 12) */}
          <div className="mt-12 border border-mortise bg-plaster">
            <div className="flex flex-wrap items-center justify-between border-b border-mortise px-6 py-4 t-index text-slate">
              <span>Studio Anatomy & Collective Disciplines</span>
              <span className="text-brass">11 Services Under One Roof</span>
            </div>
            <div className="hairline-grid grid sm:grid-cols-2 lg:grid-cols-4">
              {disciplines.map((d) => (
                <div key={d.level} className="p-6">
                  <span className="t-index text-brass block">{d.level}</span>
                  <h4 className="t-display-sm mt-2 text-ink">{d.role}</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------ 4-Phase Delivery & Sanction Rigor (Screen 12) */}
      <section className="border-t border-mortise bg-limestone/30 py-24">
        <div className="container-arch">
          <div className="grid gap-6 border-b border-mortise pb-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionLabel index="03">Project execution matrix</SectionLabel>
              <SplitText as="h2" text="4-Phase Delivery & *Sanction Rigor*" className="t-display-lg mt-4" />
            </div>
            <div className="md:col-span-5">
              <p className="t-body text-slate">
                Uncompromising technical precision. We hold an unviolated track record navigating Eastern India’s statutory sanctioning bodies with surgical
                compliance.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            {/* Left compliance enclave */}
            <div className="lg:col-span-4">
              <div className="border border-mortise bg-plaster p-6 sm:p-8">
                <span className="t-index text-brass block">Municipal Liaison</span>
                <h3 className="t-display-sm mt-2 text-ink">Sanctions Enclave</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-slate">
                  Sanction drawings, structural stability vetting, and environmental clearances handled in-house from day one.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-2 border-t border-mortise/60 pt-5">
                  {['KMC', 'NKDA', 'BMC', 'BDA', 'CDA', 'PCB · EC'].map((tag) => (
                    <span key={tag} className="border border-mortise bg-canvas px-3 py-2 text-center t-index text-slate">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-5 border-t border-mortise">
                  <ArrowLink to="/inquire#approvals">View statutory schedule</ArrowLink>
                </div>
              </div>
            </div>

            {/* Right phases */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-mortise border border-mortise bg-plaster">
                {phases.map((ph) => (
                  <Reveal key={ph.no} className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-2xl text-ink">{ph.no}</span>
                        <span className="t-index text-brass">/ {ph.phase}</span>
                      </div>
                      <span className="t-index text-slate border border-mortise px-2.5 py-1">{ph.timeline}</span>
                    </div>
                    <h3 className="t-display-sm mt-3 text-ink">{ph.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate">{ph.text}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ph.tags.map((t) => (
                        <span key={t} className="bg-canvas border border-mortise/60 px-2.5 py-1 text-[11px] t-index text-slate">
                          {t}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------- Atelier Studios & Regional Hubs */}
      <section id="studios" className="border-t border-mortise py-24">
        <div className="container-arch">
          <div className="grid gap-6 border-b border-mortise pb-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionLabel index="04">Atelier hubs</SectionLabel>
              <SplitText as="h2" text="Atelier Studios & *Inquiries*" className="t-display-lg mt-4" />
            </div>
            <div className="md:col-span-5">
              <p className="t-body text-slate">
                Consultation chambers in Kolkata and Bhubaneswar. Designed as living laboratories of architectural materiality.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {studios.map((s) => (
              <Reveal key={s.id} className="border border-mortise bg-plaster p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-mortise pb-3 text-slate">
                    <span className="t-index text-slate">{s.category || 'Atelier'}</span>
                    <span className="t-index text-brass">{s.tag || s.region}</span>
                  </div>
                  <h3 className="t-display-md mt-4 text-ink">{s.sublabel || s.label}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-slate">{s.description}</p>

                  <div className="mt-6 space-y-3 border-t border-mortise/60 pt-5 text-[13px]">
                    <div>
                      <span className="t-index block text-slate mb-1">Studio Address</span>
                      <address className="not-italic text-ink leading-relaxed">
                        {s.lines.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </address>
                    </div>

                    <div className="pt-2">
                      <span className="t-index block text-slate mb-1">Direct Contact</span>
                      <a href={brand.phoneHref} className="link-arch font-medium text-ink">
                        {brand.phone}
                      </a>
                      {brand.email && (
                        <a href={`mailto:${brand.email}`} className="link-arch font-medium text-ink block mt-1">
                          {brand.email}
                        </a>
                      )}
                    </div>

                    {s.hours && (
                      <div className="pt-2">
                        <span className="t-index block text-slate mb-1">Atelier Hours</span>
                        <span className="text-slate">{s.hours}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-mortise flex items-center justify-between">
                  <ArrowLink
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get studio directions
                  </ArrowLink>
                  {s.coords && <span className="t-index text-slate/70 hidden sm:inline">{s.coords}</span>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------- Bottom Inquiry Form */}
      <section className="border-t border-mortise bg-limestone/50 py-24">
        <div className="container-arch">
          <div className="border border-mortise bg-plaster p-6 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionLabel>Project consultation</SectionLabel>
                <SplitText as="h2" text="Engage the Studio in *Dialogue*" className="t-display-lg mt-6" />
                <p className="mt-6 t-body text-slate">
                  We review site, institutional, and private commissions whose scale or purpose demands contextual permanence, biophilic rigor, and legislative
                  mastery.
                </p>
                <div className="mt-8 border-t border-mortise pt-6">
                  <p className="t-index text-slate">Or reach out directly:</p>
                  <p className="mt-2">
                    <a href={brand.phoneHref} className="t-display-sm text-ink link-arch">
                      {brand.phone}
                    </a>
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <QuickInquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
