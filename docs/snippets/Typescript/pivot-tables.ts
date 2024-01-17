/* eslint-disable @typescript-eslint/no-explicit-any */

type Ascent = {
  routeName: string
  topoGrade: string
  date: Date
  crag: string
  climber: string
  routeOrBoulder: string
  numberOfTries: number
  id: number
}

const ascentList: Ascent[] = [
  {
    id: 0,
    routeName: 'Bodybuilder',
    topoGrade: '7a',
    date: new Date('2015-08-01'),
    crag: 'Gorges de la Jonte',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 5,
  },
  {
    id: 2,
    routeName: 'Le Plongeoir',
    topoGrade: '7b',
    date: new Date('2015-08-02'),
    crag: 'Gorges de la Jonte',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 5,
  },
  {
    id: 1,
    routeName: 'Siegfried Gauche',
    topoGrade: '7a',
    date: new Date('2017-06-25'),
    crag: 'Vieux-Château',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 1,
  },
  {
    id: 3,
    routeName: 'Highway Paradise',
    topoGrade: '7b+',
    date: new Date('2017-08-04'),
    crag: 'Bouilland',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 1,
  },
  {
    id: 4,
    routeName: 'Ballade pour Vincent',
    topoGrade: '7a+',
    date: new Date('2018-03-25'),
    crag: 'Calanques',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 1,
  },
  {
    id: 6,
    routeName: 'Le Loire',
    topoGrade: '7a',
    date: new Date('2018-06-17'),
    crag: 'Buoux',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 2,
  },
  {
    id: 5,
    routeName: 'Cococaline',
    topoGrade: '7a+',
    date: new Date('2018-06-17'),
    crag: 'Buoux',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 1,
  },
  {
    id: 8,
    routeName: 'Exquise Esquisse',
    topoGrade: '7b',
    date: new Date('2018-06-18'),
    crag: 'Buoux',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 1,
  },
  {
    id: 7,
    routeName: 'Baby',
    topoGrade: '8a',
    date: new Date('2018-11-03'),
    crag: 'Siurana',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 3,
  },
  {
    id: 9,
    routeName: 'Cannibale',
    topoGrade: '8a+',
    date: new Date('2020-10-04'),
    crag: 'Balme de Yenne',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 10,
  },
  {
    id: 10,
    routeName: "L'homme faible du moment",
    topoGrade: '8a',
    date: new Date('2019-03-23'),
    crag: 'Beausoleil',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 10,
  },
]

const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000

type Operation<T = any, R = number> = (currentValue: R, row: T) => R

type CreatePivotTableParams<
  Obj,
  RowKey extends keyof Obj,
  ColumnKey extends Omit<keyof Obj, RowKey>,
  Returned,
> = {
  data: Obj[]
  rowKey: RowKey
  columnKey: ColumnKey
  operation?: Operation<Obj, Returned>
}

const createPivotTable = <
  Obj,
  RowKey extends keyof Obj,
  ColumnKey extends Omit<keyof Obj, RowKey>,
  Returned = number,
>(
  params: CreatePivotTableParams<Obj, RowKey, ColumnKey, Returned>,
): { [k in keyof Obj]: { [j in keyof Obj]: Returned } } => {
  const { data, rowKey, columnKey, operation = curVal => curVal } = params
  return data.reduce(
    (acc, row) => {
      const rowKeyValue = String(row[rowKey])
      const colKeyValue = String(row[columnKey as unknown as keyof Obj])
      const existingRow = acc[rowKeyValue] || {}
      const existingValue = existingRow[colKeyValue] || (0 as Returned)
      const updatedValue = operation(existingValue, row)

      return {
        ...acc,
        [rowKeyValue]: {
          ...existingRow,
          [colKeyValue]: updatedValue,
        },
      }
    },
    {} as {
      [key in keyof Obj]: {
        [k in keyof Obj]: Returned
      }
    },
  )
}

// Operations

// Count operation
export const countOperation: Operation = (currentValue, _row) =>
  currentValue + 1

// Sum operation
export const sumOperationBuilder =
  (valueKey: string): Operation =>
  (currentValue, row) =>
    currentValue + row[valueKey]

// Max operation
export const maxOperationBuilder =
  (valueKey: string): Operation =>
  (currentValue, row) =>
    Math.max(currentValue, row[valueKey])

