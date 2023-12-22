import { DefinedValue, ObjectType, Value, objectKeys } from './type-helpers'

export const shallowComparison = <T extends object>(
  leftObject: T,
  rightObject: T,
): boolean => {
  const leftKeys = objectKeys(leftObject).sort()
  const rightKeys = objectKeys(rightObject).sort()

  if (leftKeys.length !== rightKeys.length) return false

  return leftKeys.every(
    (key, index) =>
      key === rightKeys[index] && leftObject[key] === rightObject[key],
  )
}
export const isEqual = shallowComparison

export const random = (min: number, max: number): number =>
  min + Math.random() * (max - min + 1)

export const randomInt = (minInt: number, maxInt: number): number =>
  minInt + Math.floor(Math.random() * (maxInt - minInt + 1))

const isObject = (item: unknown): boolean =>
  item != null && typeof item === 'object'

export const isEmptyObject = (object: ObjectType): boolean =>
  object &&
  Object.keys(object).length === 0 &&
  Object.getPrototypeOf(object) === Object.prototype

const isMergeableObject = (item: unknown): boolean =>
  isObject(item) && !Array.isArray(item)

export const mergeObjects = <T extends ObjectType>(
  target: T,
  ...sources: T[]
): T => {
  if (sources.length <= 0) return target

  const source = sources.shift()
  if (source === undefined) return target

  if (isMergeableObject(target) && isMergeableObject(source)) {
    Object.keys(source).forEach((key: string) => {
      if (isMergeableObject(source[key])) {
        if (target[key] == null) {
          Object.assign(target, { [key]: {} })
        }
        mergeObjects(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    })
  }

  return mergeObjects(target, ...sources)
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

export const isValidNumber = (num: unknown): num is number =>
  typeof num === 'number' && Number.isFinite(num)

export const validNumberWithFallback = <T = number>(
  maybeNumber: unknown,
  fallbackValue: T,
): T | number => {
  if (isValidNumber(maybeNumber)) return maybeNumber

  if (typeof maybeNumber === 'string' && isValidNumber(Number(maybeNumber)))
    return Number(maybeNumber)

  return fallbackValue
}

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

type ValueAndRange = {
  value: number
  minimum: number
  maximum: number
}

/**
 * Clamps the provided value within the specified range.
 * @param {ValueAndRange} options - An object containing the maximum, minimum, and value to be clamped.
 * @param {number} options.maximum - The maximum value of the range.
 * @param {number} options.minimum - The minimum value of the range.
 * @param {number} options.value - The value to be clamped within the range.
 * @returns {number} - The clamped value within the specified range.
 */
export const clampValueInRange = ({
  maximum,
  minimum,
  value,
}: ValueAndRange): number => Math.max(Math.min(value, maximum), minimum)

/**
 * Checks if the provided value is outside the specified limits.
 * @param {IsOutsideLimitsOptions} options - An object containing the maximum, minimum, and value to be checked.
 * @param {number} options.maximum - The maximum value of the limit.
 * @param {number} options.minimum - The minimum value of the limit.
 * @param {number} options.value - The value to be checked against the limits.
 * @returns {boolean} - A boolean value indicating whether the provided value is outside the specified limits.
 */
export const isOutsideRange = ({
  maximum,
  minimum,
  value,
}: ValueAndRange): boolean => value < minimum || maximum < value

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
