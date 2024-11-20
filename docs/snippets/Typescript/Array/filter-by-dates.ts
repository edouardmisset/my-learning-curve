type Milliseconds = number
type Integer = number

type StartAndEndDate = {
  startDate: Date
  endDate: Date
}

type Year = {
  year: Integer
}

type DurationAndRefDate = {
  referenceDate: Date
  duration: Milliseconds
}

type FilterOptions = Year | StartAndEndDate | DurationAndRefDate

const isYearOption = (option: FilterOptions): option is Year => 'year' in option

const isDateRangeOption = (option: FilterOptions): option is StartAndEndDate =>
  'startDate' in option && 'endDate' in option

const isReferenceDateOption = (
  option: FilterOptions,
): option is DurationAndRefDate =>
  'referenceDate' in option && 'duration' in option

const isValidDate = (...dates: unknown[]): boolean => {
  for (const date of dates) {
    if (!(date instanceof Date) || Number.isNaN(date)) {
      return false
    }
  }

  return true
}

const isYearMatch = (dateValue: Date, year: number): boolean =>
  dateValue.getFullYear() === year

const isWithinDateRange = (
  dateValue: Date,
  startDate: Date,
  endDate: Date,
): boolean => startDate <= dateValue && dateValue <= endDate

const isWithinDuration = (
  dateValue: Date,
  referenceDate: Date,
  duration: number,
): boolean => {
  const refTime = referenceDate.getTime()
  const valueTime = dateValue.getTime()
  return refTime - duration <= valueTime && valueTime <= refTime
}

const isDateCompatible = (val: unknown): val is Date | number | string =>
  typeof val === 'string' || val instanceof Date || typeof val === 'number'

export const createFilter =
  <Obj>(dateKey: keyof Obj, options: FilterOptions = {} as FilterOptions) =>
  (obj: Obj): boolean => {
    const val = obj[dateKey]
    if (!isDateCompatible(val)) {
      return true
    }
    const dateValue = new Date(val)
    if (!isValidDate(dateValue)) {
      return true
    }

    if (isYearOption(options)) {
      return isYearMatch(dateValue, options.year)
    }

    if (
      isDateRangeOption(options) &&
      isValidDate(options.startDate, options.endDate)
    ) {
      return isWithinDateRange(dateValue, options.startDate, options.endDate)
    }

    if (isReferenceDateOption(options) && isValidDate(options.referenceDate)) {
      return isWithinDuration(
        dateValue,
        options.referenceDate,
        options.duration,
      )
    }

    // If no valid options are provided, include the item in the result
    return true
  }

// const resultByYear = ascents.filter(
//   createFilterFunction('Date', { year: 2023 }),
// )
// console.log(resultByYear)

// const resultByDateRange = ascents.filter(
//   createFilterFunction('Date', {
//     startDate: new Date('2023-07-26'),
//     endDate: new Date(),
//   }),
// )
// console.log(resultByDateRange)

// const resultByDuration = ascents.filter(
//   createFilterFunction('Date', {
//     referenceDate: new Date(),
//     duration: 30 * 24 * 60 * 60 * 1000,
//   }),
// )
// console.log(resultByDuration)
