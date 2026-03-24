import { isValidURL } from './is-valid-url'

/**
 * Edits the hash fragment of a given URL.
 *
 * Note: By default this function does not modify the original URL object.
 *
 * @param url - The original URL object.
 * @param newHash - The new hash fragment to set.
 * @param [replace=false] - Whether to replace the original URL object
 * or create a new one.
 * @returns An URL object with the updated hash fragment.
 */
export function editHash(
  url: URL | string,
  newHash: string,
  replace: boolean = false,
): URL {
  if (newHash === '') {
    return typeof url === 'string'
      ? new URL(url)
      : replace
        ? url
        : new URL(url.toString())
  }

  let newUrl: URL | undefined

  if (typeof url === 'string') {
    if (!isValidURL(url)) {
      throw new Error('Invalid URL')
    }
    newUrl = new URL(url)
  } else {
    newUrl = replace ? url : new URL(url.toString())
  }

  newUrl.hash = newHash

  return newUrl
}
