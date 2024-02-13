import type { Prettify } from '../Type/type-helpers'

/**
 * Picks the specified keys from an object and returns a new object with these keys.
 *
 * @template T - The type of the object.
 * @template Key - The type of the keys to pick.
 * @param {T} obj - The object to pick keys from.
 * @param {Key[]} arr - The array of keys to pick.
 * @returns {Prettify<Pick<T, Key>>} A new object with the picked keys.
 *
 * @example
 * const obj = { name: 'John', age: 30, city: 'New York' };
 * const keys = ['name', 'city'] satisfies (keyof typeof obj)[];
 * const picked = pick(obj, keys);
 * console.log(picked); // { name: 'John', city: 'New York' }
 */
export const pick = <T extends Record<string, unknown>, Key extends keyof T>(
  obj: T,
  arr: Key[],
): Prettify<Pick<T, Key>> => {
  const keysToPick = new Set(arr)
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keysToPick.has(key as Key)),
  ) as Prettify<Pick<T, Key>>
}

// Alternative

// export const pickReduce = <T extends Record<string, unknown>, Key extends keyof T>(
//   object: T,
//   keys: Key[],
// ): Prettify<Pick<T, Key>> =>
//   keys.reduce(
//     (obj, key) => {
//       if (Object.prototype.hasOwnProperty.call(object, key)) {
//         obj[key] = object[key]
//       }
//       return obj
//     },
//     {} as Prettify<Pick<T, Key>>,
//   )
