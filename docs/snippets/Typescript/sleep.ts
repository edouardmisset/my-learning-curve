/**
 * Pauses the execution of an asynchronous function for a specified time.
 *
 * @param {number} time - The amount of time to sleep in milliseconds.
 * @returns {Promise<void>} - A Promise that resolves after the specified time.
 * @throws {Error} - Throws an error if the time is a negative number.
 *
 * @example
 * // pauses for 1 second
 * await sleep(1000);
 *
 * @example
 * // throws Error: Invalid time value. Time must be a non-negative number.
 * await sleep(-1000);
 */
export const sleep = (time: number): Promise<void> => {
  if (time < 0)
    throw new Error('Invalid time value. Time must be a non-negative number.')

  return new Promise<void>(resolve => setTimeout(resolve, time))
}
