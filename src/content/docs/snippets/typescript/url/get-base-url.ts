/**
 * Removes query parameters and fragments from a given URL.
 *
 * @param url - The URL from which to remove query parameters and fragments.
 * @returns The base URL without query parameters and fragments.
 */
export function getBaseURL(url: string): string {
  try {
    const { protocol, host, pathname } = new URL(url)
    return `${protocol}//${host}${pathname}`
  } catch (error) {
    console.error('Invalid URL:', error)
    return ''
  }
}
