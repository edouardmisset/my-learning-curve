export function toFeedArticleParam(articleId: string) {
  return Buffer.from(articleId, 'utf-8').toString('base64url')
}
