import type { CollectionEntry } from 'astro:content'
import type { FEEDS } from '~/config/feeds'

export type FeedDefinition = (typeof FEEDS)[number]

export type FeedCollection = FeedDefinition['collection']
export type FeedEntry = CollectionEntry<FeedCollection>

export type FeedParams = {
  feed: FeedDefinition['slug']
}

export type FeedProps = {
  feed: FeedDefinition
}

export type FeedPath = {
  params: FeedParams
  props: FeedProps
}

export type FeedArticleParams = FeedParams & {
  article: string
}

export type FeedArticleProps = FeedProps & {
  article: FeedEntry
}

export type FeedArticlePath = {
  params: FeedArticleParams
  props: FeedArticleProps
}
