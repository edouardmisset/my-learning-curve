/**
 * Checks if a given value is an object.
 *
 * **Note**: `Date`s, `Array`s and other data structures are also considered objects.
 *
 * @param {unknown} val - The value to check.
 * @returns {val is Record<string, unknown>} - Returns `true` if the value is an object, else `false`.
 *
 * @example
 * isObject({}) // returns true
 * isObject({ a: 1 }) // returns true
 * isObject([]) // returns true
 * isObject('Hello, world!') // returns false
 */
export const isObject = (val: unknown): val is Record<string, unknown> =>
  !!val && typeof val === 'object'
