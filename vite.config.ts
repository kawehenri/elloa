import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Base relativo: funciona em GitHub Pages (site de projeto em /repo/ e domínio na raiz).
// Evita carregar o index.html de desenvolvimento (src/main.tsx) no deploy — use sempre a pasta dist/ após `npm run build`.
export default defineConfig({
  plugins: [react()],
  base: './',
})
