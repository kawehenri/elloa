import type { GalleryImage } from '../content/site'

type Props = {
  title: string
  images: readonly GalleryImage[]
}

export function Gallery({ title, images }: Props) {
  return (
    <section
      id="galeria"
      className="scroll-mt-nav border-b border-slate-800/80 bg-gradient-to-b from-brand-900/30 to-slate-950 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        <p className="mt-2 text-slate-400">
          Personalize as fotos em <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">src/content/site.ts</code> ou em{' '}
          <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">public/</code>.
        </p>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((img) => (
            <figure key={img.id} className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
