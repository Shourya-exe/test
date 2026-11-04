import { Link } from 'react-router'
import { brand, nav, services, studios } from '../data/site'
import { Button, Logo } from './ui'
import { Marquee, Reveal, SplitText } from './motion/primitives'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const year = CURRENT_YEAR
  return (
    <footer className="on-dark relative overflow-hidden bg-graphite text-bone">
      {/* Closing call to action */}
      <div className="container-arch relative grid gap-10 pt-24 pb-16 md:grid-cols-12 md:items-end md:pt-32">
        <div className="md:col-span-8">
          <p className="t-index text-brass-bright">Begin a project</p>
          <SplitText
            as="p"
            text="Have a site and a brief? *Let’s* talk it through."
            className="t-display-xl mt-5 max-w-[16ch] text-bone"
          />
        </div>
        <Reveal className="flex flex-col items-start gap-5 md:col-span-4 md:items-end" delay={0.2}>
          <Button to="/inquire" variant="light">Start a project brief</Button>
          <a href={brand.phoneHref} className="t-label text-bone-muted transition-colors hover:text-brass-bright">
            or call {brand.phone}
          </a>
        </Reveal>
      </div>

      <Marquee className="border-y border-mortise-dark py-6">
        {services.map((s) => (
          <span key={s.title} className="flex items-center gap-10 pr-10 font-serif text-2xl italic text-bone/35 md:text-3xl">
            {s.title}
            <span className="size-1.5 rotate-45 bg-brass-bright/70" />
          </span>
        ))}
      </Marquee>

      <div className="container-arch grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-sm t-body text-bone-muted">
            Architecture, interiors, landscape and approvals — led by a registered architect with over twenty years of practice in India
            and the Gulf.
          </p>
          <p className="mt-6 t-index text-brass-bright">B.Arch · M.Arch Urban Development</p>
        </div>

        <div className="md:col-span-2">
          <p className="t-index text-bone-muted">Navigate</p>
          <ul className="mt-5 space-y-3">
            {[...nav.filter((n) => !n.to.includes('#')), { to: '/inquire', label: 'Inquire' }].map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="t-body text-bone transition-colors hover:text-brass-bright">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {studios.map((s) => (
          <div key={s.id} className="md:col-span-3">
            <p className="t-index text-bone-muted">{s.label}</p>
            <address className="mt-5 t-body not-italic text-bone">
              {s.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block t-index text-brass-bright transition-colors hover:text-bone"
            >
              Directions ↗
            </a>
          </div>
        ))}
      </div>

      <div className="container-arch flex flex-col gap-3 border-t border-mortise-dark py-6 t-index text-bone-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} {brand.name}. All rights reserved.</span>
        <span className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={brand.phoneHref} className="transition-colors hover:text-brass-bright">{brand.phone}</a>
          {brand.email && (
            <a href={`mailto:${brand.email}`} className="transition-colors hover:text-brass-bright">{brand.email}</a>
          )}
          <span>Kolkata · Bhubaneswar</span>
        </span>
      </div>
    </footer>
  )
}
