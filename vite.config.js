import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base is the repo name so asset URLs resolve on GitHub Pages
// (served from https://dansonhar.github.io/Resume/)
export default defineConfig({
  base: '/Resume/',
  plugins: [react()],
})
