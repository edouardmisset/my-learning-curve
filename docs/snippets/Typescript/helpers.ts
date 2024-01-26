import { DefinedValue, ObjectType, Value } from './Type/type-helpers'

const isObject = (item: unknown): boolean =>
  item != null && typeof item === 'object'

export const isEmptyObject = (object: ObjectType): boolean =>
  object &&
  Object.keys(object).length === 0 &&
  Object.getPrototypeOf(object) === Object.prototype

const isMergeableObject = (item: unknown): boolean =>
  isObject(item) && !Array.isArray(item)

function mergeSourceIntoTarget<T extends ObjectType>(
  target: T,
  source: T,
): void {
  for (const key of Object.keys(source)) {
    if (isMergeableObject(source[key])) {
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
      isMergeableObject(target) &&
      isMergeableObject(source)
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

/**
 * @description Takes a string or a Date object. If it's a string, it assumes UTC string format (YYYY-MM-DDTHH:MM)
 * @param {(string | Date)} date
 * @returns {Date}  {Date}
 */
export const datification = (date: string | Date): Date =>
  typeof date === 'string' ? new Date(date) : date

/**
 * Capitalizes the first letter of a word.
 * @param {string} word - The word to be capitalized.
 * @returns {string} - The word with the first letter capitalized.
 */
export const capitalize = (word: string): string =>
  word === '' ? '' : word.charAt(0).toUpperCase() + word.slice(1)

/**
 * Checks if a string is either empty, null, or undefined.
 * @param {undefined | null | string} s - The string to be checked.
 * @returns {boolean} - A boolean value indicating whether the string is empty, null, or undefined.
 */
export const isEmptyStringOrNullish = (s: undefined | null | string): boolean =>
  s == null || s.trim() === ''

export const addOrRemoveFromList =
  <T extends DefinedValue>(listOfThings: T[], aThing: T) =>
  (add: boolean): T[] =>
    add
      ? [...listOfThings, aThing]
      : listOfThings.filter(thing => thing !== aThing)

export const addWhenAbsentOtherwiseRemove = <T extends DefinedValue>(
  listOfThings: T[],
  aThing: T,
): T[] =>
  addOrRemoveFromList(listOfThings, aThing)(!listOfThings.includes(aThing))

export const stringIncludesCaseInsensitive = (
  string: string,
  searchString: string,
): boolean => string.toLowerCase().includes(searchString.toLowerCase())

/**
 * @description Deduplicates an array of objects based on a specified property.
 *
 * @template TObject - The type of objects in the array.
 * @template Key - The type of the property used for deduplication.
 *
 * @param {T[]} array - The array of objects to deduplicate.
 * @param {Key} key - The property used for deduplication.
 *
 * @returns {T[]} - An array containing unique objects based on the specified property.
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
  T extends object = ObjectType,
  Key extends keyof T = keyof T,
>(
  array: T[],
  key: Key,
): T[] => [...new Map(array.map(object => [object[key], object])).values()]

export const deduplicateObjectsByAllKeys = <T extends object = ObjectType>(
  array: T[],
): T[] => [
  ...new Map(array.map(object => [JSON.stringify(object), object])).values(),
]

/**
 * @description Updates an object in an array in an immutable way.
 *
 * @param {T[]} array - The original array.
 * @param {keyof T} key - The key of the object to be updated.
 * @param {Partial<T>} newData - The new data to be updated.
 * @returns {T[]} - A new array with the specified object updated.
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
export const updateObjectInArray = <T extends ObjectType = ObjectType>(
  array: T[],
  key: keyof T,
  newData: Partial<T>,
): T[] => {
  if (newData[key] === undefined)
    throw new Error(`The key ${key.toString()} does not exist in newData`)
  return array.map(object =>
    object[key] === newData[key] ? { ...object, ...newData } : object,
  )
}
