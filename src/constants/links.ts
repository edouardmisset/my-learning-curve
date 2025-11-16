export const BASE_URL = '/my-learning-curve' as const

// Factory function to create link helpers with or without base URL
const createLinks = (baseUrl = '') =>
  ({
    learn: (id?: string) => `${baseUrl}/learn/${id ?? ''}`,
    tutorials: (id?: string) => `${baseUrl}/learn/tutorials/${id ?? ''}`,
    guides: (id?: string) => `${baseUrl}/learn/guides/${id ?? ''}`,
    reference: (id?: string) => `${baseUrl}/reference/${id ?? ''}`,
    snippets: (id?: string) => `${baseUrl}/snippets/${id ?? ''}`,
    blog: () => `${baseUrl}/blog`,
  }) as const satisfies Record<string, (id?: string) => string>

// Paths without BASE_URL (for Starlight sidebar)
export const PATHS = createLinks('')

// Full URLs with BASE_URL (for MDX content)
export const LINKS = {
  home: () => BASE_URL,
  ...createLinks(BASE_URL),
} as const
