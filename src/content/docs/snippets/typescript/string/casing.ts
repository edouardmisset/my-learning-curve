/**
 * Capitalizes the first letter of a word (string).
 * @param word - The word to capitalize.
 * @returns - The word with the first letter capitalized.
 */
export const capitalize = (word: string): string =>
  word
    ? word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
    : word
