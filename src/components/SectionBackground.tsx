type Props = {
  src: string
  /** 'subtle' = quase imperceptível, 'medium' = nota a cena, 'strong' = bem visível */
  intensity?: 'subtle' | 'medium' | 'strong'
  /** Posição do object-cover (ex.: "center", "top", "30% 50%") */
  position?: string
  /** Inverte gradiente vertical (claro em cima, escuro embaixo) */
  flipGradient?: boolean
  /** Camada extra (radial sky glow) */
  glow?: boolean
}

const intensityMap: Record<NonNullable<Props['intensity']>, { opacity: string; blur: string }> = {
  subtle: { opacity: 'opacity-[0.12]', blur: 'blur-[2px]' },
  medium: { opacity: 'opacity-25', blur: 'blur-[1px]' },
  strong: { opacity: 'opacity-50', blur: 'blur-0' },
}

/**
 * Camada de fundo com foto + overlay escuro mantendo o tom do site.
 * Use dentro de uma <section> com `relative isolate overflow-hidden` e envolva
 * o conteúdo principal em uma div `relative z-10`.
 */
export function SectionBackground({
  src,
  intensity = 'subtle',
  position = 'center',
  flipGradient = false,
  glow = true,
}: Props) {
  const { opacity, blur } = intensityMap[intensity]

  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="absolute inset-0 bg-slate-950" />
      <img
        src={src}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover ${opacity} ${blur}`}
        style={{ objectPosition: position }}
        loading="lazy"
        decoding="async"
      />
      <div
        className={`absolute inset-0 ${
          flipGradient
            ? 'bg-gradient-to-b from-slate-950 via-slate-950/85 to-slate-950/95'
            : 'bg-gradient-to-b from-slate-950/95 via-slate-950/85 to-slate-950'
        }`}
      />
      <div className="absolute inset-0 bg-slate-950/70" />
      {glow ? (
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(56, 189, 248, 0.18), transparent 70%)',
          }}
        />
      ) : null}
    </div>
  )
}
