/**
 * Checks if a string equals a substring in a case-insensitive manner.
 *
 * @param leftString - The left string to search.
 * @param rightString - The right string to search.
 * @returns A boolean indicating whether the string equals the substring.
 */
export const stringEqualsCaseInsensitive = (
  leftString: string,
  rightString: string,
): boolean => leftString.toLowerCase() === rightString.toLowerCase()
