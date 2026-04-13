/**
 * Conteúdo central do site — edite aqui nome, textos, links e imagens.
 * Imagens locais: coloque arquivos em /public e use caminhos como "/foto.jpg".
 */

export type NavItem = { id: string; label: string; href: string }

export type SocialLink = {
  id: string
  label: string
  href: string
  /** Nome do ícone: instagram | youtube | tiktok | twitter | linkedin | generic */
  icon: 'instagram' | 'youtube' | 'tiktok' | 'twitter' | 'linkedin' | 'generic'
}

export type StatItem = { id: string; value: string; label: string; hint?: string }

export type GalleryImage = { id: string; src: string; alt: string }

export const site = {
  seo: {
    title: 'Ana Costa | Judô — Portfólio',
    description:
      'Portfólio de atleta de judô: trajetória, conquistas, galeria e contato.',
    /** URL absoluta da imagem para Open Graph (troque ao publicar) */
    ogImage: 'https://images.unsplash.com/photo-1549719386-74dfcbf7a31e?w=1200&h=630&fit=crop',
    /** Domínio final do site, ex.: https://seudominio.com */
    siteUrl: 'https://example.com',
  },

  brand: {
    name: 'Ana Costa',
  },

  athlete: {
    fullName: 'Ana Costa',
    tagline: 'Judô · Categoria meio-leve · Clube de elite',
    belt: 'Faixa preta · 2º dan',
    club: 'Associação Atlética (placeholder)',
    /** Foto principal do hero — substitua por foto em /public se preferir */
    heroImage:
      'https://images.unsplash.com/photo-1549719386-74dfcbf7a31e?w=1600&q=80&auto=format&fit=crop',
    heroImageAlt: 'Atleta de judô em treino no tatame',
  },

  /** Botão principal do hero (portfólio) */
  heroCta: { label: 'Ver galeria', href: '#galeria' },

  nav: [
    { id: 'sobre', label: 'Sobre', href: '#sobre' },
    { id: 'conquistas', label: 'Conquistas', href: '#conquistas' },
    { id: 'experiencia', label: 'Experiência', href: '#experiencia' },
    { id: 'galeria', label: 'Galeria', href: '#galeria' },
    { id: 'contato', label: 'Contato', href: '#contato' },
  ] satisfies NavItem[],

  about: {
    title: 'Sobre',
    lead: 'Competidora dedicada, com foco em técnica, condicionamento e mentalidade de alto nível.',
    paragraphs: [
      'Atuo com disciplina diária em treinos de judô, preparação física e análise de vídeo. Busco representar com ética tanto no tatame quanto fora dele, conectando-me com público que valoriza esporte e superação.',
      'Este site funciona como portfólio: reúne um panorama da minha trajetória no judô e materiais para quem acompanha minha carreira.',
    ],
    values: ['Disciplina e respeito ao judogi', 'Performance com responsabilidade', 'Inspiração para novas gerações'],
  },

  stats: [
    { id: '1', value: '12+', label: 'Anos de tatame', hint: 'Incluindo base e alto rendimento' },
    { id: '2', value: '40+', label: 'Pódios estaduais', hint: 'Dados ilustrativos' },
    { id: '3', value: '15+', label: 'Eventos nacionais', hint: 'Participações e convocações' },
    { id: '4', value: '5+', label: 'Seleções e convocações', hint: 'Substitua por dados oficiais' },
  ] satisfies StatItem[],

  partnerships: {
    title: 'Experiência',
    intro:
      'Treinos de alto rendimento, competições e evolução técnica no judô. Aqui destaco aspectos da minha formação e do dia a dia no tatame.',
    bullets: [
      'Preparação física e técnica com acompanhamento profissional',
      'Participação em campeonatos estaduais e nacionais',
      'Foco em constância, análise de performance e mentalidade competitiva',
    ],
    /** Número de “slots” de imagem/logo (placeholders) */
    logoSlotCount: 4,
    logoSectionTitle: 'Destaques (placeholder)',
  },

  gallery: {
    title: 'Galeria',
    images: [
      {
        id: 'g1',
        src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80&auto=format&fit=crop',
        alt: 'Treinamento de artes marciais em academia',
      },
      {
        id: 'g2',
        src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop',
        alt: 'Atleta em treino de força',
      },
      {
        id: 'g3',
        src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80&auto=format&fit=crop',
        alt: 'Pesos e equipamento de ginástica',
      },
      {
        id: 'g4',
        src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&auto=format&fit=crop',
        alt: 'Academia e ambiente de treino',
      },
      {
        id: 'g5',
        src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80&auto=format&fit=crop',
        alt: 'Aquecimento antes da competição',
      },
      {
        id: 'g6',
        src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80&auto=format&fit=crop',
        alt: 'Detalhe de kimono de judô',
      },
    ] satisfies GalleryImage[],
  },

  contact: {
    title: 'Contato',
    lead: 'Mensagens, convites e oportunidades — respondo por e-mail quando possível.',
    email: 'contato@exemplo.com',
    phone: '+55 (11) 99999-0000',
    ctaPrimary: {
      label: 'Enviar e-mail',
      href: 'mailto:contato@exemplo.com?subject=Contato%20pelo%20portf%C3%B3lio',
    },
    social: [
      { id: 's1', label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
    ] satisfies SocialLink[],
  },

  footer: {
    rights: '© 2026 Ana Costa. Todos os direitos reservados.',
    note: 'Imagens de exemplo (Unsplash) — substitua por fotos próprias na publicação.',
  },
} as const

export type SiteContent = typeof site
