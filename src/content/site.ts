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

export type GalleryImage = {
  id: string
  src: string
  alt: string
  category: 'Campeonatos' | 'Equipe e Treinos' | 'Trajetória'
  caption: string
}

export type GoalItem = {
  id: string
  title: string
  detail: string
  status: 'Concluído' | 'Em preparação' | 'Planejado'
}

export type LogoItem = {
  src: string
  alt: string
  instagramHandle: string
  instagramHref: string
  instagramLinks?: { handle: string; href: string }[]
}

export const site = {
  seo: {
    title: 'Elloa Maisa Pessoa | Judô de Alta Performance',
    description:
      'Elloa Maisa Pessoa — medalha de bronze no Campeonato Brasileiro Nacional Sub-15 em Aracaju (2026). Equipe Corpo Arte Judô Brasília.',
    ogImage: '/images/brasileiro_2026_sergipe.jpeg',
    siteUrl: 'https://example.com',
  },

  brand: {
    name: 'Elloa Maisa Pessoa',
  },

  athlete: {
    fullName: 'Elloa Maisa Pessoa',
    tagline: 'Atleta de judô de alta performance',
    belt: 'Brasiliense · 13 anos',
    club: 'Equipe Corpo Arte Judô Brasília',
    heroImage: '/images/perfil.jpg',
    heroImageAlt: 'Elloa Maisa Pessoa em competição de judô',
  },

  heroCta: { label: 'Ver apresentação', href: '#apresentacao' },

  newsHighlight: {
    badge: 'Novidade · maio de 2026',
    title: 'Medalha de bronze no Campeonato Brasileiro Nacional',
    subtitle: 'Sub-15 -52kg · Aracaju, Sergipe',
    body: 'Em maio de 2026, Elloá disputou o Campeonato Brasileiro Nacional em Aracaju com lutas duras e se consagrou com a medalha de bronze na categoria Sub-15.',
    image: '/images/brasileiro_2026_sergipe.jpeg',
    imageAlt: 'Elloá Pessoa no Campeonato Brasileiro Nacional 2026 em Aracaju, Sergipe',
    medalLabel: 'Bronze · Brasileiro 2026',
    cta: { label: 'Ver na galeria', href: '#galeria' },
  },

  nav: [
    { id: 'novidade', label: 'Novidade', href: '#novidade' },
    { id: 'apresentacao', label: 'Apresentação', href: '#apresentacao' },
    { id: 'conquistas', label: 'Conquistas', href: '#conquistas' },
    { id: 'metas', label: 'Metas', href: '#metas' },
    { id: 'trajetoria', label: 'Equipe', href: '#trajetoria' },
    { id: 'galeria', label: 'Galeria', href: '#galeria' },
    { id: 'parceria', label: 'Patrocínio', href: '#parceria' },
    { id: 'contato', label: 'Contato', href: '#contato' }
  ] satisfies NavItem[],

  about: {
    title: 'Apresentação',
    lead: 'Meu nome é Elloa Maisa Pessoa. Tenho 13 anos, sou brasiliense e atleta de judô de alta performance da Equipe Corpo Arte Judô Brasília.',
    paragraphs: [
      'Comecei no judô aos 5 anos, inicialmente por diversão, e hoje vivo esse esporte com paixão, disciplina e foco.',
      'Minha jornada é construída com treinos técnicos, preparação física, constância e dedicação às competições de alto nível.',
      'Meu grande objetivo é representar o Brasil nas Olimpíadas e levar o nome da minha equipe e dos meus apoiadores para o mundo.'
    ],
    values: [
      'Disciplina e constância nos treinos',
      'Respeito ao adversário e ao judô',
      'Evolução contínua dentro e fora do tatame'
    ],
    teamTitle: 'Equipe Corpo Arte Judô',
    teamDescription:
      'A Equipe Corpo Arte Judô Brasília é referência em resultados, medalhas e formação de atletas de alto rendimento, sendo campeã consecutiva por 5 anos em Brasília.',
    teamCoach:
      'Sensei responsável: Oswaldo Navarro Dantas, treinador de atletas olímpicos e medalhistas internacionais.',
    dreamQuote: 'Meu sonho é um dia representar o Brasil nas Olimpíadas.',
  },

  stats: [
    { id: '1', value: '53', label: 'Campeonatos' },
    { id: '2', value: '137', label: 'Lutas' },
    { id: '3', value: '28', label: 'Medalhas de ouro' },
    { id: '4', value: '15', label: 'Pratas e bronzes', hint: '10 pratas e 5 bronzes' },
  ] satisfies StatItem[],

  goals: {
    title: 'Metas da temporada 2026',
    intro:
      'Planejamento competitivo com foco em consolidação nacional e internacional.',
    items: [
      {
        id: 'm1',
        title: 'Ser campeã regional em Campo Verde (MT)',
        detail: 'Concluído com sucesso em março de 2026: campeã da 4ª Região Brasileira de Judô.',
        status: 'Concluído',
      },
      {
        id: 'm2',
        title: 'Campeonato Brasileiro Nacional — Aracaju (SE)',
        detail:
          'Maio de 2026: disputou lutas duras na categoria Sub-15 e conquistou a medalha de bronze.',
        status: 'Concluído',
      },
      {
        id: 'm3',
        title: 'Ser campeã do JEBS Nacional 2026 (categoria ouro)',
        detail: 'Preparação técnica e física para a principal competição escolar do país.',
        status: 'Em preparação',
      },
      {
        id: 'm4',
        title: 'Participar de Pan-Americano e Sul-Americano',
        detail: 'Com participação em estágios internacionais durante a temporada.',
        status: 'Planejado',
      },
      {
        id: 'm5',
        title: 'Ser pentacampeã do ranking de Brasília',
        detail: 'Meta para o ranking e campeonato brasiliense de 2026.',
        status: 'Em preparação',
      },
      {
        id: 'm6',
        title: 'Entrada na categoria Sub-18',
        detail: 'Participação na seletiva e no Meeting Nacional de 2026.',
        status: 'Planejado',
      },
    ] satisfies GoalItem[],
  },

  partnerships: {
    title: 'Equipe e trajetória competitiva',
    intro:
      'Da base em Brasília para eventos nacionais e internacionais, cada campeonato fortalece minha experiência competitiva e meu desenvolvimento como atleta.',
    bullets: [
      'Campeonato Brasileiro Nacional — Aracaju, Sergipe (maio 2026) - medalha de bronze Sub-15',
      'Campeonato Pan-Americano — Varadero, Cuba (2024) - 3º lugar',
      'Tour Sul-Americano — Assunção, Paraguai (2025) - vice-campeã',
      'Campeonato Brasileiro de Judô (2023, 2024, 2025, 2026) - 7º em 2023, vice em 2024 e bronze em Aracaju 2026',
      'JEBS — Jogos Escolares Brasileiros (2024) - 3º lugar na Série Ouro Sub-15',
      'Jogos Escolares de Goiás — Campeã (2024)',
      'Copa Minas de Judô (2024, 2024)',
      'Noite dos Campeões — Judô Brasília (2023, 2024)',
    ],
    federations: [
      {
        src: '/images/Corpo_arte_EQUIPE.png',
        alt: 'Equipe Corpo Arte — Brasília-DF',
        instagramHandle: '@judocorpoarte',
        instagramHref: 'https://instagram.com/judocorpoarte',
        instagramLinks: [
          { handle: '@judocorpoarte', href: 'https://instagram.com/judocorpoarte' },
          { handle: '@navarrajudo', href: 'https://instagram.com/navarrajudo' },
        ],
      },
      {
        src: '/images/cbj.jpg',
        alt: 'CBJ — Confederação Brasileira de Judô',
        instagramHandle: '@judocbj',
        instagramHref: 'https://instagram.com/judocbj',
      },
      {
        src: '/images/femeju.png',
        alt: 'FEMEJU — Federação Metropolitana de Judô do Distrito Federal',
        instagramHandle: '@judobrasilia',
        instagramHref: 'https://instagram.com/judobrasilia',
      },
    ] satisfies LogoItem[],
    sponsors: [
      {
        src: '/images/omegafisio_apoio.jpg',
        alt: 'Matheus C. Fisio',
        instagramHandle: '@matheuscfisio',
        instagramHref: 'https://instagram.com/matheuscfisio',
      },
      {
        src: '/images/renato_rocha_apoio.png',
        alt: 'Renato Rocha Brasília',
        instagramHandle: '@renatorochabrasilia',
        instagramHref: 'https://instagram.com/renatorochabrasilia',
      },
      {
        src: '/images/reciclando_futuro.PNG',
        alt: 'Reciclando Futuro',
        instagramHandle: '@reciclando_futuro',
        instagramHref: 'https://instagram.com/reciclando_futuro',
      },
      {
        src: '/images/parceria_luminyoralstudio.jpeg',
        alt: 'Luminy Oral Studio',
        instagramHandle: '@luminyoralstudio',
        instagramHref: 'https://instagram.com/luminyoralstudio',
      },
      {
        src: '/images/parceria_pessoa_promotora.jpeg',
        alt: 'Pessoa Promotora — Empréstimo Consignado',
        instagramHandle: '@pessoapromotora',
        instagramHref: 'https://instagram.com/pessoapromotora',
      },
      {
        src: '/images/parceria_compete_brasilia.png',
        alt: 'Compete Brasília',
        instagramHandle: '@esporte.df',
        instagramHref: 'https://instagram.com/esporte.df',
      },
    ] satisfies LogoItem[],
  },

  gallery: {
    title: 'Galeria profissional',
    images: [
      // --- Trajetória ---
      {
        id: 'g01',
        src: '/images/incio_de_tudo.jpeg',
        alt: 'Início da trajetória no judô',
        category: 'Trajetória',
        caption: 'O começo de tudo — primeiros passos no judô ainda criança.',
      },
      {
        id: 'g02',
        src: '/images/primeira_medalha.jpeg',
        alt: 'Primeira medalha conquistada',
        category: 'Trajetória',
        caption: 'Primeira medalha — marco emocional que acendeu o sonho olímpico.',
      },
      {
        id: 'g03',
        src: '/images/primeiro_trofeu.jpeg',
        alt: 'Primeiro troféu recebido',
        category: 'Trajetória',
        caption: 'Primeiro troféu — motivação para ir cada vez mais longe.',
      },
      {
        id: 'g04',
        src: '/images/noite_dos_campeoes.jpeg',
        alt: 'Participação na Noite dos Campeões',
        category: 'Trajetória',
        caption: 'Noite dos Campeões — reconhecimento pelos resultados da temporada.',
      },
      {
        id: 'g05',
        src: '/images/caminhando_ensaio_fotografico.jpeg',
        alt: 'Ensaio fotográfico oficial com medalhas',
        category: 'Trajetória',
        caption: 'Ensaio fotográfico — judogi, medalhas e foco na meta olímpica.',
      },
      {
        id: 'g06',
        src: '/images/primeira_reportagem_record.jpeg',
        alt: 'Reportagem da Record com a equipe',
        category: 'Trajetória',
        caption: 'Primeira reportagem (Record TV) — equipe Corpo Arte em destaque.',
      },

      // --- Campeonatos (cronológico: 2023 → 2026) ---
      {
        id: 'g06b',
        src: '/images/brasileiro_2026_sergipe.jpeg',
        alt: 'Campeonato Brasileiro Nacional 2026 em Aracaju',
        category: 'Campeonatos',
        caption:
          'Brasileiro Nacional 2026 (Aracaju, SE) — medalha de bronze Sub-15 após lutas duras em maio.',
      },
      {
        id: 'g07',
        src: '/images/campbra2023.jpeg',
        alt: 'Participação no Brasileiro 2023',
        category: 'Campeonatos',
        caption: 'Campeonato Brasileiro 2023 — experiência nacional desde cedo.',
      },
      {
        id: 'g08',
        src: '/images/etapas_2024.jpeg',
        alt: 'Concentração em etapa estadual',
        category: 'Campeonatos',
        caption: 'Etapas estaduais — concentração antes da luta na arena.',
      },
      {
        id: 'g09',
        src: '/images/campbra2024_1.jpeg',
        alt: 'Elloa no Campeonato Brasileiro de 2024',
        category: 'Campeonatos',
        caption: 'Campeonato Brasileiro 2024 — vice-campeã em nível nacional.',
      },
      {
        id: 'g10',
        src: '/images/campbra2024_2.jpeg',
        alt: 'Comemoração no Brasileiro 2024',
        category: 'Campeonatos',
        caption: 'Brasileiro 2024 — comemorando para a torcida após a vitória.',
      },
      {
        id: 'g11',
        src: '/images/panamericano_2024.jpeg',
        alt: 'Registro no Pan-Americano de 2024',
        category: 'Campeonatos',
        caption: 'Pan-Americano 2024 (Varadero, Cuba) — 3º lugar internacional.',
      },
      {
        id: 'g12',
        src: '/images/jebs2024_1.jpeg',
        alt: 'Comemoração no JEBS 2024',
        category: 'Campeonatos',
        caption: 'JEBS 2024 — 3º lugar na Série Ouro Sub-15.',
      },
      {
        id: 'g13',
        src: '/images/jebs2024_2.jpeg',
        alt: 'JEBS 2024 — em ação no tatame',
        category: 'Campeonatos',
        caption: 'JEBS 2024 — desempenho em alto nível diante do público.',
      },
      {
        id: 'g14',
        src: '/images/jogosescolaresgoias_campea_2024.jpeg',
        alt: 'Título nos Jogos Escolares de Goiás 2024',
        category: 'Campeonatos',
        caption: 'Jogos Escolares de Goiás 2024 — campeã, 1º lugar.',
      },
      {
        id: 'g15',
        src: '/images/jogos_escolares_2025.jpeg',
        alt: 'Jogos Escolares 2025',
        category: 'Campeonatos',
        caption: 'Jogos Escolares 2025 — mais uma medalha pela Equipe Corpo Arte.',
      },
      {
        id: 'g16',
        src: '/images/campbra2025_1.jpeg',
        alt: 'Campanha no Brasileiro 2025',
        category: 'Campeonatos',
        caption: 'Campeonato Brasileiro 2025 — continuidade no alto rendimento.',
      },
      {
        id: 'g17',
        src: '/images/copaminas2025_1.jpeg',
        alt: 'Lance de luta na Copa Minas 2025',
        category: 'Campeonatos',
        caption: 'Copa Minas 2025 — intensidade técnica no tatame.',
      },
      {
        id: 'g18',
        src: '/images/copaminas2025_2.jpeg',
        alt: 'Copa Minas 2025 com o técnico',
        category: 'Campeonatos',
        caption: 'Copa Minas 2025 — preparação ao lado do técnico.',
      },
      {
        id: 'g19',
        src: '/images/sula_2025.jpeg',
        alt: 'Tour Sul-Americano 2025 com a equipe',
        category: 'Campeonatos',
        caption: 'Tour Sul-Americano 2025 (Assunção) — vice-campeã.',
      },
      {
        id: 'g20',
        src: '/images/sulamericano2025.jpeg',
        alt: 'Delegação no Sul-Americano 2025',
        category: 'Campeonatos',
        caption: 'Sul-Americano 2025 — intercâmbio competitivo internacional.',
      },
      {
        id: 'g21',
        src: '/images/regional2026.jpeg',
        alt: 'Participação no regional de 2026',
        category: 'Campeonatos',
        caption: 'Regional 2026 — campeã da 4ª Região Brasileira de Judô.',
      },
      {
        id: 'g22',
        src: '/images/etapas2026_1.jpeg',
        alt: 'Preparação para etapas de 2026',
        category: 'Campeonatos',
        caption: 'Temporada 2026 — concentração e foco antes da luta.',
      },

      // --- Equipe e Treinos ---
      {
        id: 'g23',
        src: '/images/sensei.jpeg',
        alt: 'Elloa com o sensei da equipe',
        category: 'Equipe e Treinos',
        caption: 'Orientação com o sensei Oswaldo Navarro Dantas.',
      },
      {
        id: 'g24',
        src: '/images/sensei1.jpeg',
        alt: 'Com o técnico exibindo medalha',
        category: 'Equipe e Treinos',
        caption: 'Mais uma conquista compartilhada com o técnico da equipe.',
      },
      {
        id: 'g25',
        src: '/images/sensei3.jpeg',
        alt: 'Com o técnico da seleção FEMEJU',
        category: 'Equipe e Treinos',
        caption: 'Apoio do técnico da seleção FEMEJU em competição.',
      },
      {
        id: 'g26',
        src: '/images/equipe_e_amizades.jpeg',
        alt: 'Foto com equipe e colegas de treino',
        category: 'Equipe e Treinos',
        caption: 'União, amizade e trabalho coletivo no tatame.',
      },
      {
        id: 'g27',
        src: '/images/equipe_amizades.jpeg',
        alt: 'Equipe reunida em viagem de competição',
        category: 'Equipe e Treinos',
        caption: 'Bastidores — equipe reunida durante viagem de campeonato.',
      },
      {
        id: 'g28',
        src: '/images/equipe_e_amizades_3.jpeg',
        alt: 'Equipe Corpo Arte no pódio',
        category: 'Equipe e Treinos',
        caption: 'Pódio com a equipe Corpo Arte — colhendo frutos do trabalho.',
      },
      {
        id: 'g29',
        src: '/images/equipe_e_amizades_5.jpeg',
        alt: 'Cerimônia com diplomas e equipe',
        category: 'Equipe e Treinos',
        caption: 'Cerimônia de diplomas — reconhecimento da equipe Corpo Arte.',
      },
    ] satisfies GalleryImage[],
  },

  sponsorship: {
    title: 'Proposta de parceria e patrocínio',
    pitch:
      'Busco parceiros que acreditem no poder do esporte e que desejem caminhar comigo nessa trajetória de superação, apoiando competições, suplementos, consultas, uniformes e judoguis.',
    benefits: [
      'Visibilidade da marca em uniformes e judoguis',
      'Divulgação em redes sociais e materiais promocionais',
      'Presença em eventos e campeonatos',
      'Associação da marca à disciplina, juventude e alta performance',
    ],
  },

  contact: {
    title: 'Contato',
    lead: 'Convites, parcerias e oportunidades de patrocínio.',
    email: 'elcymarbell@gmail.com',
    phone: '+55 (61) 98642-9308',
    ctaPrimary: {
      label: 'Enviar e-mail',
      href: 'mailto:elcymarbell@gmail.com?subject=Contato%20pelo%20site%20oficial',
    },
    social: [
      {
        id: 's1',
        label: '@reciclando_futuro',
        href: 'https://instagram.com/reciclando_futuro',
        icon: 'instagram',
      },
    ] satisfies SocialLink[],
  },

  footer: {
    rights: '© 2026 Elloa Maisa Pessoa. Todos os direitos reservados.',
    note: 'Equipe Corpo Arte Judô Brasília · Desenvolvido por Kawê Henrique',
  },
} as const

export type SiteContent = typeof site
