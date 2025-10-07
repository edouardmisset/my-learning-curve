/**
 * Extracts query parameters from a given URL and returns them as an object.
 *
 * @param {string} url - The URL from which to extract query parameters.
 * @returns {Record<string, string>} An object containing the query parameters.
 */
export function getURLParameters(url: string): Record<string, string> {
  const { searchParams } = new URL(url)
  return Array.from(searchParams).reduce(
    (accumulator, [key, value]) => {
      accumulator[key] = value
      return accumulator
    },
    {} as Record<string, string>,
  )
}
