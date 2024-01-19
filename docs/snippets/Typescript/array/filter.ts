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

export const createBooleanFilter =
  (key?: string) =>
  (value: boolean | Record<string, unknown>): boolean => {
    if (typeof value === 'boolean') return value

    if (typeof value?.[key] === 'boolean') return value[key] === true

    throw new Error(`Invalid key (${key}) or value (${value})`)
  }
