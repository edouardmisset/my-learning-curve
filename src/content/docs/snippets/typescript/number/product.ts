/**
 * This function calculates the product of all numbers provided as arguments.
 * It accepts either a single array of numbers or multiple number arguments.
 *
 * @param {...(number[] | number)[]} num - The numbers to multiply.
 * @returns {number} The product of all numbers.
 *
 * @example
 * product(1, 2, 3, 4)
 * // returns 24
 *
 * @example
 * product([1, 2, 3, 4])
 * // returns 24
 */
export const product = (...num: (number | number[])[]): number =>
  (Array.isArray(num[0]) ? num[0] : (num as number[])).reduce(
    (acc, val) => acc * val,
    1,
  )
