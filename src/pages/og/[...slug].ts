import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'

const FONT_FAMILY_STACK = [
  'Atkinson Hyperlegible Next Variable',
  'Segoe UI',
  'Roboto',
  'Arial',
  'sans-serif',
] as const

const ACCENT_BORDER_COLOR = [145, 68, 238] as const

// Get all entries from the `docs` content collection.
const entries = await getCollection('docs')

// Map the entries to an object keyed by route path.
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, data]))

export const { getStaticPaths, GET } = await OGImageRoute({
  // Pass down the documentation pages.
  pages,
  // Define the name of the parameter used in the endpoint path, here `slug`
  // as the file is named `[...slug].ts`.
  param: 'slug',
  // Define a function called for each page to customize the generated image.
  getImageOptions: (_id, page: (typeof entries)[number]['data']) => {
    return {
      // Use the page title and description as the image title and description.
      title: page.title,
      description: page.description ?? '',
      // Customize various colors and add a border.
      bgGradient: [[24, 24, 27]],
      border: {
        color: [...ACCENT_BORDER_COLOR],
        width: 2,
        side: 'inline-start',
      },
      fonts: [
        './node_modules/@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-normal.woff2',
      ],
      font: {
        title: {
          families: [...FONT_FAMILY_STACK],
        },
        description: {
          families: [...FONT_FAMILY_STACK],
        },
      },
      padding: 120,
    }
  },
})
