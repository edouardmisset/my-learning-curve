/**
 * Returns the last `n` elements from the given array.
 *
 * @default n = 1
 * @template T
 * @param {T[]} array - The array to take elements from.
 * @param {number} [n=1] - The number of elements to take. Defaults to 1 if not provided.
 * @returns {T[]} The last `n` elements from the given array.
 *
 * The `Math.abs(n)` is used to ensure that `n` is always positive. If a negative number is passed, it will be converted to a positive number.
 * This means that the function will always return the last `n` elements, even if `n` is negative.
 *
 * @example
 * takeEnd([1, 2, 3, 4])
 * // Returns [4]
 *
 * takeEnd([1, 2, 3, 4], 2)
 * // Returns [3, 4]
 *
 * takeEnd([1, 2, 3, 4], -2)
 * // Returns [3, 4]
 */
export const takeEnd = <T>(array: T[], n = 1): T[] => array.slice(-Math.abs(n))

/**
 * Returns the first `n` elements from the given array.
 *
 * @default n = 1
 * @template T
 * @param {T[]} array - The array to take elements from.
 * @param {number} [n=1] - The number of elements to take. Defaults to 1 if not provided.
 * @returns {T[]} The first `n` elements from the given array.
 *
 * The `Math.abs(n)` is used to ensure that `n` is always positive. If a negative number is passed, it will be converted to a positive number.
 * This means that the function will always return the first `n` elements, even if `n` is negative.
 *
 * @example
 * takeStart([1, 2, 3, 4])
 * // Returns [1]
 *
 * takeStart([1, 2, 3, 4], 2)
 * // Returns [1, 2]
 *
 * takeStart([1, 2, 3, 4], -2)
 * // Returns [1, 2]
 */
export const takeStart = <T>(array: T[], n = 1): T[] =>
  array.slice(0, Math.abs(n))

/**
 * Returns the first `n` elements if `n` is positive or the last `n` elements if `n` is negative from the given array.
 *
 * @default n = 1
 *
 * @template T
 * @param {T[]} array - The array to take elements from.
 * @param {number} [n=1] - The number of elements to take. Defaults to 1 if not provided.
 * @returns {T[]} The first `n` elements if `n` is positive or the last `n` elements if `n` is negative from the given array.
 *
 * If `n` is positive, the function will return the first `n` elements from the start of the array.
 * If `n` is negative, the function will return the last `n` elements from the end of the array.
 *
 * @example
 * take([1, 2, 3, 4])
 * // Returns [1]
 *
 * take([1, 2, 3, 4], 2)
 * // Returns [1, 2]
 *
 * take([1, 2, 3, 4], -2)
 * // Returns [3, 4]
 */
export const take = <T>(array: T[], n = 1): T[] =>
  n >= 0 ? takeStart(array, n) : takeEnd(array, n)
