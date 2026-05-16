import { defineCollection } from 'astro:content'
import { feedLoader } from '@ascorbic/feed-loader'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'
import { blogSchema } from 'starlight-blog/schema'
import { FEEDS } from '~/config/feeds'

function createResilientFeedLoader(feedUrl: string) {
  const loader = feedLoader({
    url: feedUrl,
  })

  return {
    ...loader,
    async load(context: Parameters<(typeof loader)['load']>[0]) {
      try {
        await loader.load(context)
      } catch (error) {
        const reason = error instanceof Error ? error.message : String(error)
        context.logger.warn(
          `Failed to load feed ${feedUrl}. Continuing build with no entries for this feed. ${reason}`,
        )
        context.store.clear()
      }
    },
  }
}

const feedCollections = Object.fromEntries(
  FEEDS.map(feed => [
    feed.collection,
    defineCollection({
      loader: createResilientFeedLoader(feed.feedUrl),
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
