// biome-ignore lint/suspicious/noExplicitAny: ...because it's a type helper file
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
  // eslint-disable-next-line @typescript-eslint/ban-types
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

/**
 * Represents a type that can be either a specific string (or union of strings) `T` or any string.
 *
 * @template T - A string literal type.
 * @typedef {T | Omit<string, T>} LooseAutoComplete
 *
 * @example
 * // Define a type that can be either "red" or any string excluding "red"
 * type RedOrOther = LooseAutoComplete<"red">;
 *
 * // This is valid because "red" is one of the allowed values
 * let example3: RedOrOther = "red";
 *
 * // This is also valid because any string excluding "red" is allowed
 * let example4: RedOrOther = "blue";
 */
export type LooseAutoComplete<T extends string> = T | Omit<string, T>
