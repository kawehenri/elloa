import { SocialIcon } from './SocialIcon'
import type { SocialLink } from '../content/site'

type Props = {
  title: string
  lead: string
  email: string
  phone: string
  ctaPrimary: { label: string; href: string }
  social: readonly SocialLink[]
}

function telHref(phone: string) {
  const digits = phone.replace(/\D/g, '')
  return digits ? `tel:+${digits}` : 'tel:'
}

export function Contact({ title, lead, email, phone, ctaPrimary, social }: Props) {
  return (
    <section id="contato" className="scroll-mt-nav bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        <p className="mt-2 text-slate-400">{lead}</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <dl className="space-y-4 text-slate-200">
              <div>
                <dt className="text-sm font-medium text-slate-500">E-mail</dt>
                <dd className="mt-1">
                  <a className="text-lg text-sky-300 hover:underline" href={`mailto:${email}`}>
                    {email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">Telefone</dt>
                <dd className="mt-1">
                  <a className="text-lg text-sky-300 hover:underline" href={telHref(phone)}>
                    {phone}
                  </a>
                </dd>
              </div>
            </dl>
            <a
              href={ctaPrimary.href}
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-sky-500 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-400 sm:w-auto"
            >
              {ctaPrimary.label}
            </a>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-brand-900/50 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Redes</h3>
            <ul className="mt-4 flex flex-wrap gap-3" aria-label="Links de redes sociais">
              {social.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-200 transition hover:border-sky-500/50 hover:text-sky-200"
                  >
                    <SocialIcon icon={s.icon} className="h-5 w-5 shrink-0" />
                    <span className="font-medium">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
