type UnknownObject = Record<string, unknown>

/**
 * Deeply compares two values to determine if they are structurally equivalent.
 *
 * This function uses several strategies to compare values:
 * - If the values are strictly equal (`===`), it returns `true`.
 * - If both values are instances of `Date`, it compares their time values.
 * - If either value is falsy (i.e., `null`, `undefined`, `0`, `NaN`, `""`, or `false`), or if both values are not of the type 'object', it returns the result of the strict equality comparison between the values.
 * - If both values are objects and they do not share the same prototype, it returns `false`.
 * - If both values are objects with the same prototype, it checks if they have the same number of keys. If they don't, it returns `false`. If they do, it recursively calls `equals` on each pair of corresponding values. If all pairs of values are deeply equal, it returns `true`. If any pair of values is not deeply equal, it returns `false`.
 *
 * @template T - The type of the values to compare.
 * @param {T} left - The first value to compare.
 * @param {T} right - The second value to compare.
 * @returns {boolean} - Returns `true` if the values are equivalent, else `false`.
 *
 * @example
 * equals({ a: 1, b: 2 }, { a: 1, b: 2 }) // returns true
 * equals({ a: 1, b: 2 }, { a: 1, b: 3 }) // returns false
 * equals('a', 'a') // returns true
 * equals('a', 'b') // returns false
 * equals(new Date('2021-01-01'), new Date('2021-01-01')) // returns true
 * equals(new Date('2021-01-01'), new Date('2022-01-01')) // returns false
 */
const equals = <T>(left: T, right: T): boolean => {
  if (left === right) return true

  if (left instanceof Date && right instanceof Date)
    return left.getTime() === right.getTime()

  if (
    !left ||
    !right ||
    (typeof left !== 'object' && typeof right !== 'object')
  )
    return left === right

  if (
    typeof left === 'object' &&
    typeof right === 'object' &&
    left !== null &&
    right !== null &&
    Object.getPrototypeOf(left) !== Object.getPrototypeOf(right)
  )
    return false

  const leftObject = left as UnknownObject
  const rightObject = right as UnknownObject

  const leftKeys = Object.keys(leftObject)
  if (leftKeys.length !== Object.keys(rightObject).length) return false

  return leftKeys.every(key => equals(leftObject[key], rightObject[key]))
}
