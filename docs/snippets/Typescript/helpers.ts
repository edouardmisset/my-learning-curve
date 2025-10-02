import { isPlainObject } from './Object/is-plain-object'
import type { DefinedValue, ObjectType, Value } from './Type/type-helpers'

export const isEmptyObject = (object: ObjectType): boolean =>
  object &&
  Object.keys(object).length === 0 &&
  Object.getPrototypeOf(object) === Object.prototype

const mergeSourceIntoTarget = <Obj extends ObjectType>(
  target: Obj,
  source: Obj,
): void => {
  for (const key of Object.keys(source)) {
    if (isPlainObject(source[key])) {
      if (target[key] == null) {
        Object.assign(target, { [key]: {} })
      }
      mergeObjects(target[key], source[key])
    } else {
      Object.assign(target, { [key]: source[key] })
    }
  }
}

export const mergeObjects = <T extends ObjectType>(
  target: T,
  ...sources: T[]
): T => {
  while (sources.length > 0) {
    const source = sources.shift()
    if (
      source !== undefined &&
      isPlainObject(target) &&
      isPlainObject(source)
    ) {
      mergeSourceIntoTarget(target, source)
    }
  }
  return target
}

export const removeNullValues = <Type>(arr: (Type | null)[]): Type[] =>
  arr.filter((val: Type | null): val is Type => val !== null)

export const removeNullishValues = <Type>(
  arr: (Type | undefined | null)[],
): Type[] =>
  arr.filter((val: Type | undefined | null): val is Type => val != null)

export const removeFalsyValues = <Type>(arr: (Type | Value)[]): Type[] =>
  arr.filter((val): val is Type =>
    typeof val === 'object' && val != null ? isEmptyObject(val) : val != null,
  )

export const shallowRemoveObjNullishValues = (object: ObjectType): ObjectType =>
  Object.fromEntries(Object.entries(object).filter(([_, v]) => v != null))

export const addRemoveItem =
  <T extends DefinedValue>(listOfThings: T[], aThing: T) =>
  (add: boolean): T[] =>
    add
      ? [...listOfThings, aThing]
      : listOfThings.filter(thing => thing !== aThing)

export const toggleItemInList = <T extends DefinedValue>(
  listOfThings: T[],
  aThing: T,
): T[] => addRemoveItem(listOfThings, aThing)(!listOfThings.includes(aThing))

/**
 * @description Deduplicates an array of objects based on a specified property.
 *
 * @template Obj - The type of objects in the array.
 * @template Key - The type of the property used for deduplication.
 *
 * @param {Obj[]} array - The array of objects to deduplicate.
 * @param {Key} key - The property used for deduplication.
 *
 * @returns {Obj[]} - An array containing unique objects based on the specified property.
 *
 * @example
 * const inputArray = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' },
 *   { id: 1, name: 'John' },
 *   { id: 3, name: 'Doe' },
 * ];
 *
 * const deduplicatedArray = deduplicateObjects(inputArray, 'id');
 * // Result: [
 * //   { id: 1, name: 'John' },
 * //   { id: 2, name: 'Jane' },
 * //   { id: 3, name: 'Doe' },
 * // ]
 */
export const deduplicateObjects = <
  Obj extends object = ObjectType,
  Key extends keyof Obj = keyof Obj,
>(
  array: Obj[],
  key: Key,
): Obj[] => [...new Map(array.map(object => [object[key], object])).values()]

export const deduplicateObjectsByAllKeys = <Obj extends object = ObjectType>(
  array: Obj[],
): Obj[] => [
  ...new Map(array.map(object => [JSON.stringify(object), object])).values(),
]

/**
 * @description Updates an object in an array in an immutable way.
 *
 * @param {Obj[]} array - The original array.
 * @param {keyof Obj} key - The key of the object to be updated.
 * @param {Partial<Obj>} newData - The new data to be updated.
 * @returns {Obj[]} - A new array with the specified object updated.
 *
 * @example
 * const inputArray = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' },
 * ];
 *
 * const updatedArray = updateObjectInArray(inputArray, 'id', { id: 1, name: 'Johnny' });
 * // Result: [
 * //   { id: 1, name: 'Johnny' },
 * //   { id: 2, name: 'Jane' },
 * // ]
 *
 * @remarks
 * This function assumes that the `key` is unique across all objects in the array. If there are multiple objects with the same `key` value, this function will update all of them, which might not be the intended behavior.
 * Lastly, the function assumes that `key` exists in `newData`. If `key` does not exist in `newData`, the function will not update any objects.
 */
export const updateObjectInArray = <Obj extends ObjectType = ObjectType>(
  array: Obj[],
  key: keyof Obj,
  newData: Partial<Obj>,
): Obj[] => {
  if (newData[key] === undefined) {
    throw new Error(`The key ${key.toString()} does not exist in newData`)
  }
  return array.map(object =>
    object[key] === newData[key] ? { ...object, ...newData } : object,
  )
}
