# Site — atleta de judô

Frontend em React (Vite + TypeScript + Tailwind CSS): página única com seções de mídia kit (sobre, números, parcerias, galeria e contato).

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço indicado no terminal (geralmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview
```

## Onde editar conteúdo

- **Textos, links, redes e URLs de imagens:** [`src/content/site.ts`](src/content/site.ts)
- **Título e meta tags estáticas:** [`index.html`](index.html) (alinhe com `site.seo` ao publicar)
- **Imagens locais:** coloque arquivos em [`public/`](public/) e referencie como `/nome-do-arquivo.jpg` em `site.ts`

## Stack

- Vite 6, React 19, TypeScript
- Tailwind CSS 3
