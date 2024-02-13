import type { Prettify } from '../Type/type-helpers'

/**
 * Omits the specified keys from an object and returns a new object with these keys.
 *
 * @template T - The type of the object.
 * @template Key - The type of the keys to omit.
 * @param {T} obj - The object to omit keys from.
 * @param {Key[]} arr - The array of keys to omit.
 * @returns {Prettify<omit<T, Key>>} A new object with the omitted keys.
 *
 * @example
 * const obj = { name: 'John', age: 30, city: 'New York' };
 * const keys = ['name', 'city'] satisfies (keyof typeof obj)[]
 * const omitted = omit(obj, keys);
 * console.log(omitted); // {  age: 30 }
 */
export const omit = <T extends Record<string, unknown>, Key extends keyof T>(
  obj: T,
  arr: Key[],
): Prettify<Omit<T, Key>> => {
  const keysToOmit = new Set(arr)
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keysToOmit.has(key as Key)),
  ) as Prettify<Omit<T, Key>>
}
