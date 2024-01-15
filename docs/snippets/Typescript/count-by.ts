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
