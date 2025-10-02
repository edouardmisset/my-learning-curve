type ValueAndRange = {
  value: number
  minimum: number
  maximum: number
  inclusive?: boolean
}

/**
 * Clamps the provided value within the specified range.
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
}: Omit<ValueAndRange, 'inclusive'>): number =>
  Math.max(Math.min(value, maximum), minimum)

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
}: Omit<ValueAndRange, 'inclusive'>): boolean =>
  value < minimum || maximum < value

/**
 * Checks if the provided value is within the specified range (including the min
 * and the max).
 * @param {ValueAndRange} options - An object containing the maximum, minimum, and value to be checked.
 * @param {number} options.maximum - The maximum value of the range.
 * @param {number} options.minimum - The minimum value of the range.
 * @param {number} options.value - The value to be checked within the range.
 * @returns {boolean} - A boolean value indicating whether the provided value is within the specified range.
 * @see isInRange
 */
export const isInclusiveInRange = ({
  maximum,
  minimum,
  value,
}: ValueAndRange): boolean => minimum <= value && value <= maximum

/**
 * Checks if the provided value is within the specified range (excluding the min
 * and the max).
 * @param {ValueAndRange} options - An object containing the maximum, minimum, and value to be checked.
 * @param {number} options.maximum - The maximum value of the range.
 * @param {number} options.minimum - The minimum value of the range.
 * @param {number} options.value - The value to be checked against the range.
 * @returns {boolean} - A boolean value indicating whether the provided value is within the specified range.
 */
export const isExclusiveInRange = ({
  maximum,
  minimum,
  value,
}: ValueAndRange): boolean => minimum < value && value < maximum

/**
 * Checks if the provided value is within the specified range.
 * @default inclusive - true
 * @param {IsInRangeOptions} options - An object containing the maximum, minimum, and value to be checked.
 * @param {number} options.maximum - The maximum value of the range.
 * @param {number} options.minimum - The minimum value of the range.
 * @param {number} options.value - The value to be checked within the range.
 * @param {boolean} [options.inclusive=true] - A boolean value indicating whether the range is inclusive.
 * @returns {boolean} - A boolean value indicating whether the provided value is within the specified range.
 */
export const isInRange = ({
  maximum,
  minimum,
  value,
  inclusive = true,
}: ValueAndRange): boolean =>
  inclusive
    ? isInclusiveInRange({ maximum, minimum, value })
    : isExclusiveInRange({ maximum, minimum, value })
