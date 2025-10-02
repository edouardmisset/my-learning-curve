/**
 * Generates a random number between the specified minimum and maximum values (inclusive).
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns A random number between the minimum and maximum values.
 */
export const random = (min: number, max: number): number =>
  min + Math.random() * (max - min + 1)

/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 * @param minInt The minimum integer value.
 * @param maxInt The maximum integer value.
 * @returns A random integer between the minimum and maximum values.
 */
export const randomInt = (minInt: number, maxInt: number): number =>
  minInt + Math.floor(Math.random() * (maxInt - minInt + 1))
