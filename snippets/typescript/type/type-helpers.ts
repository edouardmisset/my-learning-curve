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
 * @template Obj The original type.
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
export type RequireKey<
  Obj extends ObjectType<unknown>,
  Key extends keyof Obj = keyof Obj,
> = Omit<Obj, Key> & Required<Pick<Obj, Key>>

/**
 * Constructs a type by making some properties of an existing type optional.
 *
 * This type helper uses the `Omit` and `Partial` utility types from TypeScript.
 * It first omits the specified keys from the original type, and then makes those keys optional.
 *
 * @template Obj The original type.
 * @template Key The keys of the properties that should be made optional. It extends `keyof T`, which means it can be any key of `T`. The default value is `keyof T`, which means all keys of `T`.
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
  Obj extends ObjectType<unknown>,
  Key extends keyof Obj = keyof Obj,
> = Omit<Obj, Key> & Partial<Pick<Obj, Key>>

/**
 * Constructs a type by excluding `null` from the possible values of some properties of an existing type.
 *
 * This type helper uses the `Exclude` utility type from TypeScript.
 * It iterates over the keys of the original type, and for each key, it creates a new type that excludes `null` from the possible values of that property.
 *
 * @template Obj The original type. It extends `object`, which means it can be any object type.
 * @template Key The keys of the properties that should exclude `null`. It extends `keyof T`, which means it can be any key of `T`. The default value is `keyof T`, which means all keys of `T`.
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
export type NotNullProperty<
  Obj extends ObjectType<unknown>,
  Key extends keyof Obj = keyof Obj,
> = {
  [P in Key]: Exclude<Obj[Key], null>
}

/**
 * A TypeScript type alias called `Prettify`.
 * It takes a type as its argument and returns a new type that has the same properties as the original type,
 * but the properties are not intersected. This means that the new type is easier to read and understand.
 */
export type Prettify<Obj> = {
  [Key in keyof Obj]: Obj[Key]
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {}

/**
 * Constructs a type consisting of the values of the properties of an existing type.
 *
 * This type helper uses the `keyof` and indexed access (`[]`) types from TypeScript.
 * It creates a new type that includes the types of all values of the properties of the original type.
 *
 * @template Obj The original type.
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
export type ObjectValues<Obj> = Obj[keyof Obj]

/**
 * Represents a type that can be either a specific string (or union of strings) `T` or any string.
 *
 * @template S - A string literal type.
 * @typedef {S | Omit<string, S>} LooseAutoComplete
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
export type LooseAutoComplete<S extends string> = S | Omit<string, S>

/**
 * Constructs a type consisting of the values of the properties of an existing type.
 *
 * This type helper is similar to `ObjectValues`, but it works with generic types.
 * It extracts the values of the properties of the generic type `T`.
 * If `T` is a record type, it returns the union of the values of the properties of `T`.
 * If `T` is not a record type, it returns `never`.
 *
 * @template T The generic type.
 * @example
 * ```ts
 * const person = {
 *  name: Adam;
 *  age: 21;
 * };
 * type PersonValues = GetObjectValues<person>;
 * // Equivalent to: 'Adam' | 21
 */
export type GetObjectValues<T> = T extends Record<string, infer V> ? V : never
