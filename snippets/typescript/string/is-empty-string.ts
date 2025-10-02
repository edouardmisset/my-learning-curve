/**
 * Checks if a string is either empty (""), `null`, or `undefined`.
 *
 * **Note**: Spaces or blanc strings (" ") are considered empty.
 *
 * @param {undefined | null | string} s - The string to be checked.
 * @returns {boolean} - A boolean value indicating whether the string is empty, `null`, or `undefined`.
 */
export const isEmptyStringOrNullish = (s: undefined | null | string): boolean =>
  s == null || s.trim() === ''
