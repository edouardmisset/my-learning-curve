type IterableOrNullish =
  | Record<string, unknown>
  | unknown[]
  | string
  | null
  | undefined

/**
 * Checks if a given value is empty.
 *
 * This function considers a value to be empty if it is `null`, an empty string
 * (or a string that contains only whitespace), or an object with no enumerable
 * properties.
 *
 * The function uses loose equality (`==`) to check if the value is `null` or
 * `undefined`. If the value is a string, it trims any leading or trailing
 * whitespace before checking its length. If the value is an object, it uses
 * `Object.keys()` to get an array of its own enumerable properties, and then
 * checks the length of that array.
 *
 * Note that this function does not consider other falsy values (like `false`,
 * `0`, or `NaN`) to be empty.
 *
 * @param {IterableOrNullish} val - The value to check. This can be any iterable
 * (like an object or an array), a string, or a nullish value (`null` or
 * `undefined`).
 * @returns {boolean} - Returns `true` if the value is considered empty, else
 * `false`.
 *
 * @example
 * isEmpty(null) // returns true
 * isEmpty('') // returns true
 * isEmpty('   ') // returns true
 * isEmpty({}) // returns true
 * isEmpty([]) // returns true
 * isEmpty({ a: 1 }) // returns false
 * isEmpty('Hello, world!') // returns false
 * isEmpty(false) // returns false
 * isEmpty(0) // returns false
 * isEmpty(NaN) // returns false
 */
export const isEmpty = (val: IterableOrNullish): boolean => {
  if (val == null) return true
  return typeof val === 'string'
    ? val.trim().length === 0
    : Object.keys(val).length === 0
}
