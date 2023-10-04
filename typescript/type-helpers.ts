export type Object_<T = any> = Record<string, T>

export type Value = string | number | boolean | null | undefined
export type DefinedValue = string | number | boolean

export type Override<T1, T2> = Omit<T1, keyof T2> & T2

export type RequireKey<T extends object, K extends keyof T = keyof T> = Omit<
	T,
	K
> &
	Required<Pick<T, K>>

export type PartialProperty<T, K extends keyof T = keyof T> = Omit<T, K> &
	Partial<Pick<T, K>>

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

export type ObjectValues<T> = T[keyof T]

export const objectKeys = <ObjectType extends Object_>(
	object: ObjectType,
): (keyof ObjectType)[] => Object.keys(object) as (keyof ObjectType)[]
