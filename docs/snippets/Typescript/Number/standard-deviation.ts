/**
 * This function calculates the standard deviation of a set of numbers.
 * The standard deviation is a measure of the amount of variation or dispersion
 * of a set of values.
 * A low standard deviation means that the values tend to be close to the mean
 * (also called the expected value) of the set,
 * while a high standard deviation means that the values are spread out over a
 * wider range.
 *
 * It can calculate the standard deviation for a population or a sample.
 * - Population: When the data set includes all of the data you are interested
 *   in.
 * - Sample: When the data set only includes part of the data you are interested
 *   in.
 *
 * @param {number[]} arr - The array of numbers.
 * @param {boolean} [usePopulation=false] - Whether to calculate the standard
 * deviation for a population or a sample.
 * @returns {number} The standard deviation of the numbers.
 *
 * @example
 * standardDeviation([1, 2, 3, 4])
 * // returns approximately 1.291
 *
 * @example
 * standardDeviation([1, 2, 3, 4], true)
 * // returns approximately 1.118
 */
export const standardDeviation = (
  arr: number[],
  usePopulation = false,
): number => {
  const size = arr.length
  const mean = arr.reduce((acc, val) => acc + val, 0) / size
  const variance =
    arr.reduce((acc, val) => acc + (val - mean) ** 2, 0) /
    (size - (usePopulation ? 0 : 1))
  return Math.sqrt(variance)
}

/**
 * @description Alias for the {@link standardDeviation} function.
 */
export const variance = standardDeviation
