/**
 * Checks if a given value is a plain object.
 *
 * A plain object in JavaScript is an object that is created by the `Object` constructor or one that has `null` as its prototype.
 *
 * @param {unknown} val - The value to check.
 * @returns {val is Record<string, unknown>} - Returns `true` if the value is a plain object, else `false`.
 *
 * @example
 * isPlainObject({}) // returns true
 * isPlainObject({ a: 1 }) // returns true
 * isPlainObject([]) // returns false
 * isPlainObject(null) // returns false
 * isPlainObject('Hello, world!') // returns false
 */
export const isPlainObject = (val: unknown): val is Record<string, unknown> =>
  !!val &&
  typeof val === 'object' &&
  Object.getPrototypeOf(val) === Object.prototype
