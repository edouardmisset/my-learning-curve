const BASE_URL = '/my-learning-curve' as const

export const LINKS = {
  home: () => BASE_URL,
  snippets: (id?: string) => `${BASE_URL}/snippets/${id ?? ''}`,
  blog: () => `${BASE_URL}/blog`,
  guides: (id?: string) => `${BASE_URL}/guides/${id ?? ''}`,
  reference: (id?: string) => `${BASE_URL}/reference/${id ?? ''}`,
} as const satisfies Record<string, (id?: string) => string>