// Min operation
export const minOperationBuilder =
  (valueKey: string): Operation =>
  (currentValue, row) =>
    currentValue === 0 ? row[valueKey] : Math.min(currentValue, row[valueKey])

const pivotTable2 = createPivotTable({
  data: ascentList,
  rowKey: 'date',
  columnKey: 'numberOfTries',
  operation: countOperation,
})
// window.console.log(pivotTable2)

const pivotTableSum = createPivotTable({
  data: ascentList,
  rowKey: 'topoGrade',
  columnKey: 'numberOfTries',
  operation: sumOperationBuilder('topoGrade'),
})
// window.console.log('🚀 ~ pivotTableSum:', pivotTableSum)

const pivotTableMax = createPivotTable({
  data: ascentList,
  rowKey: 'topoGrade',
  columnKey: 'numberOfTries',
  operation: maxOperationBuilder('topoGrade'),
})
// window.console.log('🚀 ~ pivotTableMax:', pivotTableMax)
const pivotTableMin = createPivotTable({
  data: ascentList,
  rowKey: 'topoGrade',
  columnKey: 'numberOfTries',
  operation: minOperationBuilder('topoGrade'),
})
// window.console.log('🚀 ~ pivotTableMin:', pivotTableMin)

// Sort

export const sortStringsBuilder =
  (key?: string, ascending = true) =>
  (
    left: Record<string, unknown> | string,
    right: Record<string, unknown> | string,
  ): number => {
    // Check if left and right are strings or objects
    const isString =
      typeof left === 'string' && typeof right === 'string' && key !== undefined

    const leftStr = isString ? left : left[key]
    const rightStr = isString ? right : right[key]

    return leftStr.localeCompare(rightStr) * (ascending ? 1 : -1)
  }

// window.console.log(
//   '🚀 ~ sortStrings:',
//   ascentList.sort(sortStringsBuilder('routeName')),
// )

export const sortNumberBuilder =
  (key?: string, ascending = true) =>
  (
    left: Record<string, unknown> | number,
    right: Record<string, unknown> | number,
  ): number => {
    const isNumber =
      typeof left === 'number' && typeof right === 'number' && key !== undefined
    const leftNum = isNumber ? left : left[key]
    const rightNum = isNumber ? right : right[key]

    if (Number.isNaN(leftNum)) return 1
    if (Number.isNaN(rightNum)) return -1

    return (leftNum - rightNum) * (ascending ? 1 : -1)
  }

// window.console.log(
//   '🚀 ~ sortNumber:',
//   ascentList.sort(sortNumberBuilder('numberOfTries')),
// )

export const sortDateBuilder = (key?: string, ascending = true) => {
  return (
    left: Record<string, unknown> | Date,
    right: Record<string, unknown> | Date,
  ): number => {
    const isDate =
      left instanceof Date && right instanceof Date && key !== undefined
    const leftDate = isDate ? left : left[key]
    const rightDate = isDate ? right : right[key]

    if (Number.isNaN(leftDate.getTime())) return 1
    if (Number.isNaN(rightDate.getTime())) return -1
    return (leftDate.getTime() - rightDate.getTime()) * (ascending ? 1 : -1)
  }
}

// window.console.log('🚀 ~ sortDate:', ascentList.sort(sortDateBuilder('date')))

// Filter

// Date
type FilterDateBuilder = (
  params:
    | { startDate: Date; endDate: Date }
    | { referenceDate?: Date; durationInMilliseconds?: number }
    | { year: number }
    | undefined,
) => (date: Date) => boolean

