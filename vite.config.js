import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages base path - must match repository name
const repositoryName = 'IN5700-Exam-prep'

// Use base path for production builds (GitHub Pages)
// Check both NODE_ENV and a custom env var for reliability
const isProduction = process.env.NODE_ENV === 'production' || process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  plugins: [react()],
  base: isProduction ? `/${repositoryName}/` : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  publicDir: 'public',
})

