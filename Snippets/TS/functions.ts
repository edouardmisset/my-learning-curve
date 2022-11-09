const objectNullifier = <T = unknown>(maybeUndefinedObj: Partial<T>): T => {
  const objectEntries = Object.entries(maybeUndefinedObj).map(e => [
    e[0],
    e[1] === undefined ? null : e[1],
  ])

  return Object.fromEntries(objectEntries)
}
