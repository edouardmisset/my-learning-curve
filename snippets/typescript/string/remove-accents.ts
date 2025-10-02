/**
 * Removes diacritics (accents) from a string.
 *
 * The function uses the "Normalization Form D" (NFD) to decompose the string into base characters and combining characters (accents).
 * It then removes the accents by replacing them with an empty string.
 *
 * The regular expression /[\u0300-\u036f]/g matches any character in the Unicode range from 0300 to 036F, which includes many common diacritical marks.
 *
 * @param {string} str - The string from which to remove accents.
 * @returns {string} The string with accents removed.
 *
 * @example
 * removeAccent('résumé');
 * // => 'resume'
 */
export const removeAccents = (str: string): string =>
  str
    .normalize('NFD')
    // biome-ignore lint/suspicious/noMisleadingCharacterClass: this is precisely what we want to do
    .replace(/[\u0300-\u036f]/g, '')
