/**
 * Checks if a string is valid JSON.
 *
 * @param str - The string to check.
 * @returns - Returns true if the string is valid JSON, otherwise false.
 */
export const isValidJSON = (str: string): boolean => {
  try {
    JSON.parse(str)
    return true
  } catch (_e) {
    return false
  }
}
