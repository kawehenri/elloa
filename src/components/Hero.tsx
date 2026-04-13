import { SocialIcon } from './SocialIcon'
import type { SocialLink } from '../content/site'

type Props = {
  fullName: string
  tagline: string
  belt: string
  club: string
  heroImage: string
  heroImageAlt: string
  social: readonly SocialLink[]
  heroCta: { label: string; href: string }
}

export function Hero({
  fullName,
  tagline,
  belt,
  club,
  heroImage,
  heroImageAlt,
  social,
  heroCta,
}: Props) {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-brand-900 via-slate-950 to-slate-950 pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.35), transparent)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-24">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Atleta de judô
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {fullName}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-slate-300">{tagline}</p>
          <dl className="mt-6 flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
            <div>
              <dt className="sr-only">Graduação</dt>
              <dd>{belt}</dd>
            </div>
            <div>
              <dt className="sr-only">Clube</dt>
              <dd>{club}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={heroCta.href}
              className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800/60 hover:text-white"
            >
              {heroCta.label}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Redes sociais">
            {social.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-300 transition hover:border-sky-500/50 hover:text-sky-300"
                  aria-label={s.label}
                >
                  <SocialIcon icon={s.icon} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-800 shadow-2xl shadow-sky-950/50 sm:aspect-[3/4]">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
              width={800}
              height={1000}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
