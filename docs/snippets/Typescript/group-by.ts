/**
 * Groups an array of objects by a specific key.
 *
 * @template Obj - The type of the objects in the array, which must extend `Record<string, string | number>`.
 * @template GroupedObject - The type of the object that groups the array, which must extend `Partial<{ [K in Obj[keyof Obj]]: Obj[] }>`.
 * @param {Obj[]} arr - The array of objects to group.
 * @param {keyof Obj} key - The key to group the objects by.
 * @returns {GroupedObject} - An object that groups the array by the specified key.
 */
export const groupBy = <
  Obj extends Record<string, string | number>,
  GroupedObject extends Partial<{ [K in Obj[keyof Obj]]: Obj[] }>,
>(
  arr: Obj[],
  key: keyof Obj,
): GroupedObject =>
  arr.reduce(
    (grouped, element) => ({
      ...grouped,
      [element[key]]: [...(grouped[element[key] as string] || []), element],
    }),
    {} as GroupedObject,
  )
