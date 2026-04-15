import type { GoalItem } from '../content/site'

type Props = {
  title: string
  intro: string
  items: readonly GoalItem[]
}

const statusStyle: Record<GoalItem['status'], string> = {
  Concluído: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  'Em preparação': 'border-amber-500/40 bg-amber-500/10 text-amber-300',
  Planejado: 'border-sky-500/40 bg-sky-500/10 text-sky-300',
}

export function Goals({ title, intro, items }: Props) {
  return (
    <section
      id="metas"
      className="scroll-mt-nav border-b border-slate-800/80 bg-gradient-to-b from-slate-950 to-brand-900/30 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        <p className="mt-3 max-w-3xl text-slate-300">{intro}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${statusStyle[item.status]}`}
                >
                  {item.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
