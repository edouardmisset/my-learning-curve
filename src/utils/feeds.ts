export const MAX_FEED_ARTICLES = 100

type FeedEntryWithDate = {
  data: {
    published?: Date | null
    updated?: Date | null
  }
}

const getFeedEntryTime = (entry: FeedEntryWithDate) =>
  (entry.data.published ?? entry.data.updated)?.getTime() ?? 0

export function sortFeedEntriesByDateDesc<T extends FeedEntryWithDate>(
  entries: T[],
) {
  return entries.toSorted(
    (left, right) => getFeedEntryTime(right) - getFeedEntryTime(left),
  )
}

export function getLatestFeedEntries<T extends FeedEntryWithDate>(
  entries: T[],
  limit = MAX_FEED_ARTICLES,
) {
  return sortFeedEntriesByDateDesc(entries).slice(0, limit)
}

export function toFeedArticleParam(articleId: string) {
  return Buffer.from(articleId, 'utf-8').toString('base64url')
}
