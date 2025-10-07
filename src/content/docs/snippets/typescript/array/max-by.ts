/**
 * Returns the object with the maximum value for the specified key from an array of objects.
 * If the array is empty, returns undefined.
 *
 * @template Obj - The type of the objects in the array. Must extend Record<string, unknown>.
 * @param {Obj[]} array - The array of objects to search.
 * @param {keyof Obj} key - The key to compare.
 * @returns {Obj | undefined} - The object with the maximum value for the specified key, or undefined if the array is empty.
 *
 * @example
 * const array = [{ id: 1, value: 10 }, { id: 2, value: 5 }, { id: 3, value: 20 }];
 * const key = 'value';
 * const maxObject = maxBy(array, key);
 * console.log(maxObject); // Outputs: { id: 3, value: 20 }
 *
 * @example
 * const emptyArray = [];
 * const key = 'value';
 * const maxObject = maxBy(emptyArray, key);
 * console.log(maxObject); // Outputs: undefined
 */
export const maxBy = <Obj extends Record<string, unknown>>(
  array: Obj[],
  key: keyof Obj,
): Obj | undefined => {
  if (array.length === 0) return undefined

  return array.reduce((acc, val) => (acc[key] > val[key] ? acc : val), array[0])
}
