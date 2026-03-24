/**
 * Creates a comparator function for sorting strings.
 *
 * @param order - The sort order, either ascending ('asc') or
 * descending ('desc'). Defaults to 'asc'.
 * @param locale - The locale to use for sorting. Defaults to
 * 'fr-FR'.
 * @param options - Options to configure the
 * Intl.Collator. Defaults to { sensitivity: 'base' }.
 * @returns A comparator function that
 * compares two strings.
 */
const createCompareStrings = (
  order: 'asc' | 'desc' = 'asc',
  locale: string = 'fr-FR',
  options: Intl.CollatorOptions = { sensitivity: 'base' },
): ((a: string, b: string) => number) => {
  const { compare } = new Intl.Collator(locale, options)

  return order === 'asc' ? compare : (a, b): number => compare(b, a)
}

/**
 * Comparator function for sorting strings in ascending order.
 *
 * @param a - The first string to compare.
 * @param b - The second string to compare.
 * @returns A negative number if a precedes b, a positive number if a
 * follows b, otherwise 0.
 */
export const compareStringsAscending = createCompareStrings('asc')

/**
 * Comparator function for sorting strings in descending order.
 *
 * @param a - The first string to compare.
 * @param b - The second string to compare.
 * @returns A negative number if a should come before b (i.e., when a
 * is greater than b), a positive number if a should come after b, otherwise 0.
 */
export const compareStringsDescending = createCompareStrings('desc')
