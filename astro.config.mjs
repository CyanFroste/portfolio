import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

export default defineConfig({
  integrations: [react(), sitemap(), icon()],
  vite: { plugins: [tailwindcss()] },

  site: 'https://cyanfroste.github.io',
  base: 'portfolio',
})
