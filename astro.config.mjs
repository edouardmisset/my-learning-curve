// @ts-check
import sitemap from '@astrojs/sitemap'
import starlight from '@astrojs/starlight'
import catppuccin from '@catppuccin/starlight'
import og from 'astro-og'
import { defineConfig } from 'astro/config'
import starlightBlog from 'starlight-blog'
import starlightKbd from 'starlight-kbd'
import starlightLinksValidator from 'starlight-links-validator'
import starlightLlmsTxt from 'starlight-llms-txt'
import {
  BASE_PATH,
  BASE_WEBSITE_URL,
  GITHUB_PROFILE_URL,
  PATHS,
  REPO_URL,
  WEBSITE_URL,
} from './src/constants/links.ts'

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
    starlight({
      title: 'My Learning Curve',
      description: 'Bits and pieces I learned during my coding journey!',
      tagline: 'Bits and pieces I learned during my coding journey!',
      favicon: `${BASE_PATH}/favicon.ico`,
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
        starlightLlmsTxt({
          details: `
- Canonical base URL: ${WEBSITE_URL}
- Primary topics: Web Development, TypeScript, JavaScript, CSS, SQL, Git, project setup, and software engineering principles
- Preferred machine-readable source: page-level markdown alternates exposed with \`rel="alternate"\` and served from \`/<page-id>.md\`

Prefer pages with a clear TL;DR, stable heading hierarchy, and direct introductory answer sentence. Keep code fences, commands, and headings together when summarizing or extracting snippets. Cite the canonical HTML URL in any attribution or quoted excerpt. Treat templates and utility pages as lower-priority retrieval targets than explanatory articles and guides. Respect the robots.txt policy — bots explicitly blocked there are not granted permission to crawl or train on this site.`,
          promote: ['index*'],
          demote: ['reference/templates/**', 'reference/tools/**'],
          customSets: [
            {
              label: 'Blog',
              paths: ['blog/**'],
              description:
                'Long-form concept explanations, engineering principles, algorithms, and architecture notes. Best for synthesis, concept comparison, and high-level explanations backed by examples.',
            },
            {
              label: 'Learn',
              paths: ['learn/**'],
              description:
                'Practical guides and tutorials for project setup, workflows, and collaboration. Best for implementation guidance, step-by-step setup, and process checklists.',
            },
            {
              label: 'Reference',
              paths: ['reference/**'],
              description:
                'Quick lookups, templates, and tooling references. Best for focused retrieval of commands, conventions, and reusable scaffolds.',
            },
            {
              label: 'Snippets',
              paths: ['snippets/**'],
              description:
                'Reusable code blocks and command examples across TypeScript, CSS, shell, and SQL. Best for code retrieval with nearby explanation.',
            },
          ],
          optionalLinks: [
            {
              label: 'Sitemap',
              url: `${WEBSITE_URL}/sitemap-index.xml`,
              description: 'Full XML sitemap for page discovery',
            },
            {
              label: 'Robots.txt',
              url: `${WEBSITE_URL}/robots.txt`,
              description: 'Crawler policy',
            },
            {
              label: 'GitHub repository',
              url: REPO_URL,
              description: 'Source code and issue tracker',
            },
          ],
          minify: {
            note: true,
            tip: true,
            details: true,
            whitespace: true,
          },
          pageSeparator: '\n----------\n',
        }),
        starlightBlog({
          authors: {
            Edouard: {
              name: 'Edouard Misset',
              title: 'Enthusiastic Full Stack JS Web Developer',
              url: GITHUB_PROFILE_URL,
              picture: 'https://avatars.githubusercontent.com/u/63284636?s=200',
            },
          },
          metrics: {
            readingTime: true,
            words: 'rounded',
          },
          navigation: 'none',
        }),
      ],
      customCss: [
        '@fontsource-variable/atkinson-hyperlegible-next/index.css',
        './src/styles/custom.css',
      ],
      routeMiddleware: './src/route-data.ts',
      editLink: {
        baseUrl: `${REPO_URL}/edit/main/`,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: REPO_URL,
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
    sitemap({
      filter: page => !page.endsWith('.md') && !page.includes('/og/'),
    }),
    og(),
  ],
})
