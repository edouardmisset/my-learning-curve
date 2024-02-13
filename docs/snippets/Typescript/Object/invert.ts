/**
 * Inverts the keys and values of an object.
 *
 * The original object's keys should be strings or numbers. The values of the original object will become the keys of the new object, and the keys of the original object will become the values of the new object.
 *
 * Note: If the original object has duplicate values, the resulting inverted object will override previous keys, as object keys must be unique. The key retained in the inverted object will be the one that appears last in the original object.
 *
 * This function can be useful when you need to reverse a mapping, or when you need to look up keys by their associated values.
 *
 * @template Obj - An object with string or number keys.
 * @template Key - The keys of the object T.
 * @template Return - The inverted object.
 *
 * @param {Obj} object - The original object to invert.
 * @returns {Return} The new object with inverted keys and values.
 *
 * @example
 * invert({ a: '1', b: '2' });
 * // => { '1': 'a', '2': 'b' }
 *
 * @example
 * invert({ a: '1', b: '1' });
 * // => { '1': 'b' } - 'a' is overridden by 'b'
 */
export const invert = <
  Obj extends Record<string, string | number>,
  Key extends keyof Obj,
  Return extends { [K in Obj[Key]]: Key },
>(
  object: Obj,
): Return =>
  Object.entries(object).reduce((acc, current) => {
    acc[current[1]] = current[0]
    return acc
  }, {} as Return)
