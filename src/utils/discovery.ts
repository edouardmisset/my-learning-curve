import type { StarlightRouteData } from '@astrojs/starlight/route-data'
import type { CollectionEntry } from 'astro:content'
import { BASE_PATH } from '~/constants/links'

type DiscoveryCollection = 'docs' | 'snippets'

type DiscoveryData = {
  title: string
  excerpt?: string
  description?: string
  date?: Date | string
  lastUpdated?: Date | string
  tags?: string[]
  authors?: string | string[]
}

export type DiscoveryEntry = CollectionEntry<DiscoveryCollection>

export interface RawDocument {
  id: string
  collection: DiscoveryCollection
  title: string
  excerpt: string | undefined
  description: string | undefined
  date: Date | string | undefined
  lastUpdated: Date | string | undefined
  tags: string[]
  authors: string[]
  body: string
  canonicalPath: string
  rawPath: string
}

export function getCanonicalPath(id: string): string {
  return id === 'index' ? '/' : `/${id}`
}

export function getRawPath(id: string): string {
  return id === 'index' ? '/index.md' : `/${id}.md`
}

export function withBasePath(pathname: string): string {
  return pathname === '/' ? BASE_PATH : `${BASE_PATH}${pathname}`
}

export function toAbsoluteSiteUrl(
  pathname: string,
  site: URL | string,
): string {
  return new URL(withBasePath(pathname), site).href
}

export function createRawDocument(
  collection: DiscoveryCollection,
  entry: DiscoveryEntry,
): RawDocument {
  const data = entry.data as DiscoveryData

  return {
    id: entry.id,
    collection,
    title: data.title,
    excerpt: data.excerpt,
    description: data.description,
    date: data.date,
    lastUpdated: data.lastUpdated,
    tags: data.tags ?? [],
    authors: normalizeAuthors(data.authors),
    body: entry.body ?? '',
    canonicalPath: getCanonicalPath(entry.id),
    rawPath: getRawPath(entry.id),
  }
}

export function serializeRawDocument(document: RawDocument): string {
  const frontmatterValues = [
    ['title', document.title],
    ['excerpt', document.excerpt],
    ['description', document.description],
    ['date', formatDate(document.date)],
    ['lastUpdated', formatDate(document.lastUpdated)],
    ['tags', document.tags.length > 0 ? document.tags : undefined],
    ['authors', document.authors.length > 0 ? document.authors : undefined],
    ['canonical', document.canonicalPath],
  ] as const
  const frontmatterLines = frontmatterValues.flatMap(([key, value]) =>
    value === undefined ? [] : [`${key}: ${JSON.stringify(value)}`],
  )

  return ['---', ...frontmatterLines, '---', '', document.body.trim(), ''].join(
    '\n',
  )
}

export function buildJsonLd(
  route: StarlightRouteData,
  site: URL | string,
  ogImageUrl: string,
): Record<string, unknown> {
  const data = route.entry.data as DiscoveryData
  const url = toAbsoluteSiteUrl(getCanonicalPath(route.id), site)
  const description = data.excerpt ?? data.description
  const datePublished = formatDate(data.date)
  const dateModified = formatDate(data.lastUpdated ?? data.date)
  const tags = data.tags ?? []
  const authors = normalizeAuthors(data.authors)

  return {
    '@context': 'https://schema.org',
    '@type': getSchemaType(route.id),
    headline: data.title,
    name: data.title,
    url,
    image: ogImageUrl,
    inLanguage: route.lang,
    isAccessibleForFree: true,
    mainEntityOfPage: url,
    publisher: {
      '@type': 'Person',
      name: 'Edouard Misset',
      url: 'https://github.com/edouardmisset',
    },
    isPartOf: {
      '@type': 'WebSite',
      name: route.siteTitle,
      url: toAbsoluteSiteUrl('/', site),
    },
    hasPart: [
      {
        '@type': 'MediaObject',
        contentUrl: toAbsoluteSiteUrl(getRawPath(route.id), site),
        encodingFormat: 'text/markdown',
      },
    ],
    ...(description ? { description } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(tags.length > 0 ? { keywords: tags.join(', ') } : {}),
    ...(authors.length > 0
      ? {
          author: authors.map(name => ({
            '@type': 'Person',
            name,
          })),
        }
      : {}),
  }
}

function normalizeAuthors(authors: DiscoveryData['authors']): string[] {
  return !authors ? [] : Array.isArray(authors) ? authors : [authors]
}

function formatDate(value: Date | string | undefined): string | undefined {
  if (!value) return

  return value instanceof Date ? value.toISOString().slice(0, 10) : value
}

const CONTENT_TYPE = [
  'WebSite',
  'CollectionPage',
  'BlogPosting',
  'TechArticle',
] as const
type ContentType = (typeof CONTENT_TYPE)[number]

function getSchemaType(id: string): ContentType {
  if (id === 'index') return 'WebSite'
  if (!id.includes('/')) return 'CollectionPage'
  if (id.startsWith('blog/')) return 'BlogPosting'

  return 'TechArticle'
}
