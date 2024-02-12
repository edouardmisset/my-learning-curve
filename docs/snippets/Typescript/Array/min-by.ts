/**
 * Returns the object with the minimum value for the specified key from an array of objects.
 * If the array is empty, returns undefined.
 *
 * @template T - The type of the objects in the array. Must extend Record<string, unknown>.
 * @param {T[]} array - The array of objects to search.
 * @param {keyof T} key - The key to compare.
 * @returns {T | undefined} - The object with the minimum value for the specified key, or undefined if the array is empty.
 *
 * @example
 * const array = [{ id: 1, value: 10 }, { id: 2, value: 5 }, { id: 3, value: 20 }];
 * const key = 'value';
 * const minObject = minBy(array, key);
 * console.log(minObject); // Outputs: { id: 2, value: 5 }
 *
 * @example
 * const emptyArray = [];
 * const key = 'value';
 * const minObject = minBy(emptyArray, key);
 * console.log(minObject); // Outputs: undefined
 */
export const minBy = <T extends Record<string, unknown>>(
  array: T[],
  key: keyof T,
): T | undefined => {
  if (array.length === 0) return undefined

  return array.reduce((acc, val) => (acc[key] < val[key] ? acc : val), array[0])
}
