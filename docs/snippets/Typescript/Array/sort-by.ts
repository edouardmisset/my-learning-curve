/**
 * Sorts an array of objects by a specified property in ascending or descending order.
 *
 * @template Obj - A type that extends Record<string, unknown>.
 * @param {Obj[]} arr - The array to sort.
 * @param {keyof Obj} property - The property to sort by.
 * @param {boolean} [ascending=true] - Whether to sort in ascending order. If false, sorts in descending order.
 * @returns {Obj[]} - The sorted array.
 */
export const sortBy = <Obj extends Record<string, unknown>>(
  arr: Obj[],
  property: keyof Obj,
  ascending = true,
): Obj[] =>
  [...arr].sort((left, right) => {
    const leftValue = left[property]
    const rightValue = right[property]
    const order = ascending ? 1 : -1

    if (typeof leftValue === 'string' && typeof rightValue === 'string') {
      return leftValue.localeCompare(rightValue) * order
    }

    if (typeof leftValue === 'number' && typeof rightValue === 'number') {
      return (leftValue - rightValue) * order
    }

    return 0
  })
