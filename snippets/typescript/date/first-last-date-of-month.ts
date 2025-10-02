/**
 * Returns the first date of the month for a given date.
 *
 * @param {Date} [date=new Date()] - The date from which to extract the month. Defaults to the current date.
 * @returns {Date} The first date of the month.
 *
 * @example
 * // For a date input of '2022-12-15'
 * firstDateOfMonth(new Date('2022-12-15'))
 * // Returns '2022-12-01'
 *
 * @example
 * // When no date input is provided
 * firstDateOfMonth()
 * // Returns the first date of the current month
 */
export const firstDateOfMonth = (date = new Date()): Date =>
  new Date(date.getFullYear(), date.getMonth(), 1)

/**
 * Returns the last date of the month for a given date.
 *
 * @param {Date} [date=new Date()] - The date from which to extract the month. Defaults to the current date.
 * @returns {Date} The last date of the month.
 *
 * @example
 * // For a date input of '2022-12-15'
 * lastDateOfMonth(new Date('2022-12-15'))
 * // Returns '2022-12-31'
 *
 * @example
 * // When no date input is provided
 * lastDateOfMonth()
 * // Returns the last date of the current month
 */
export const lastDateOfMonth = (date = new Date()): Date =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0)
