/**
 * Sorts an array of objects by a specified property in ascending or descending order.
 *
 * @template T - A type that extends Record<string, string | number>.
 * @param {T[]} arr - The array to sort.
 * @param {keyof T} property - The property to sort by.
 * @param {boolean} [ascending=true] - Whether to sort in ascending order. If false, sorts in descending order.
 * @returns {T[]} - The sorted array.
 */
export const sortBy = <T extends Record<string, string | number>>(
  arr: T[],
  property: keyof T,
  ascending = true,
): T[] =>
  arr.sort((left, right) => {
    if (left[property] === right[property]) return 0
    if (ascending) return left[property] > right[property] ? 1 : -1
    return left[property] < right[property] ? 1 : -1
  })
