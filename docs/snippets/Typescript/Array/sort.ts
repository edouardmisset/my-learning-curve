// string

export const createStringSorter =
  <Obj extends Record<string, unknown>>(key?: keyof Obj, ascending = true) =>
  (left: Obj | string, right: Obj | string): number => {
    const leftStr =
      typeof left === 'string' ? left : (left[key as keyof Obj] as string)
    const rightStr =
      typeof right === 'string' ? right : (right[key as keyof Obj] as string)

    return leftStr.localeCompare(rightStr) * (ascending ? 1 : -1)
  }

// window.console.log(
//   '🚀 ~ sortStrings:',
//   ascentList.sort(sortStringsBuilder('routeName')),
// )

// Number

export const createNumberSorter =
  <Obj extends Record<string, unknown>>(key?: keyof Obj, ascending = true) =>
  (left: Obj | number, right: Obj | number): number => {
    const leftNum =
      typeof left === 'number' ? left : (left[key as keyof Obj] as number)
    const rightNum =
      typeof right === 'number' ? right : (right[key as keyof Obj] as number)

    if (Number.isNaN(leftNum)) return 1
    if (Number.isNaN(rightNum)) return -1

    return (leftNum - rightNum) * (ascending ? 1 : -1)
  }

// window.console.log(
//   '🚀 ~ sortNumber:',
//   ascentList.sort(sortNumberBuilder('numberOfTries')),
// )

// Date

export const createDateSorter =
  <Obj extends Record<string, unknown>>(key?: keyof Obj, ascending = true) =>
  (left: Obj | Date, right: Obj | Date): number => {
    const leftDate =
      left instanceof Date ? left : (left[key as keyof Obj] as Date)
    const rightDate =
      right instanceof Date ? right : (right[key as keyof Obj] as Date)

    if (Number.isNaN(leftDate.getTime())) return 1
    if (Number.isNaN(rightDate.getTime())) return -1
    return (leftDate.getTime() - rightDate.getTime()) * (ascending ? 1 : -1)
  }

// window.console.log('🚀 ~ sortDate:', ascentList.sort(sortDateBuilder('date')))
