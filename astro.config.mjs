// @ts-check
import sitemap from '@astrojs/sitemap'
import starlight from '@astrojs/starlight'
import catppuccin from '@catppuccin/starlight'
import { defineConfig } from 'astro/config'
import starlightBlog from 'starlight-blog'
import starlightKbd from 'starlight-kbd'
import starlightLinksValidator from 'starlight-links-validator'
import { BASE_URL, PATHS } from './src/constants/links.ts'

// https://astro.build/config
export default defineConfig({
  site: 'https://edouardmisset.github.io',
  base: BASE_URL,
  prefetch: true,
  vite: {
    resolve: {
      alias: {
        '~': '/src',
      },
    },
  },
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
        starlightKbd({
          types: [
            { id: 'mac', label: 'macOS', default: true },
            { id: 'windows', label: 'Windows' },
            { id: 'linux', label: 'Linux' },
          ],
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
          label: 'Blog',
          link: PATHS.blog(),
        },
        {
          label: 'Learn',
          items: [
            {
              label: 'Tutorials',
              collapsed: false,
              items: [
                {
                  label: 'Data Analysis',
                  link: PATHS.tutorials('data-analysis/00-workflow'),
                },
              ],
            },
            {
              label: 'Guides',
              collapsed: false,
              items: [
                {
                  label: 'Project Setup',
                  link: PATHS.guides('project'),
                },
                {
                  label: 'Team Collaboration',
                  link: PATHS.guides(
                    'project-collaboration/00-getting-started',
                  ),
                },
              ],
            },
          ],
        },
        {
          label: 'Reference',
          items: [
            {
              label: 'Cheatsheets',
              autogenerate: { directory: 'reference/cheatsheets' },
            },
            {
              label: 'Templates',
              autogenerate: { directory: 'reference/templates' },
            },
            {
              label: 'Tools',
              autogenerate: { directory: 'reference/tools' },
            },
          ],
        },
        {
          label: 'Snippets',
          autogenerate: { directory: 'snippets' },
          collapsed: true,
        },
      ],
      lastUpdated: true,
    }),
    sitemap(),
  ],
})
