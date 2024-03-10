/**
 * Checks if a string includes a substring in a case-insensitive manner.
 * @param string - The string to search in.
 * @param subString - The substring to search for.
 * @returns A boolean indicating whether the string includes the substring.
 */
export const stringIncludesCaseInsensitive = (
  string: string,
  subString: string,
): boolean => string.toLowerCase().includes(subString.toLowerCase())

export const stringIncludes = stringIncludesCaseInsensitive
