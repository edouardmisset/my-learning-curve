type Scale = (params: {
  inMinimum: number
  inMaximum: number
  outMinimum?: number
  outMaximum?: number
  value: number
}) => number

/**
 * Scales a value from one range to another.
 *
 * @param {Object} params - The scaling parameters.
 * @param {number} params.inMinimum - The lower bound of the original range.
 * @param {number} params.inMaximum - The upper bound of the original range.
 * @param {number} [params.outMinimum=0] - The lower bound of the target range.
 * @param {number} [params.outMaximum=1] - The upper bound of the target range.
 * @param {number} params.value - The value to scale.
 * @returns {number} The scaled value.
 * @throws {Error} Will throw an error if inMinimum equals inMaximum (to prevent division by zero).
 *
 * @example
 * // Scale a value from [0, 10] to [0, 100]
 * scale({ inMinimum: 0, inMaximum: 10, outMinimum: 0, outMaximum: 100, value: 5 });
 * // returns 50
 *
 * @example
 * // Scale a value from [0, 100] to the default range [0, 1]
 * const normalizedValue = scale({ inMinimum: 0, inMaximum: 100, value: 50 });
 * console.log(normalizedValue); // Output: 0.5
 */
export const scale: Scale = params => {
  const { inMinimum, inMaximum, outMinimum = 0, outMaximum = 1, value } = params
  if (inMinimum === inMaximum)
    throw new Error(
      `inMinimum (${inMinimum}) cannot equal inMaximum (${inMaximum}) as this leads to a division by 0.`,
    )
  return (
    ((value - inMinimum) * (outMaximum - outMinimum)) /
      (inMaximum - inMinimum) +
    outMinimum
  )
}
