type Props = {
  badge: string
  title: string
  subtitle: string
  body: string
  image: string
  imageAlt: string
  medalLabel: string
  cta: { label: string; href: string }
}

export function NewsHighlight({
  badge,
  title,
  subtitle,
  body,
  image,
  imageAlt,
  medalLabel,
  cta,
}: Props) {
  return (
    <section
      id="novidade"
      className="scroll-mt-nav relative isolate overflow-hidden border-b border-amber-500/20 bg-slate-950 pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 50% at 20% 0%, rgba(245, 158, 11, 0.12), transparent), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(56, 189, 248, 0.08), transparent)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900/95 to-brand-900/40 shadow-2xl shadow-amber-950/20">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className="relative order-1 min-h-[280px] lg:order-2 lg:min-h-[360px]">
              <img
                src={image}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
                loading="eager"
                decoding="async"
                width={900}
                height={1100}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-l lg:from-slate-900 lg:via-transparent lg:to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-amber-400/40 bg-amber-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-200 backdrop-blur">
                {medalLabel}
              </span>
            </div>

            <div className="order-2 flex flex-col justify-center p-6 sm:p-8 lg:order-1 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">{badge}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
              <p className="mt-2 text-sm font-semibold text-sky-300">{subtitle}</p>
              <p className="mt-4 text-base leading-relaxed text-slate-300">{body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={cta.href}
                  className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  {cta.label}
                </a>
                <a
                  href="#conquistas"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60"
                >
                  Ver conquistas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
