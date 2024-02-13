/**
 * Selects a specific key from each object in an array.
 *
 * @template Obj - The type of the objects in the array.
 * @template Key - The type of the key to select from the objects.
 * @param {Obj[]} arr - The array of objects.
 * @param {Key} key - The key to select from each object.
 * @returns {Array<Obj[Key]>} - An array of the selected properties.
 *
 * @example
 * selectBy([{ a: 1, b: 2 }, { a: 3, b: 4 }], 'b')
 * // Returns [2, 4]
 *
 * @example
 * selectBy([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }], 'name')
 * // Returns ['John', 'Jane']
 */
export const selectBy = <
  Obj extends Record<string, unknown>,
  Key extends keyof Obj,
>(
  arr: Obj[],
  key: Key,
): Obj[Key][] =>
  arr.flatMap(item => (Object.hasOwn(item, key) ? [item[key]] : []))

export const createSelectBy =
  <Obj extends Record<string, unknown>, Key extends keyof Obj>(key: Key) =>
  (item: Obj): Obj[Key] =>
    item[key]

/**
 * Applies a transformation function to a specific key of each object in an array.
 *
 * @template Obj - The type of the objects in the array.
 * @template Key - The type of the key to select from the objects.
 * @template R - The type of the result of the transformation function.
 * @param {Obj[]} arr - The array of objects.
 * @param {Key} key - The key to select from each object.
 * @param {(value: Obj[Key]) => R} transform - The transformation function to apply to each selected key.
 * @returns {Array<R>} - An array of the transformed properties.
 *
 * @example
 * selectAndTransform([{ a: 1, b: 2 }, { a: 3, b: 4 }], 'b', value => value * 2)
 * // Returns [4, 8]
 *
 * @example
 * selectAndTransform([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }], 'name', name => name.toUpperCase())
 * // Returns ['JOHN', 'JANE']
 */
export const selectAndTransform = <
  Obj extends Record<string, unknown>,
  Key extends keyof Obj,
  R,
>(
  arr: Obj[],
  key: Key,
  transform: (value: Obj[Key]) => R,
): R[] =>
  arr.flatMap(item => (Object.hasOwn(item, key) ? [transform(item[key])] : []))
