/**
 * Creates an array of a specified length and populates it with the results of calling a provided function on every index in the array.
 *
 * @template T - The type of elements in the resulting array.
 * @param {number} length - The length of the array to create.
 * @param {(_: unknown, index: number) => T} [transform=(_, index) => index] - The function to call on every index in the array. By default, it returns the index itself.
 * @returns {T[]} An array of length `length` with its elements being the result of the `transform` function.
 *
 * @example
 * // Create an array of numbers
 * const numbers = createArray(5, (_, index) => index * 2);
 * console.log(numbers); // [0, 2, 4, 6, 8]
 *
 * @example
 * // Create an array of strings
 * const strings = createArray(5, (_, index) => `Item ${index}`);
 * console.log(strings); // ['Item 0', 'Item 1', 'Item 2', 'Item 3', 'Item 4']
 *
 * @example
 * // Create an array of numbers using the default transform function
 * const defaultNumbers = createArray(5);
 * console.log(defaultNumbers); // [0, 1, 2, 3, 4]
 */
export const createArray = <T = number>(
  length: number,
  // @ts-ignore
  transform: Parameters<typeof Array.from<T, U>>[1] = (_, index) => index,
): T[] => Array.from({ length }, transform)

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to `end` (included).
 *
 * @default step = 1
 *
 * @param {number} start - The start of the range.
 * @param {number} [end] - The end of the range.
 * @param {number} [step=1] - The value to increment or decrement by.
 * @returns {number[]} Returns the range of numbers.
 *
 * @example
 * range(4);
 * // => [0, 1, 2, 3, 4]
 *
 * @example
 * range(-4);
 * // => [0, -1, -2, -3, -4]
 *
 * @example
 * range(1, 5);
 * // => [1, 2, 3, 4, 5]
 *
 * @example
 * range(0, 20, 5);
 * // => [0, 5, 10, 15, 20]
 */
export const range = (start: number, end?: number, step = 1): number[] => {
  const adjustedStart = end === undefined ? 0 : start
  const adjustedEnd = end === undefined ? start : end

  const length = Math.ceil((adjustedEnd - adjustedStart) / step) + 1
  return Array.from({ length }, (_, i) => adjustedStart + i * step)
}
