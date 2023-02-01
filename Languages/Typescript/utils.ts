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
  
export type ObjectValues<T> = T[keyof T]

export const objectKeys = <ObjectType extends Object_>(
  object: ObjectType,
): (keyof ObjectType)[] => Object.keys(object) as (keyof ObjectType)[]
