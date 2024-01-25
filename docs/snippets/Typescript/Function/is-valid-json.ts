/**
 * Checks if a string is valid JSON.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns true if the string is valid JSON, otherwise false.
 */
export const isValidJSON = (str: string): boolean => {
  try {
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}
