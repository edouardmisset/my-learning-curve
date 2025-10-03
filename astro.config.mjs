// @ts-check
import sitemap from '@astrojs/sitemap'
import starlight from '@astrojs/starlight'
import catppuccin from '@catppuccin/starlight'
import { defineConfig } from 'astro/config'
import starlightBlog from 'starlight-blog'
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
  site: 'https://edouardmisset.github.io',
  base: '/my-learning-curve',
  prefetch: true,
  integrations: [
    starlight({
      plugins: [
        catppuccin(),
        starlightLinksValidator(),
        starlightBlog({
          authors: {
            Edouard: {
              name: 'Edouard Misset',
              title: 'Full Stack Web Developer',
              url: 'https://github.com/edouardmisset',
              picture: 'https://avatars.githubusercontent.com/u/63284636?s=200',
            },
          },
          metrics: {
            readingTime: true,
            words: 'rounded',
          },
        }),
      ],
      title: 'My Learning Curve',
      description: 'Bits and pieces I learned during my coding journey!',
      favicon: '/favicon.ico',
      customCss: ['./src/styles/custom.css'],
      routeMiddleware: './src/route-data.ts',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        fr: {
          label: 'Français',
          lang: 'fr',
        },
      },
      editLink: {
        baseUrl:
          'https://github.com/edouardmisset/my-learning-curve/edit/main/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/edouardmisset/my-learning-curve',
        },
      ],
      sidebar: [
        {
          label: 'Snippets',
          items: [
            {
              label: 'CSS',
              link: '/snippets/css/components/blur-backdrop',
            },
            {
              label: 'Shell',
              link: '/snippets/shell/timeit',
            },
            {
              label: 'SQL',
              link: '/snippets/sql/crud',
            },
            {
              label: 'TypeScript',
              link: '/snippets/typescript/date/relative-time',
            },
          ],
          collapsed: true,
        },
        {
          label: 'Blog',
          autogenerate: { directory: 'blog/en' },
          collapsed: true,
        },
        {
          label: 'Guides',
          items: [
            {
              label: 'Data Analysis',
              link: '/guides/data-analysis/00-workflow',
            },
            {
              label: 'Project',
              link: '/guides/project',
            },
            {
              label: 'Project Collaboration',
              link: '/guides/project-collaboration/00-getting-started',
            },
          ],
        },
        {
          label: 'Reference',
          items: [
            {
              label: 'My setup',
              link: '/reference/setup',
            },
            {
              label: 'VS Code Shortcuts',
              link: '/reference/vs-code-shortcuts',
            },
          ],
          collapsed: true,
        },
      ],
      lastUpdated: true,
    }),
    sitemap(),
  ],
})
