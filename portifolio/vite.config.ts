import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuração do Vite para GitHub Pages
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  base: '/',
})