import { authorities, brand, studios } from '../data/site'
import { getProject } from '../data/projects'
import { ArrowLink, Button, SectionLabel } from '../components/ui'
import { ImageReveal, Reveal, SplitText } from '../components/motion/primitives'
import { CommissionForm } from '../components/forms/Forms'

export default function Inquire() {
  const amenities = getProject('residence-amenities')
  const image = amenities.images[2]

  return (
    <>
      <title>Inquire & Sanction Liaison — Redefining Architecture</title>
      <section className="pt-[72px]">
        <div className="container-arch grid gap-12 pt-16 pb-20 lg:grid-cols-12 lg:pt-24">
          <div className="lg:col-span-7">
            <Reveal immediate delay={0.2} y={10}>
              <SectionLabel index="01">Disciplinary engagement</SectionLabel>
            </Reveal>
            <SplitText
              as="h1"
              immediate
              delay={0.3}
              text="Crafting architectural calm through climate, craft, and *statutory precision.*"
              className="t-display-xl mt-8 max-w-[16ch]"
            />
            <Reveal immediate delay={0.9}>
              <p className="mt-8 max-w-xl t-body-lg text-slate">
                Residential, institutional, healthcare, hospitality and commercial commissions, with statutory clearances and environmental
                feasibility handled from the first sketch. We review new commissions within 48 hours.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-mortise py-4 max-w-lg">
                <div>
                  <p className="t-display-sm text-ink">20+ Yrs</p>
                  <p className="t-index mt-1 text-slate">Practice Rigour</p>
                </div>
                <div>
                  <p className="t-display-sm text-ink">100%</p>
                  <p className="t-index mt-1 text-slate">Sanction Precedent</p>
                </div>
                <div>
                  <p className="t-display-sm text-ink">48-Hr</p>
                  <p className="t-index mt-1 text-slate">DPR Intake Review</p>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="#brief">Initiate project brief</Button>
                <Button href="#approvals" variant="ghost">
                  Sanctions schedule
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-mortise bg-plaster p-2">
              <ImageReveal
                immediate
                delay={0.45}
                image={image}
                alt={image.caption}
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="aspect-[4/5] w-full"
                parallax={5}
              />
              <div className="mt-3 flex items-center justify-between px-2 pb-1 t-index text-slate">
                <span>Spatial Prototype · Residence Amenities</span>
                <span className="text-brass">Kolkata & Bhubaneswar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Commission Form */}
      <section id="brief" className="pb-24">
        <div className="container-arch">
          <div className="grid gap-6 border-b border-mortise pb-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionLabel index="02">Detailed project report (DPR) intake</SectionLabel>
              <SplitText as="h2" text="Project Commission *Protocol*" className="t-display-lg mt-4" />
            </div>
            <div className="md:col-span-5">
              <p className="t-body text-slate">
                Please outline the spatial requirements, plot parameters, and intended municipal jurisdiction. Our principal architect reviews each
                brief directly.
              </p>
            </div>
          </div>
          <div className="mt-10 border border-mortise bg-plaster/50 p-6 md:p-10">
            <CommissionForm />
          </div>
        </div>
      </section>

      {/* Section 03: Statutory Competency Schedule (Screen 10) */}
      <section id="approvals" className="border-t border-mortise py-24">
        <div className="container-arch">
          <div className="grid gap-6 border-b border-mortise pb-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionLabel index="03">Statutory competency schedule</SectionLabel>
              <SplitText as="h2" text="Regulatory Approvals & *Sanctions Liaison*" className="t-display-lg mt-4" />
            </div>
            <div className="md:col-span-5">
              <p className="t-body text-slate">
                Our atelier houses an in-house statutory desk expediting complex statutory compliances across West Bengal and Odisha. We maintain
                continuous dialogue with civic authorities to safeguard pure design intent.
              </p>
            </div>
          </div>

          <div className="hairline-grid mt-12 grid md:grid-cols-2 lg:grid-cols-3">
            {authorities.map((a, i) => (
              <Reveal key={a.code} delay={i * 0.06} className="bg-plaster p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-mortise/60 pb-3">
                    <span className="font-serif text-2xl text-ink tracking-tight">{a.code}</span>
                    <span className="t-index text-brass">{a.tag || a.region}</span>
                  </div>
                  <h3 className="t-index mt-4 text-ink font-semibold tracking-wider">{a.title || a.name}</h3>
                  <p className="mt-3 t-body text-slate leading-relaxed">{a.text}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-mortise/40 flex items-center justify-between t-index text-slate/70">
                  <span>Scope 0{i + 1}</span>
                  <span className="text-brass">Active Liaison</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04: Atelier Studios & Locations (Screen 10) */}
      <section id="studios" className="border-t border-mortise py-24 bg-limestone/40">
        <div className="container-arch">
          <div className="grid gap-6 border-b border-mortise pb-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionLabel index="04">Atelier locations & regional hubs</SectionLabel>
              <SplitText as="h2" text="Visit & Consult With *Senior Partners*" className="t-display-lg mt-4" />
            </div>
            <div className="md:col-span-5 md:text-right">
              <span className="t-index inline-block border border-mortise bg-plaster px-3.5 py-1.5 text-slate">
                By Prior Appointment Only
              </span>
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
    </>
  )
}
