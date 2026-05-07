import { useMemo, useState } from 'react'
import type { GalleryImage } from '../content/site'
import { SectionBackground } from './SectionBackground'

type Props = {
  title: string
  images: readonly GalleryImage[]
}

type Category = GalleryImage['category']

const CATEGORY_ORDER: Category[] = ['Trajetória', 'Campeonatos', 'Equipe e Treinos']

function ImageCard({ img }: { img: GalleryImage }) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-900">
      <div className="absolute inset-0 z-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-sky-500/10 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-blue-500/10 blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-300 backdrop-blur">
            {img.category}
          </span>
        </div>

        <figcaption className="border-t border-slate-800/80 px-4 py-3">
          <p className="text-sm leading-snug text-slate-200">{img.caption}</p>
        </figcaption>
      </div>
    </figure>
  )
}

function CategorySection({
  category,
  images,
}: {
  category: Category
  images: readonly GalleryImage[]
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <h3 className="text-lg font-semibold text-white">{category}</h3>
        <span className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-400">
          {images.length} {images.length === 1 ? 'foto' : 'fotos'}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img) => (
          <ImageCard key={img.id} img={img} />
        ))}
      </div>
    </div>
  )
}

export function Gallery({ title, images }: Props) {
  const categoryMap = useMemo(() => {
    const map = new Map<Category, GalleryImage[]>()
    for (const cat of CATEGORY_ORDER) {
      const items = images.filter((img) => img.category === cat)
      if (items.length > 0) map.set(cat, items)
    }
    return map
  }, [images])

  const categories = useMemo(
    () => ['Todas' as const, ...Array.from(categoryMap.keys())],
    [categoryMap]
  )

  const [activeCategory, setActiveCategory] = useState<'Todas' | Category>('Todas')

  return (
    <section
      id="galeria"
      className="scroll-mt-nav relative isolate overflow-hidden border-b border-slate-800/80 py-16 sm:py-20"
    >
      <SectionBackground
        src="/images/copaminas2025_2.jpeg"
        intensity="subtle"
        position="center 25%"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          Imagens organizadas por categoria — da trajetória inicial aos campeonatos e vida em equipe.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => {
            const count =
              category === 'Todas'
                ? images.length
                : (categoryMap.get(category)?.length ?? 0)
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? 'border-sky-400 bg-sky-500/20 text-sky-200'
                    : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500'
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
                <span className="ml-1.5 text-xs opacity-70">({count})</span>
              </button>
            )
          })}
        </div>

        <div className="mt-10">
          {activeCategory === 'Todas' ? (
            <div className="space-y-12">
              {Array.from(categoryMap.entries()).map(([category, imgs]) => (
                <CategorySection key={category} category={category} images={imgs} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(categoryMap.get(activeCategory) ?? []).map((img) => (
                <ImageCard key={img.id} img={img} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
