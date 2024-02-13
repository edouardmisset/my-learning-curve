/**
 * Sorts an array of objects by a specified property in ascending or descending order.
 *
 * @template Obj - A type that extends Record<string, string | number>.
 * @param {Obj[]} arr - The array to sort.
 * @param {keyof Obj} property - The property to sort by.
 * @param {boolean} [ascending=true] - Whether to sort in ascending order. If false, sorts in descending order.
 * @returns {Obj[]} - The sorted array.
 */
export const sortBy = <Obj extends Record<string, string | number>>(
  arr: Obj[],
  property: keyof Obj,
  ascending = true,
): Obj[] =>
  arr.sort((left, right) => {
    if (left[property] === right[property]) return 0
    if (ascending) return left[property] > right[property] ? 1 : -1
    return left[property] < right[property] ? 1 : -1
  })
