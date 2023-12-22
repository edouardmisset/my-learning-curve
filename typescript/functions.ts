import { objectKeys, ObjectType } from './type-helpers'

/**
 * @description Performs a shallow comparison between two objects.
 *
 * This function checks if the two provided objects have the same keys and if the values for these keys are strictly equal.
 * It does not perform a deep comparison, so if the values are objects themselves, it will only check if they are the same instance, not if their content is the same.
 * 
 * @template Type A type that extends ObjectType. ObjectType is a type
 * representing any object (ObjectType<T = any> = Record<string, T>). By default, Type is ObjectType.
 *
 * @param {Type} leftObject The first object to compare.
 * @param {Type} rightObject The second object to compare.
 *
 * @returns {boolean} Returns true if the objects are **shallowly** equal, false otherwise.
 *
 * @example
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { a: 1, b: 2 };
 * const areEqual = shallowComparison(obj1, obj2); // true
 * 
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { a: 1, b: { c: 3 } };
 * const areEqual = shallowComparison(obj1, obj2); // false
 * 
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { a: 1, b: { c: 2 } };
 * const areEqual = shallowComparison(obj1, obj2); // false
 */
export const shallowComparison = <Type extends ObjectType = ObjectType>(
  leftObject: Type,
  rightObject: Type,
): boolean =>
  objectKeys(leftObject).length === objectKeys(rightObject).length &&
  objectKeys(leftObject).every(
    key =>
      Object.prototype.hasOwnProperty.call(rightObject, key) &&
      leftObject[key] === rightObject[key],
  )
