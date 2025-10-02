/**
 * Sorts the values of an object and returns a new object with the sorted values.
 *
 * @template Obj - The type of the object.
 * @param {Obj} obj - The object whose values are to be sorted.
 * @param {boolean} [ascending=true] - Whether to sort the values in ascending order. If false, the values are sorted in descending order.
 * @returns {Obj} A new object with the sorted values.
 *
 * @example
 * const objStr = { a: 'z', b: 'y', c: 'x' };
 * const sortedObjStrAsc = sortValues(objStr);
 * console.log(sortedObjStrAsc); // { c: 'x', b: 'y', a: 'z' }
 * const sortedObjStrDesc = sortValues(objStr, false);
 * console.log(sortedObjStrDesc); // { a: 'z', b: 'y', c: 'x' }
 *
 * @example
 * const objNum = { a: 3, b: 2, c: 1 };
 * const sortedObjNumAsc = sortValues(objNum);
 * console.log(sortedObjNumAsc); // { c: 1, b: 2, a: 3 }
 * const sortedObjNumDesc = sortValues(objNum, false);
 * console.log(sortedObjNumDesc); // { a: 3, b: 2, c: 1 }
 */
export const sortValues = <Obj extends Record<string, number | string>>(
  obj: Obj,
  ascending = true,
): Obj =>
  Object.fromEntries(
    Object.entries(obj).sort(
      ([, leftValue], [, rightValue]) =>
        (typeof leftValue === 'string' && typeof rightValue === 'string'
          ? leftValue.localeCompare(rightValue)
          : leftValue > rightValue
            ? 1
            : -1) * (ascending ? 1 : -1),
    ),
  ) as Obj
