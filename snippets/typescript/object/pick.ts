import type { Prettify } from '../type/type-helpers'

/**
 * Picks the specified keys from an object and returns a new object with these keys.
 *
 * @template Obj - The type of the object.
 * @template Key - The type of the keys to pick.
 * @param {Obj} obj - The object to pick keys from.
 * @param {Key[]} keys - The array of keys to pick.
 * @returns {Prettify<Pick<Obj, Key>>} A new object with the picked keys.
 *
 * @example
 * const obj = { name: 'John', age: 30, city: 'New York' };
 * const keys = ['name', 'city'] satisfies (keyof typeof obj)[];
 * const picked = pick(obj, keys);
 * console.log(picked); // { name: 'John', city: 'New York' }
 */
export const pick = <
  Obj extends Record<string, unknown>,
  Key extends keyof Obj,
>(
  obj: Obj,
  keys: Key[],
): Prettify<Pick<Obj, Key>> =>
  Object.fromEntries(keys.map(key => [key, obj[key]])) as Prettify<
    Pick<Obj, Key>
  >
