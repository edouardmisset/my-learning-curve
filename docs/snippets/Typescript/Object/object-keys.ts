/**
 * Returns an array of the keys of an object.
 *
 * This code snippet defines a function called `objectKeys` that takes an object as input and returns an array of its keys. It ensures that the TypeScript compiler knows the keys are of type `keyof T`, not just `string`.
 *
 * This function uses the `Object.keys` method from JavaScript, and then casts the result to `(keyof T)[]`.
 * This ensures that the TypeScript compiler knows that the keys are of type `keyof T`, not just `string`.
 *
 * @template T The type of the object. It extends `ObjectType`, which means it can be any object type.
 *
 * @param {T} object The object to get the keys from.
 *
 * @returns {(keyof T)[]} An array of the keys of the object.
 *
 * @example
 * const person = { name: 'Alice', age: 25 };
 * const keys = objectKeys(person); // ['name', 'age']
 */
export const objectKeys = <T extends Record<string, unknown>>(
  object: T,
): (keyof T)[] => Object.keys(object) as (keyof T)[]
