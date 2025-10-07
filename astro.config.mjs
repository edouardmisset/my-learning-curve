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
      title: 'My Learning Curve',
      description: 'Bits and pieces I learned during my coding journey!',
      favicon: '/favicon.ico',
      plugins: [
        catppuccin({
          dark: { flavor: 'macchiato', accent: 'mauve' },
          light: { flavor: 'latte', accent: 'mauve' },
        }),
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
      tagline: 'Bits and pieces I learned during my coding journey!',
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
          autogenerate: { directory: 'snippets' },
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
          collapsed: true,
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
