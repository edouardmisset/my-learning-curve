/**
 * Groups an array of objects by a specific key.
 *
 * @template Obj - The type of the objects in the array, which must extend `Record<string, unknown>`.
 * @template GroupedObject - The type of the object that groups the array, which must extend `Partial<{ [K in Obj[keyof Obj]]: Obj[] }>`.
 * @param {Obj[]} arr - The array of objects to group.
 * @param {keyof Obj} key - The key to group the objects by.
 * @returns {GroupedObject} - An object that groups the array by the specified key.
 */
export const groupBy = <
  Obj extends Record<string, unknown>,
  Key extends keyof Obj,
  Value extends Obj[Key] & (string | number),
  GroupedObject extends Partial<{ [K in Value]: Obj[] }>,
>(
  arr: Obj[],
  key: Key,
): GroupedObject =>
  arr.reduce((grouped, element) => {
    const groupKey = element[key] as Value

    return Object.assign(grouped, {
      [groupKey]: [...(grouped[groupKey] ?? []), element],
    })
  }, {} as GroupedObject)
