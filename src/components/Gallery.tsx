import { useMemo, useState } from 'react'
import type { GalleryImage } from '../content/site'

type Props = {
  title: string
  images: readonly GalleryImage[]
}

type Category = GalleryImage['category']

const CATEGORY_ORDER: Category[] = ['Trajetória', 'Campeonatos', 'Equipe e Treinos']

function ImageCard({ img }: { img: GalleryImage }) {
  return (
    <figure className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:border-sky-600/40 hover:shadow-lg hover:shadow-sky-900/20">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img.src}
          alt={img.alt}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
        />
      </div>
      <figcaption className="border-t border-slate-800 px-4 py-3">
        <p className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
          {img.category}
        </p>
        <p className="mt-1 text-sm leading-snug text-slate-300">{img.caption}</p>
      </figcaption>
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
      className="scroll-mt-nav border-b border-slate-800/80 bg-gradient-to-b from-brand-900/30 to-slate-950 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
