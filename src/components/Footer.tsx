type Props = {
  rights: string
  note: string
}

export function Footer({ rights, note }: Props) {
  return (
    <footer className="border-t border-slate-800 bg-brand-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>{rights}</p>
        <p className="max-w-xl text-xs leading-relaxed">{note}</p>
        <a href="#topo" className="text-sky-500 hover:text-sky-400">
          Voltar ao topo
        </a>
      </div>
    </footer>
  )
}
