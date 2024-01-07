export type ObjectType<T = any> = Record<string, T>

export type Value = string | number | boolean | null | undefined
export type DefinedValue = string | number | boolean

/**
 * Constructs a type by overriding some properties of an original type with properties from another type.
 *
 * This type helper uses the `Omit` and `keyof` utility types from TypeScript.
 * It first omits the keys of the `OverrideType` from the `OriginalType`, and then combines the result with the `OverrideType`.
 * This means that properties in the `OverrideType` will override properties in the `OriginalType`.
 *
 * @template OriginalType The original type.
 * @template OverrideType The type that should override properties in the original type.
 *
 * @example
 * type Person = {
 *   name: string;
 *   age: number;
 * };
 *
 * type Employee = {
 *   age: string;
 *   company: string;
 * };
 *
 * type EmployeePerson = Override<Person, Employee>;
 * // Equivalent to: { name: string; age: string; company: string; }
 */
export type Override<OriginalType, OverrideType> = Omit<
  OriginalType,
  keyof OverrideType
> &
  OverrideType

/**
 * Constructs a type by making some properties of an existing type required.
 *
 * This type helper uses the `Omit`, `Pick`, and `Required` utility types from TypeScript.
 * It first omits the specified keys from the original type, and then makes those keys required.
 *
 * @template T The original type.
 * @template Key The keys of the properties that should be made required. It extends `keyof T`, which means it can be any key of `T`. The default value is `keyof T`, which means all keys of `T`.
 *
 * @example
 * type Person = {
 *   name: string;
 *   age?: number;
 * };
 *
 * type PersonWithRequiredAge = RequireKey<Person, 'age'>;
 * // Equivalent to: { name: string; age: number; }
 */
export type RequireKey<T extends object, Key extends keyof T = keyof T> = Omit<
  T,
  Key
> &
  Required<Pick<T, Key>>

/**
 * Constructs a type by making some properties of an existing type optional.
 *
 * This type helper uses the `Omit` and `Partial` utility types from TypeScript.
 * It first omits the specified keys from the original type, and then makes those keys optional.
 *
 * @template T The original type.
 * @template K The keys of the properties that should be made optional. It extends `keyof T`, which means it can be any key of `T`. The default value is `keyof T`, which means all keys of `T`.
 *
 * @example
 * type Person = {
 *   name: string;
 *   age: number;
 * };
 *
 * type PersonWithOptionalAge = PartialProperty<Person, 'age'>;
 * // Equivalent to: { name: string; age?: number; }
 */
export type PartialProperty<
  T extends object,
  K extends keyof T = keyof T,
> = Omit<T, K> & Partial<Pick<T, K>>

/**
 * Constructs a type by excluding `null` from the possible values of some properties of an existing type.
 *
 * This type helper uses the `Exclude` utility type from TypeScript.
 * It iterates over the keys of the original type, and for each key, it creates a new type that excludes `null` from the possible values of that property.
 *
 * @template T The original type. It extends `object`, which means it can be any object type.
 * @template K The keys of the properties that should exclude `null`. It extends `keyof T`, which means it can be any key of `T`. The default value is `keyof T`, which means all keys of `T`.
 *
 * @example
 * type Person = {
 *   name: string | null;
 *   age: number | null;
 * };
 *
 * type PersonWithoutNull = NotNullProperty<Person>;
 * // Equivalent to: { name: string; age: number; }
 */
export type NotNullProperty<T extends object, K extends keyof T = keyof T> = {
  [P in K]: Exclude<T[K], null>
}

/**
 * A TypeScript type alias called `Prettify`.
 * It takes a type as its argument and returns a new type that has the same properties as the original type,
 * but the properties are not intersected. This means that the new type is easier to read and understand.
 */
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

/**
 * Constructs a type consisting of the values of the properties of an existing type.
 *
 * This type helper uses the `keyof` and indexed access (`[]`) types from TypeScript.
 * It creates a new type that includes the types of all values of the properties of the original type.
 *
 * @template T The original type.
 *
 * @example
 * type Person = {
 *   name: string;
 *   age: number;
 * };
 *
 * type PersonValues = ObjectValues<Person>;
 * // Equivalent to: string | number
 */
export type ObjectValues<T> = T[keyof T]

// This code snippet defines a function called `objectKeys` that takes an object as input and returns an array of its keys. It ensures that the TypeScript compiler knows the keys are of type `keyof T`, not just `string`.
/**
 * Returns an array of the keys of an object.
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
export const objectKeys = <T extends ObjectType>(object: T): (keyof T)[] =>
  Object.keys(object) as (keyof T)[]
