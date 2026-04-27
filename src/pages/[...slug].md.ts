import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import {
  createRawDocument,
  serializeRawDocument,
  type RawDocument,
} from '~/utils/discovery'

const rawDocuments = await getRawDocuments()

export function getStaticPaths() {
  return rawDocuments.map(document => ({
    params: {
      slug: document.id,
    },
    props: {
      document,
    },
  }))
}

export const GET: APIRoute = ({ props }) => {
  const document = props['document'] as RawDocument

  return new Response(serializeRawDocument(document), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  })
}

async function getRawDocuments() {
  const documentsByPath = new Map<string, RawDocument>()
  const docsEntries = await getCollection('docs')
  const snippetsEntries = await getCollection('snippets')

  for (const entry of docsEntries) {
    const document = createRawDocument('docs', entry)
    documentsByPath.set(document.id, document)
  }

  for (const entry of snippetsEntries) {
    const document = createRawDocument('snippets', entry)

    if (!documentsByPath.has(document.id)) {
      documentsByPath.set(document.id, document)
    }
  }

  return [...documentsByPath.values()]
}
