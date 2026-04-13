/**
 * Conteúdo central do site — edite aqui nome, textos, links e imagens.
 * Imagens locais: coloque arquivos em /public/images e use caminhos como "/images/foto.jpg".
 */

export type NavItem = { id: string; label: string; href: string }

export type SocialLink = {
  id: string
  label: string
  href: string
  icon: 'instagram' | 'youtube' | 'tiktok' | 'twitter' | 'linkedin' | 'generic'
}

export type StatItem = { id: string; value: string; label: string; hint?: string }

export type GalleryImage = { id: string; src: string; alt: string }

export type LogoItem = { src: string; alt: string }

export const site = {
  seo: {
    title: 'Elloá Pessoa | Judô — Portfólio',
    description:
      'Portfólio de Elloá Pessoa, judoca Sub15 -52kg da Equipe Corpo Arte (Brasília-DF/GO). Federada pela FEMEJU e CBJ. Conquistas, trajetória e galeria.',
    ogImage: '/images/perfil.jpeg',
    siteUrl: 'https://example.com',
  },

  brand: {
    name: 'Elloá Pessoa',
  },

  athlete: {
    fullName: 'Elloá Pessoa',
    tagline: 'Judô · Sub15 -52kg · Equipe Corpo Arte',
    belt: 'Brasília - DF / GO',
    club: 'Equipe Corpo Arte',
    heroImage: '/images/perfil.jpeg',
    heroImageAlt: 'Elloá Pessoa sorrindo com medalha e judogi',
  },

  heroCta: { label: 'Ver galeria', href: '#galeria' },

  nav: [
    { id: 'sobre', label: 'Sobre', href: '#sobre' },
    { id: 'conquistas', label: 'Conquistas', href: '#conquistas' },
    { id: 'trajetoria', label: 'Trajetória', href: '#trajetoria' },
    { id: 'galeria', label: 'Galeria', href: '#galeria' },
    { id: 'contato', label: 'Contato', href: '#contato' },
  ] satisfies NavItem[],

  about: {
    title: 'Sobre',
    lead: 'Judoca da categoria Sub15 -52kg, representando a Equipe Corpo Arte de Brasília-DF. Federada pela FEMEJU (Federação Metropolitana de Judô do Distrito Federal) e pela CBJ (Confederação Brasileira de Judô).',
    paragraphs: [
      'Comecei no judô ainda criança, e desde os primeiros passos no tatame descobri uma paixão que me acompanha até hoje. Ao longo dos anos, evolui de etapas regionais para campeonatos nacionais e internacionais, incluindo o Campeonato Brasileiro, Pan-Americano (Varadero 2024) e Tour Sul-Americano (Assunção 2025).',
      'Minha rotina combina treinos técnicos, preparação física e muita dedicação. Este portfólio reúne a minha trajetória, números e momentos marcantes dentro e fora do tatame.',
    ],
    values: [
      'Disciplina e constância no treino',
      'Respeito ao adversário e ao judô',
      'Busca contínua por evolução',
    ],
  },

  stats: [
    { id: '1', value: '52', label: 'Competições' },
    { id: '2', value: '137', label: 'Lutas' },
    { id: '3', value: '28', label: 'Ouros' },
    { id: '4', value: '42', label: 'Medalhas no total', hint: '28 ouro · 10 prata · 4 bronze' },
  ] satisfies StatItem[],

  partnerships: {
    title: 'Trajetória',
    intro:
      'De etapas regionais em Brasília até competições internacionais na América do Sul e Central. Cada campeonato representou um novo desafio e aprendizado.',
    bullets: [
      'Campeonato Pan-Americano — Varadero, Cuba (2024)',
      'Tour Sul-Americano — Assunção, Paraguai (2025)',
      'Campeonato Brasileiro de Judô (2023, 2024, 2025)',
      'JEBS — Jogos Escolares Brasileiros (2024)',
      'Jogos Escolares de Goiás — Campeã (2024)',
      'Copa Minas de Judô (2025)',
      'Noite dos Campeões — Judô Brasília (2023, 2024)',
    ],
    federations: [
      { src: '/images/femeju.png', alt: 'FEMEJU — Federação Metropolitana de Judô do Distrito Federal' },
      { src: '/images/cbj.jpg', alt: 'CBJ — Confederação Brasileira de Judô' },
      { src: '/images/Corpo_arte_EQUIPE.png', alt: 'Equipe Corpo Arte — Brasília-DF' },
    ] satisfies LogoItem[],
    sponsors: [
      { src: '/images/parceria_compete_brasilia.png', alt: 'Compete Brasília' },
      { src: '/images/parceria_luminyoralstudio.jpeg', alt: 'Luminy Oral Studio' },
      { src: '/images/parceria_pessoa_promotora.jpeg', alt: 'Pessoa Promotora — Empréstimo Consignado' },
    ] satisfies LogoItem[],
  },

  gallery: {
    title: 'Galeria',
    images: [
      { id: 'g01', src: '/images/campbra2024_1.jpeg', alt: 'Campeonato Brasileiro 2024 — Elloá no tatame' },
      { id: 'g02', src: '/images/panamericano_2024.jpeg', alt: 'Pódio do Pan-Americano Varadero 2024' },
      { id: 'g03', src: '/images/jebs2024_1.jpeg', alt: 'JEBS 2024 — comemoração após a luta' },
      { id: 'g04', src: '/images/copaminas2025_1.jpeg', alt: 'Copa Minas 2025 — golpe durante a luta' },
      { id: 'g05', src: '/images/etapas2026_1.jpeg', alt: 'Etapa 2026 — concentração antes da luta' },
      { id: 'g06', src: '/images/sula_2025.jpeg', alt: 'Tour Sul-Americano 2025 — bandeira Corpo Arte' },
      { id: 'g07', src: '/images/jogosescolaresgoias_campea_2024.jpeg', alt: 'Jogos Escolares de Goiás 2024 — 1º lugar' },
      { id: 'g08', src: '/images/noite_dos_campeoes.jpeg', alt: 'Noite dos Campeões 2024 — troféu' },
      { id: 'g09', src: '/images/sensei.jpeg', alt: 'Elloá com o sensei da Corpo Arte' },
      { id: 'g10', src: '/images/equipe_e_amizades.jpeg', alt: 'Equipe e amizades no tatame' },
      { id: 'g11', src: '/images/incio_de_tudo.jpeg', alt: 'O início de tudo — primeiro judogi' },
      { id: 'g12', src: '/images/primeira_medalha.jpeg', alt: 'Primeira medalha conquistada' },
      { id: 'g13', src: '/images/primeiro_trofeu.jpeg', alt: 'Noite dos Campeões 2023 — primeiro troféu' },
      { id: 'g14', src: '/images/campbra2025_1.jpeg', alt: 'Camp. Brasileiro 2025 — medalha CBJ' },
      { id: 'g15', src: '/images/sulamericano2025.jpeg', alt: 'Tour Sul-Americano Assunção 2025 — equipe' },
      { id: 'g16', src: '/images/regional2026.jpeg', alt: 'A caminho do Regional 2026' },
      { id: 'g17', src: '/images/campbra2023.jpeg', alt: 'Campeonato Brasileiro 2023 — kimono azul' },
    ] satisfies GalleryImage[],
  },

  contact: {
    title: 'Contato',
    lead: 'Mensagens, convites e oportunidades — respondo por e-mail quando possível.',
    email: 'contato@exemplo.com',
    phone: '+55 (61) 99999-0000',
    ctaPrimary: {
      label: 'Enviar e-mail',
      href: 'mailto:contato@exemplo.com?subject=Contato%20pelo%20portf%C3%B3lio',
    },
    social: [
      { id: 's1', label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
    ] satisfies SocialLink[],
  },

  footer: {
    rights: '© 2026 Elloá Pessoa. Todos os direitos reservados.',
    note: 'Equipe Corpo Arte — Brasília-DF',
  },
} as const

export type SiteContent = typeof site
