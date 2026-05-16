import { defineCollection } from 'astro:content'
import { feedLoader } from '@ascorbic/feed-loader'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'
import { blogSchema } from 'starlight-blog/schema'
import { FEEDS } from '~/config/feeds'

const feedCollections = Object.fromEntries(
  FEEDS.map(feed => [
    feed.collection,
    defineCollection({
      loader: feedLoader({
        url: feed.feedUrl,
      }),
    }),
  ]),
) as Record<
  (typeof FEEDS)[number]['collection'],
  ReturnType<typeof defineCollection>
>

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: context => blogSchema(context),
    }),
  }),
  snippets: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: context => blogSchema(context),
    }),
  }),
  ...feedCollections,
}
