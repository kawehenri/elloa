type Props = {
  title: string
  lead: string
  paragraphs: readonly string[]
  values: readonly string[]
}

export function About({ title, lead, paragraphs, values }: Props) {
  return (
    <section
      id="sobre"
      className="scroll-mt-nav border-b border-slate-800/80 bg-slate-950 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        <p className="mt-3 max-w-3xl text-lg text-sky-200/90">{lead}</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 text-slate-300 lg:col-span-2">
            {paragraphs.map((p, index) => (
              <p key={index} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <aside className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Valores
            </h3>
            <ul className="mt-4 space-y-3 text-slate-200">
              {values.map((v) => (
                <li key={v} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
