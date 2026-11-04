import { Link } from 'react-router'
import { Img } from './motion/primitives'
import { Arrow } from './ui'

/** Image frame with slow zoom + curatorial scrim on hover (DESIGN.md → Interactive Overlays). */
export function ProjectFrame({ project, image = project.images[0], ratio = 'aspect-[4/3]', sizes, priority, badge = true, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-limestone ${ratio} ${className}`}>
      <Img
        image={image}
        alt={image?.caption ?? project.title}
        sizes={sizes}
        priority={priority}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-arch)] group-hover:scale-[1.045]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/75 via-graphite/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
      {badge && (
        <span className="absolute left-3 top-3 bg-graphite/90 px-2.5 py-1.5 t-index text-bone backdrop-blur-sm">{project.badge}</span>
      )}
      <span className="pointer-events-none absolute bottom-4 left-4 flex translate-y-2 items-center gap-2 t-label text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        View project <Arrow />
      </span>
    </div>
  )
}

/** Projects-page folio card: image, index row, title, summary and a hairline data grid. */
export function ProjectCard({ project, sizes = '(min-width: 1024px) 45vw, 100vw' }) {
  const cells = [
    { label: 'Typology', value: project.categoryLabel },
    { label: 'Worked for', value: project.credit ?? '—' },
    { label: 'Scope', value: project.scope.slice(0, 2).join(' · ') },
    { label: 'Status', value: project.status ?? project.year ?? 'Design' },
  ]
  return (
    <article className="group flex h-full flex-col">
      <Link to={`/projects/${project.slug}`} className="block focus-visible:outline-offset-4" aria-label={`${project.title} — view project`}>
        <ProjectFrame project={project} sizes={sizes} />
      </Link>
      <div className="mt-5 flex items-center justify-between gap-4 t-index text-slate">
        <span>
          <span className="text-brass">{project.index}</span> / {project.categoryLabel}
        </span>
        {project.year && <span>{project.year}</span>}
      </div>
      <h3 className="t-display-sm mt-2 text-[1.45rem] leading-snug">
        <Link to={`/projects/${project.slug}`} className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-500 hover:bg-[length:100%_1px] hover:text-brass">
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 t-body text-slate">{project.summary}</p>
      <dl className="hairline-grid mt-5 grid grid-cols-2 pl-px pt-px">
        {cells.map((c) => (
          <div key={c.label} className="bg-plaster/60 px-3.5 py-3">
            <dt className="t-index text-slate">{c.label}</dt>
            <dd className="mt-1 text-[13px] leading-5 text-ink">{c.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-auto flex items-center justify-between pt-5">
        <Link to={`/projects/${project.slug}`} className="group/l inline-flex items-center gap-2 t-label transition-colors hover:text-brass">
          View project <Arrow />
        </Link>
        <span className="t-index text-slate">{project.images.length} views</span>
      </div>
    </article>
  )
}
