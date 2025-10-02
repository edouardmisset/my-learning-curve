/**
 * Sets or updates query parameters in a given URL.
 *
 * Note:
 * - This function **does NOT mutate** the original url.
 * - Use `new URL(url)` if the original URL is a string.
 *
 * @param {URL} url - The original URL object.
 * @param {Record<string, string | number | (string | number)[]>} newParams - An
 * object containing the query parameters to set or update.
 * @returns {URL} A new URL object with the updated query parameters.
 */
export function setURLParameters(
  url: URL,
  newParams: Record<string, string | number | (string | number)[]>,
  replace = false,
): URL {
  const newUrl = replace ? url : new URL(url.toString())

  for (const key of Object.keys(newParams)) {
    const parameterValue = newParams[key]
    if (Array.isArray(parameterValue)) {
      for (const value of parameterValue) {
        newUrl.searchParams.append(key, value.toString())
      }
    } else {
      newUrl.searchParams.set(key, parameterValue.toString())
    }
  }

  return newUrl
}
