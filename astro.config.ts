import sitemap from '@astrojs/sitemap'
import starlight from '@astrojs/starlight'
import robots from 'astro-robots'
import { defineConfig } from 'astro/config'
import { BASE_PATH, BASE_WEBSITE_URL } from './src/constants/links.ts'
import { ROBOTS_OPTIONS } from './src/config/astro/robots-options.ts'
import { SITEMAP_OPTIONS } from './src/config/astro/sitemap-options.ts'
import { STARLIGHT_OPTIONS } from './src/config/astro/starlight-options.ts'

import skills from 'astro-skills'

// https://astro.build/config
export default defineConfig({
  site: BASE_WEBSITE_URL,
  base: BASE_PATH,
  prefetch: true,
  vite: {
    resolve: {
      alias: {
        '~': '/src',
      },
    },
  },
  integrations: [
    starlight(STARLIGHT_OPTIONS),
    sitemap(SITEMAP_OPTIONS),
    robots(ROBOTS_OPTIONS),
    skills(),
  ],
})
