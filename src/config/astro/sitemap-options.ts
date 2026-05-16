import sitemap from '@astrojs/sitemap'

export const SITEMAP_OPTIONS = {
  filter: (page: string) => !page.endsWith('.md') && !page.includes('/og/'),
} as const satisfies NonNullable<Parameters<typeof sitemap>[0]>
