/**
 * Checks if a value is a valid number.
 * @param num - The value to check.
 * @returns A boolean indicating if the value is a valid number.
 */
export const isValidNumber = (num: unknown): num is number =>
  typeof num === 'number' && Number.isFinite(num)

/**
 * Converts a value to a valid number or returns a fallback value.
 * @param maybeNumber - The value to convert.
 * @param fallbackValue - The fallback value to return if the conversion fails.
 * @returns The converted value if it is a valid number, otherwise the fallback value.
 */
export const validNumberWithFallback = <T = number>(
  maybeNumber: unknown,
  fallbackValue: T,
): T | number => {
  if (isValidNumber(maybeNumber)) return maybeNumber

  if (typeof maybeNumber === 'string' && isValidNumber(Number(maybeNumber)))
    return Number(maybeNumber)

  return fallbackValue
}