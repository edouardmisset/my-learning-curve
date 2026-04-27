import { defineRouteMiddleware } from '@astrojs/starlight/route-data'
import { buildJsonLd, getRawPath, toAbsoluteSiteUrl } from '~/utils/discovery'

type HeadTag = {
  tag: string
  attrs?: Record<string, string | boolean | undefined> | undefined
  content?: string | undefined
}

export const onRequest = defineRouteMiddleware(context => {
  const route = context.locals.starlightRoute
  const pageId = route.id || 'index'
  const site = context.site ?? context.url.origin

  // Get the URL of the generated image for the current page using its ID and
  // append the `.png` file extension.
  const ogImageUrl = toAbsoluteSiteUrl(`/og/${pageId}.png`, site)
  const rawDocumentUrl = toAbsoluteSiteUrl(getRawPath(pageId), site)
  const jsonLd = JSON.stringify(buildJsonLd(route, site, ogImageUrl))

  // Get the array of all tags to include in the `<head>` of the current page.
  const { head } = route

  // Add the `<meta/>` tags for the Open Graph images.
  upsertHeadTag(head, {
    tag: 'meta',
    attrs: { property: 'og:image', content: ogImageUrl },
  })
  upsertHeadTag(head, {
    tag: 'meta',
    attrs: { name: 'twitter:image', content: ogImageUrl },
  })
  upsertHeadTag(head, {
    tag: 'link',
    attrs: {
      rel: 'alternate',
      type: 'text/markdown',
      title: 'Markdown source',
      href: rawDocumentUrl,
    },
  })
  upsertHeadTag(head, {
    tag: 'script',
    attrs: { type: 'application/ld+json' },
    content: jsonLd,
  })
})

function upsertHeadTag(head: HeadTag[], tag: HeadTag): void {
  const existingIndex = head.findIndex(entry => matchesHeadTag(entry, tag))

  if (existingIndex === -1) {
    head.push(tag)
    return
  }

  head[existingIndex] = tag
}

function matchesHeadTag(current: HeadTag, next: HeadTag): boolean {
  if (current.tag !== next.tag) return false

  if (current.tag === 'script')
    return current.attrs?.['type'] === next.attrs?.['type']

  return (
    current.attrs?.['name'] === next.attrs?.['name'] &&
    current.attrs?.['property'] === next.attrs?.['property'] &&
    current.attrs?.['rel'] === next.attrs?.['rel'] &&
    current.attrs?.['type'] === next.attrs?.['type']
  )
}
