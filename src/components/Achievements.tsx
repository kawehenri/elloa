import type { StatItem } from '../content/site'

type Props = {
  stats: readonly StatItem[]
}

export function Achievements({ stats }: Props) {
  return (
    <section
      id="conquistas"
      className="scroll-mt-nav border-b border-slate-800/80 bg-gradient-to-b from-slate-950 to-brand-900/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">Conquistas em números</h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          Indicadores resumidos da trajetória — atualize com dados oficiais quando disponíveis.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <article
              key={s.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/20 transition hover:border-sky-500/30"
            >
              <p className="text-3xl font-bold tabular-nums text-sky-400 sm:text-4xl">{s.value}</p>
              <p className="mt-1 font-medium text-slate-100">{s.label}</p>
              {s.hint ? <p className="mt-2 text-xs text-slate-500">{s.hint}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
