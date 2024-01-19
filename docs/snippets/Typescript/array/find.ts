// Find an object in an array by a key and value.

export const createFindBy =
  <Obj extends Record<string, unknown>>(key: keyof Obj) =>
  (value: unknown) =>
  (obj: Obj): boolean => {
    if (!Object.prototype.hasOwnProperty.call(obj, key))
      throw new Error(`Key "${String(key)}" does not exist in the object.`)

    return obj[key] === value
  }

export const findById = createFindBy('id')
export const findByName = createFindBy('name')
