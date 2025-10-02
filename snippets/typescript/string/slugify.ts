/**
 * Converts a string into a URL-friendly slug.
 *
 * The function performs the following steps:
 * 1. Converts the string to lower case.
 * 2. Trims whitespace from the start and end of the string.
 * 3. Removes all non-word characters, spaces, and hyphens using the regex /[^\w\s-]/g.
 * 4. Replaces one or more spaces, underscores, or hyphens with a single hyphen using the regex /[\s_-]+/g.
 * 5. Removes hyphens from the start and end of the string using the regex /^-+|-+$/g.
 *
 * @param {string} str - The string to convert into a slug.
 * @returns {string} The slugified string.
 *
 * @example
 * slugify('Hello World!');
 * // => 'hello-world'
 */
export const slugify = (str: string): string =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
