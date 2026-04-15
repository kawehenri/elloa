type Props = {
  title: string
  pitch: string
  benefits: readonly string[]
}

export function Sponsorship({ title, pitch, benefits }: Props) {
  return (
    <section
      id="parceria"
      className="scroll-mt-nav border-b border-slate-800/80 bg-slate-950 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">{pitch}</p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Contrapartidas de visibilidade
          </h3>
          <ul className="mt-4 space-y-3 text-slate-200">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span className="mt-1 text-sky-400" aria-hidden>
                  ✓
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
