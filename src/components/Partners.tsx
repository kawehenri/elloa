import type { LogoItem } from '../content/site'

type Props = {
  title: string
  intro: string
  bullets: readonly string[]
  federations: readonly LogoItem[]
  sponsors: readonly LogoItem[]
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

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Federada por
            </h3>
            <div className="mt-4 flex flex-wrap gap-4">
              {federations.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex h-20 w-36 items-center justify-center rounded-xl border border-slate-700 bg-white/95 p-3"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Apoio
            </h3>
            <div className="mt-4 flex flex-wrap gap-4">
              {sponsors.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex h-20 w-36 items-center justify-center rounded-xl border border-slate-700 bg-white/95 p-3"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
