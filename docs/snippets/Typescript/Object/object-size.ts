/**
 * Returns the size of an object, which is the number of its own enumerable properties.
 *
 * @param {Record<string, unknown>} obj - The object to query.
 * @returns {number} Returns the size of the `obj`.
 *
 * @example
 * objectSize({a: 1, b: 2, c: 3});
 * // => 3
 */
export const objectSize = (obj: Record<string, unknown>): number =>
  Object.keys(obj).length;

  export const objectLength = objectSize