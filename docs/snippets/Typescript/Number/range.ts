
type ValueAndRange = {
  value: number
  minimum: number
  maximum: number
}

/**
 * Clamps the provided value within the specified range (inclusive).
 * @param {ValueAndRange} options - An object containing the maximum, minimum, and value to be clamped.
 * @param {number} options.maximum - The maximum value of the range.
 * @param {number} options.minimum - The minimum value of the range.
 * @param {number} options.value - The value to be clamped within the range.
 * @returns {number} - The clamped value within the specified range.
 */
export const clampValueInRange = ({
  maximum,
  minimum,
  value,
}: ValueAndRange): number => Math.max(Math.min(value, maximum), minimum)

/**
 * Checks if the provided value is strictly outside the specified limits.
 * @param {IsOutsideLimitsOptions} options - An object containing the maximum, minimum, and value to be checked.
 * @param {number} options.maximum - The maximum value of the limit.
 * @param {number} options.minimum - The minimum value of the limit.
 * @param {number} options.value - The value to be checked against the limits.
 * @returns {boolean} - A boolean value indicating whether the provided value is outside the specified limits.
 */
export const isOutsideRange = ({
  maximum,
  minimum,
  value,
}: ValueAndRange): boolean => value < minimum || maximum < value
