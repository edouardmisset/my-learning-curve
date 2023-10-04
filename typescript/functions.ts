const objectNullifier = <T = unknown>(maybeUndefinedObj: Partial<T>): T => {
  const objectEntries = Object.entries(maybeUndefinedObj).map(e => [
    e[0],
    e[1] === undefined ? null : e[1],
  ])

  return Object.fromEntries(objectEntries)
}

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
