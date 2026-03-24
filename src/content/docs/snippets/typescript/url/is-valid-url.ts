/**
 * Checks if a given string is a valid URL.
 *
 * @param url - The URL string to validate.
 * @returns True if the URL is valid, false otherwise.
 */
export function isValidURL(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}
