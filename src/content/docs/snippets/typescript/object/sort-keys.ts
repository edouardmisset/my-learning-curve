/**
 * Sorts the keys of an object in lexicographical order and returns a new object
 * with the sorted keys.
 *
 * It assumes the keys are strings.
 *
 *
 * @template Obj - The type of the object.
 * @param {Obj} obj - The object whose keys are to be sorted.
 * @param {boolean} [ascending=true] - Whether to sort the keys in ascending
 * order. If false, the keys are sorted in descending order.
 * @returns {Obj} A new object with the sorted keys.
 *
 * @example
 * const obj = { b: 1, a: 2, c: 3 };
 * const sortedObjAsc = sortKeys(obj);
 * console.log(sortedObjAsc); // { a: 2, b: 1, c: 3 }
 * const sortedObjDesc = sortKeys(obj, false);
 * console.log(sortedObjDesc); // { c: 3, b: 1, a: 2 }
 */
export const sortKeys = <Obj extends Record<string, unknown>>(
  obj: Obj,
  ascending = true,
): Obj =>
  Object.fromEntries(
    Object.entries(obj).sort(
      ([leftKey], [rightKey]) =>
        leftKey.localeCompare(rightKey) * (ascending ? 1 : -1),
    ),
  ) as Obj
