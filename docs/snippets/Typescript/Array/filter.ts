// Date
const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000

type CreateDateFilter = (
  params:
    | { startDate: Date; endDate: Date }
    | { referenceDate?: Date; durationInMilliseconds?: number }
    | { year: number }
    | undefined,
) => (date: Date) => boolean

export const createDateFilter: CreateDateFilter = (params = {}) => {
  if ('year' in params) return date => date.getFullYear() === params.year

  if ('startDate' in params && 'endDate' in params)
    return date =>
      date.getTime() >= params.startDate.getTime() &&
      date.getTime() <= params.endDate.getTime()

  const {
    referenceDate = new Date(),
    durationInMilliseconds = oneYearInMilliseconds,
  } = params

  return date =>
    date.getTime() >= referenceDate.getTime() - durationInMilliseconds
}

export const filter2018 = createDateFilter({ year: 2018 })
export const filter2023 = createDateFilter({ year: 2023 })
export const filterLast12Months = createDateFilter({
  durationInMilliseconds: oneYearInMilliseconds,
})
export const filterLast5years = createDateFilter({
  durationInMilliseconds: 5 * oneYearInMilliseconds,
})

// window.console.log(
//   '🚀 ~ filter2024:',
//   ascentList.filter(({ date }) => filter2018(date)),
// )
// window.console.log(
//   '🚀 ~ filter5Years:',
//   ascentList.filter(({ date }) => filterLast5years(date)),
// )

// Boolean

/**
 * Creates a boolean filter function.
 * The filter function expects an object and checks if the specified key's value is true.
 *
 * @template Obj - The type of the object.
 * @template Key - The type of the key of the object.
 * @param {Key} key - The key of the property to check in the value object.
 * @returns {(value: Obj) => boolean} The filter function.
 *
 * @example
 * const filterByKey = createBooleanFilter('key');
 *  return filterByKey({ key: true }); // true
 *  return filterByKey({ key: false }); // false
 *  return filterByKey({ key: 'string' }); // false
 */
export const createBooleanFilter =
  <Obj extends Record<string, unknown>, Key extends keyof Obj>(key: Key) =>
  (value: Obj): boolean =>
    typeof value?.[key] === 'boolean' ? value[key] === true : false
