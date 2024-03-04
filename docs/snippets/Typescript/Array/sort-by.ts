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
  [...arr].sort((left, right) => {
    const leftValue = left[property]
    const rightValue = right[property]
    const order = ascending ? 1 : -1

    if (leftValue === rightValue) return 0
    return leftValue > rightValue ? order : -order
  })
