/**
 * This function converts a number to a string with a specified number of decimals,
 * and removes trailing zeros after the decimal point.
 *
 * @param {number} num - The number to format.
 * @param {number} precision - The number of decimal places.
 * @returns {string} The formatted number as a string.
 *
 * @example
 * toFixedWithoutZeros(1.23000, 5)
 * // returns "1.23"
 *
 * @example
 * toFixedWithoutZeros(1.50000, 5)
 * // returns "1.5"
 *
 * @example
 * toFixedWithoutZeros(1.00000, 5)
 * // returns "1"
 */
export const toFixedWithoutZeros = (num: number, precision: number): string =>
  `${Number.parseFloat(num.toFixed(precision))}`
