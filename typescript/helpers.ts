import { DefinedValue, Object_, Value } from './type-helpers'

export const shallowComparison = (
  object1: Object_,
  object2: Object_,
): boolean =>
  Object.keys(object1).length === Object.keys(object2).length &&
  (Object.keys(object1) as (keyof typeof object1)[]).every(
    key =>
      Object.prototype.hasOwnProperty.call(object2, key) &&
      object1[key] === object2[key],
  )

export const random = (min: number, max: number): number =>
  min + Math.random() * (max - min + 1)

export const randomInt = (min: number, max: number): number =>
  min + Math.floor(Math.random() * (max - min + 1))

const isObject = (item: unknown): boolean =>
  item != null && typeof item === 'object'

export const isEmptyObject = (object: Object_): boolean =>
  object &&
  Object.keys(object).length === 0 &&
  Object.getPrototypeOf(object) === Object.prototype

const isMergeableObject = (item: unknown): boolean =>
  isObject(item) && !Array.isArray(item)

export const mergeObjects = <T extends Object_>(
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
  num != null && typeof num === 'number' && Number.isFinite(num)

export const validNumberWithFallback = <T = number>(
  maybeNumber: unknown,
  fallbackValue: T,
): T | number => {
  if (isValidNumber(maybeNumber)) return maybeNumber

  if (typeof maybeNumber === 'string' && isValidNumber(Number(maybeNumber)))
    return Number(maybeNumber)

  return fallbackValue
}

export const shallowRemoveObjNullishValues = (object: Object_): Object_ =>
  Object.fromEntries(Object.entries(object).filter(([_, v]) => v != null))

/**
 * @description Takes a string or a Date object. If it's a string, it assumes UTC string format (YYYY-MM-DDTHH:MM)
 * @param {(string | Date)} date
 * @returns {Date}  {Date}
 */
export const datification = (date: string | Date): Date =>
  typeof date === 'string' ? new Date(date) : date

export const capitalize = (word: string): string =>
  word[0].toUpperCase() + word.slice(1)

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