/**
 * Transforms an array of objects into an object where the keys are the values of a specified key in the objects,
 * and the values are the objects themselves. If the array is empty, returns undefined.
 *
 * @template Obj - The type of the objects in the array. Must extend Record<string, unknown>.
 * @template Key - The type of the key to use. Must be a key of T.
 * @param {Obj[]} array - The array of objects to transform.
 * @param {Key} key - The key to use for the new object.
 * @returns {undefined | Record<string, Obj>} - The transformed object, or undefined if the array is empty.
 *
 * @example
 * const array = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
 * const key = 'id';
 * const keyedObject = keyBy(array, key);
 * console.log(keyedObject); // Outputs: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }
 *
 * @example
 * const emptyArray = [];
 * const key = 'id';
 * const keyedObject = keyBy(emptyArray, key);
 * console.log(keyedObject); // Outputs: undefined
 */
export const keyBy = <
  Obj extends Record<string, unknown>,
  Key extends keyof Obj,
>(
  array: Obj[],
  key: Key,
): undefined | Record<string, Obj> =>
  array.length === 0
    ? undefined
    : (Object.fromEntries(
        array.map(value => [String(key ? value[key] : value), value]),
      ) as Record<string, Obj>)

/**
 * Transforms a collection (either an array or an object) of objects into an object where the keys are the values of a specified key in the objects,
 * and the values are the objects themselves. If the collection is empty, returns undefined.
 *
 * @template Obj - The type of the objects in the collection. Must extend Record<string, unknown>.
 * @template Key - The type of the key to use. Must be a key of T.
 * @param {Obj[] | Record<string, Obj>} collection - The collection of objects to transform.
 * @param {Key} key - The key to use for the new object.
 * @returns {undefined | Record<string, Obj>} - The transformed object, or undefined if the collection is empty.
 *
 * @example
 * const array = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
 * const key = 'id';
 * const keyedObject = collectionKeyBy(array, key);
 * console.log(keyedObject); // Outputs: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }
 *
 * @example
 * const object = { a: { id: 1, name: 'Alice' }, b: { id: 2, name: 'Bob' }, c: { id: 3, name: 'Charlie' } };
 * const key = 'id';
 * const keyedObject = collectionKeyBy(object, key);
 * console.log(keyedObject); // Outputs: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }
 *
 * @example
 * const emptyArray = [];
 * const key = 'id';
 * const keyedObject = collectionKeyBy(emptyArray, key);
 * console.log(keyedObject); // Outputs: undefined
 */
export const collectionKeyBy = <
  Obj extends Record<string, unknown>,
  Key extends keyof Obj,
>(
  collection: Obj[] | Record<string, Obj>,
  key: Key,
) =>
  Array.isArray(collection)
    ? keyBy(collection, key)
    : keyBy(Object.values(collection), key)

/**
 * @description Alias for the {@link collectionKeyBy} function.
 */
export const normalizeBy = collectionKeyBy
