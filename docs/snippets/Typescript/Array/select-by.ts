/**
 * Selects a specific property from each object in an array.
 *
 * @template T - The type of the objects in the array.
 * @template K - The type of the key to select from the objects.
 * @param {T[]} arr - The array of objects.
 * @param {K} property - The property to select from each object.
 * @returns {Array<T[K]>} - An array of the selected properties.
 *
 * @example
 * selectBy([{ a: 1, b: 2 }, { a: 3, b: 4 }], 'b')
 * // Returns [2, 4]
 *
 * @example
 * selectBy([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }], 'name')
 * // Returns ['John', 'Jane']
 */
export const selectBy = <T extends Record<string, unknown>, K extends keyof T>(
  arr: T[],
  property: K,
): T[K][] =>
  arr.flatMap(item => (Object.hasOwn(item, property) ? [item[property]] : []))

/**
 * Applies a transformation function to a specific property of each object in an array.
 *
 * @template T - The type of the objects in the array.
 * @template K - The type of the key to select from the objects.
 * @template R - The type of the result of the transformation function.
 * @param {T[]} arr - The array of objects.
 * @param {K} property - The property to select from each object.
 * @param {(value: T[K]) => R} transform - The transformation function to apply to each selected property.
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
  T extends Record<string, unknown>,
  K extends keyof T,
  R,
>(
  arr: T[],
  property: K,
  transform: (value: T[K]) => R,
): R[] =>
  arr.flatMap(item =>
    Object.hasOwn(item, property) ? [transform(item[property])] : [],
  )
