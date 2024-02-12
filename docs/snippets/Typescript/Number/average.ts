/**
 * Calculates the average of the given numbers.
 *
 * @param {number[] | number} num - The numbers to calculate the average of.
 * @throws {Error} When no arguments are provided.
 * @returns {number} The average of the given numbers.
 */
export const average = (...num: (number[] | number)[]): number => {
  const numbers = Array.isArray(num[0])
    ? (num[0] as number[])
    : (num as number[])

  if (numbers.length === 0)
    throw new Error('Cannot calculate average of an empty array')

  return (
    numbers.reduce((accumulator, value) => accumulator + value, 0) /
    numbers.length
  )
}

export const mean = average
