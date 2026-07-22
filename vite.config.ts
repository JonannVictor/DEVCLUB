import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from a /DEVCLUB/ subpath; Vercel serves it from the domain root.
  base: process.env.VERCEL ? '/' : '/DEVCLUB/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
