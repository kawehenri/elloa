import type { LogoItem } from '../content/site'
import { SocialIcon } from './SocialIcon'

type Props = {
  title: string
  intro: string
  bullets: readonly string[]
  federations: readonly LogoItem[]
  sponsors: readonly LogoItem[]
}

function LogoCard({ logo }: { logo: LogoItem }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-slate-700 bg-white/95 p-4 transition hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-900/10">
      <div className="flex h-24 w-full items-center justify-center">
        <img
          src={logo.src}
          alt={logo.alt}
          className="max-h-full max-w-[140px] object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="mt-3 text-center text-xs font-medium text-slate-600">{logo.alt}</p>
      <a
        href={logo.instagramHref}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-sky-500 hover:bg-sky-50 hover:text-sky-700"
        aria-label={`Instagram ${logo.instagramHandle}`}
      >
        <SocialIcon icon="instagram" className="h-3.5 w-3.5" />
        <span>{logo.instagramHandle}</span>
      </a>
    </div>
  )
}

export function Partners({ title, intro, bullets, federations, sponsors }: Props) {
  return (
    <section
      id="trajetoria"
      className="scroll-mt-nav border-b border-slate-800/80 bg-slate-950 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">{intro}</p>
        <ul className="mt-8 space-y-3 text-slate-200">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 text-sky-500" aria-hidden>
                ✓
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Federada por
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {federations.map((logo) => (
              <LogoCard key={logo.alt} logo={logo} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Apoio e patrocínio
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {sponsors.map((logo) => (
              <LogoCard key={logo.alt} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
