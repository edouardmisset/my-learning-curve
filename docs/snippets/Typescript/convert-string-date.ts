/**
 * Converts a string date from "dd/mm/yyyy hh:mm" format to "yyyy-mm-ddThh:mm" format.
 * If the input string is empty, it returns an empty string.
 * If the input string does not match the expected format, it throws an error.
 *
 * @param {string} dateString - The date string to be converted. Must be in "dd/mm/yyyy hh:mm" format.
 * @returns {string} - The converted date string in "yyyy-mm-ddThh:mm" format.
 * @throws {Error} - Throws an error if the input string does not match the expected format.
 *
 * @example
 * // returns "2022-01-01T12:00"
 * convertStringDate("01/01/2022 12:00")
 *
 * @example
 * // returns ""
 * convertStringDate("")
 *
 * @example
 * // throws Error: Invalid date format
 * convertStringDate("invalid date string")
 */
export const convertStringDate = (dateString: string): string => {
  if (dateString === '') return dateString
  if (!/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/gi.test(dateString))
    throw new Error('Invalid date format')

  const [shortDate, shortTime = ''] = dateString.split(' ')
  const [days, months, years] = shortDate.split('/')
  const [hours = 0, minutes = 0] = shortTime.split(':')
  return `${years}-${months}-${days}T${hours}:${minutes}`
}
