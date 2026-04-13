type Props = {
  title: string
  intro: string
  bullets: readonly string[]
  logoSlotCount: number
  logoSectionTitle: string
}

export function Partners({ title, intro, bullets, logoSlotCount, logoSectionTitle }: Props) {
  return (
    <section
      id="experiencia"
      className="scroll-mt-nav border-b border-slate-800/80 bg-slate-950 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">{intro}</p>
        <ul className="mt-8 space-y-3 text-slate-200">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-1 text-sky-500" aria-hidden>
                ✓
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {logoSectionTitle}
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: logoSlotCount }).map((_, i) => (
              <div
                key={i}
                className="flex h-20 items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/40 text-xs text-slate-600"
              >
                Logo {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
