import starlight from '@astrojs/starlight'
import catppuccin from '@catppuccin/starlight'
import starlightBlog from 'starlight-blog'
import starlightKbd from 'starlight-kbd'
import starlightLinksValidator from 'starlight-links-validator'
import starlightLlmsTxt from 'starlight-llms-txt'
import { BASE_PATH, PATHS, REPO_URL } from '../../constants/links.ts'
import { CATPPUCCIN_OPTIONS } from './plugins/catppuccin-options.ts'
import { STARLIGHT_BLOG_OPTIONS } from './plugins/starlight-blog-options.ts'
import { STARLIGHT_KBD_OPTIONS } from './plugins/starlight-kbd-options.ts'
import { STARLIGHT_LLM_TXT_OPTIONS } from './plugins/starlight-llms-txt-options.ts'

export const STARLIGHT_OPTIONS = {
  title: 'My Learning Curve',
  description: 'Bits and pieces I learned during my coding journey!',
  tagline: 'Bits and pieces I learned during my coding journey!',
  favicon: `${BASE_PATH}/favicon.ico`,
  plugins: [
    catppuccin(CATPPUCCIN_OPTIONS),
    starlightKbd(STARLIGHT_KBD_OPTIONS),
    starlightLinksValidator(),
    starlightLlmsTxt(STARLIGHT_LLM_TXT_OPTIONS),
    starlightBlog(STARLIGHT_BLOG_OPTIONS),
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
      label: 'RSS Feed',
      link: PATHS.feeds(),
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
              link: PATHS.guides('project-collaboration/00-getting-started'),
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
} as const satisfies Parameters<typeof starlight>[0]