export const filterDateBuilder: FilterDateBuilder = (params = {}) => {
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

export const filter2018 = filterDateBuilder({ year: 2018 })
export const filter2023 = filterDateBuilder({ year: 2023 })
export const filterLast12Months = filterDateBuilder({
  durationInMilliseconds: oneYearInMilliseconds,
})
export const filterLast5years = filterDateBuilder({
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

export const filterBooleanBuilder =
  (key?: string) =>
  (value: boolean | Record<string, unknown>): boolean => {
    if (typeof value === 'boolean') return value

    if (typeof value?.[key] === 'boolean') return value[key] === true

    throw new Error(`Invalid key (${key}) or value (${value})`)
  }

// Find

export const findBuilder =
  <Obj extends Record<string, unknown>>(key: keyof Obj) =>
  (value: unknown) =>
  (obj: Obj): boolean => {
    if (!Object.prototype.hasOwnProperty.call(obj, key))
      throw new Error(`Key "${String(key)}" does not exist in the object.`)

    return obj[key] === value
  }

export const findById = findBuilder('id')
export const findByRouteName = findBuilder('routeName')

// window.console.log(ascentList.find(findById(1)))
// window.console.log(ascentList.find(findByRouteName('Bodybuilder')))

// Transpose pivot table

// TODO WIP
export function transposePivotTable(table: {
  [key: string]: { [key: string]: number }
}): { [key: string]: { [key: string]: number } } {
  const transposed: { [key: string]: { [key: string]: number } } = {}
  for (const rowKey in table) {
    // eslint-disable-next-line no-continue
    if (!Object.prototype.hasOwnProperty.call(table, rowKey)) continue

    for (const colKey in table[rowKey]) {
      // eslint-disable-next-line no-continue, max-depth
      if (!Object.prototype.hasOwnProperty.call(table[rowKey], colKey)) continue

      // eslint-disable-next-line max-depth
      if (!transposed[colKey]) transposed[colKey] = {}
      transposed[colKey][rowKey] = table[rowKey][colKey]
    }
  }
  return transposed
}

// ----------------
// Filtering dates
// ----------------

type milliseconds = number
type integer = number

type StartAndEndDate = {
  startDate: Date
  endDate: Date
}

type Year = {
  year: integer
}

type DurationAndRefDate = {
  referenceDate: Date
  duration: milliseconds
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
  for (const date of dates)
    if (!(date instanceof Date) || Number.isNaN(date)) return false

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

export const createFilterFunction =
  <Obj>(dateKey: keyof Obj, options: FilterOptions = {} as FilterOptions) =>
  (obj: Obj): boolean => {
    const val = obj[dateKey]
    if (!isDateCompatible(val)) return true
    const dateValue = new Date(val)
    if (!isValidDate(dateValue)) return true

    if (isYearOption(options)) return isYearMatch(dateValue, options.year)

    if (
      isDateRangeOption(options) &&
      isValidDate(options.startDate, options.endDate)
    )
      return isWithinDateRange(dateValue, options.startDate, options.endDate)

    if (isReferenceDateOption(options) && isValidDate(options.referenceDate))
      return isWithinDuration(
        dateValue,
        options.referenceDate,
        options.duration,
      )

    // If no valid options are provided, include the item in the result
    return true
  }

// Define the type for our objects
interface MyObject {
  date: string | Date
  value: number
}

// Create an array of objects
const data: MyObject[] = [
  { date: '2018-01-01', value: 10 },
  { date: '2018-06-01', value: 15 },
  { date: '2018-12-01', value: 20 },
  { date: '2019-01-01', value: 25 },
  { date: '2019-06-01', value: 30 },
  { date: '2019-12-01', value: 35 },
  { date: '2020-01-01', value: 40 },
  { date: '2020-06-01', value: 45 },
  { date: '2020-12-01', value: 50 },
  { date: '2021-01-01', value: 55 },
  { date: '2021-06-01', value: 60 },
  { date: '2021-12-01', value: 65 },
  { date: '2022-01-01', value: 70 },
  { date: '2022-06-01', value: 75 },
  { date: '2022-12-01', value: 80 },
  { date: new Date('2023-01-01'), value: 85 },
  { date: '2023-06-01', value: 90 },
  { date: '2023-12-01', value: 95 },
  { date: '2024-01-01', value: 100 },
  { date: '2024-06-01', value: 105 },
  { date: '2024-12-01', value: 110 },
]

// // Create a filter function to get items from the year 2023
// const filterByYear2023 = createFilterFunction<MyObject>('date', { year: 2023 })
// const resultByYear = data.filter(filterByYear2023)
// console.log(resultByYear)

// // Create a filter function to get items between two dates
// const filterByDateRange = createFilterFunction<MyObject>('date', { startDate: new Date('2021-06-01'), endDate: new Date() });
// const resultByDateRange = data.filter(filterByDateRange);
// console.log(resultByDateRange);

// Create a filter function to get items within a duration from a reference date
const filterByDuration = createFilterFunction('date', {
  referenceDate: new Date('2022-01-01'),
  duration: 365 * 24 * 60 * 60 * 1000,
})
const resultByDuration = data.filter(filterByDuration)
console.log(resultByDuration)
