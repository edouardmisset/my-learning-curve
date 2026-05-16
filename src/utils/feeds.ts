export const MAX_FEED_ARTICLES = 100

type FeedEntryWithDate = {
  data: {
    published?: Date | null
    updated?: Date | null
  }
}

const getFeedEntryTime = (entry: FeedEntryWithDate) =>
  (entry.data.published ?? entry.data.updated)?.getTime() ?? 0

export const sortFeedEntriesByDateDesc = <T extends FeedEntryWithDate>(
  entries: T[],
) =>
  entries.toSorted(
    (left, right) => getFeedEntryTime(right) - getFeedEntryTime(left),
  )

export const getLatestFeedEntries = <T extends FeedEntryWithDate>(
  entries: T[],
  limit = MAX_FEED_ARTICLES,
) => sortFeedEntriesByDateDesc(entries).slice(0, limit)

export const toFeedArticleParam = (articleId: string) =>
  Buffer.from(articleId, 'utf-8').toString('base64url')
