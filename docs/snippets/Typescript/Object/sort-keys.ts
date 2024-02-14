/**
 * Sorts the keys of an object in lexicographical order and returns a new object
 * with the sorted keys.
 *
 * It assumes the keys are strings.
 *
 * @template Obj - The type of the object.
 * @param {Obj} obj - The object whose keys are to be sorted.
 * @returns {Obj} A new object with the sorted keys.
 *
 * @example
 * const obj = { b: 1, a: 2, c: 3 };
 * const sortedObj = sortKeys(obj);
 * console.log(sortedObj); // { a: 2, b: 1, c: 3 }
 */
export const sortKeys = <Obj extends Record<string, unknown>>(obj: Obj): Obj =>
  Object.fromEntries(
    Object.entries(obj).sort(([leftKey], [rightKey]) =>
      leftKey.localeCompare(rightKey),
    ),
  ) as Obj
