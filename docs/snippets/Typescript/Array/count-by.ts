/**
 * Counts the number of elements in an array that satisfy a condition.
 *
 * @param {T[]} arr - The array to process.
 * @param {(arg: T) => boolean} checkFunction - The function to test each element of the array.
 * This function should accept a single argument of type T (the type of elements in the array)
 * and return a boolean.
 *
 * @returns {number} The number of elements that satisfy the condition.
 *
 * @template T The type of elements in the array.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const isEven = (num) => num % 2 === 0;
 * const count = countBy(arr, isEven); // 2
 */
export const countBy = <T>(arr: T[], checkFunction: (arg: T) => boolean) =>
  arr.reduce((count, value) => (checkFunction(value) ? count + 1 : count), 0)

/**
 * Calculates the frequency of each unique element in an array.
 * @template T - The type of elements in the array, which extends string or number.
 * @param {T[]} arr - An array of elements of type T.
 * @returns {Record<T, number>} - An object where the keys are the unique elements from the input array and the values are their corresponding frequencies.
 *
 * @example
 * frequency(['apple', 'banana', 'apple', 'cherry'])
 * // returns { 'apple': 2, 'banana': 1, 'cherry': 1 }
 *
 * @example
 * frequency([1, 2, 1, 3])
 * // returns { '1': 2, '2': 1, '3': 1 }
 */
export const frequency = <const T extends string | number>(arr: T[]) =>
  arr.reduce(
    (acc, val) => {
      acc[val] = (acc[val] ?? 0) + 1
      return acc
    },
    {} as Record<T, number>,
  )
