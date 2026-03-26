import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignore: [
    'src/content/docs/snippets/**',
    'vite.config.ts', // This is our vite config file for dev purposes
    'src/route-data.ts', // This file is a middleware (convention file) used by starlight to generate Open Graph images for each page
  ],
}

export default config
