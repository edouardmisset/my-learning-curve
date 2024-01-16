/* eslint-disable @typescript-eslint/no-explicit-any */

type Ascent = {
  routeName: string
  topoGrade: string
  date: Date
  crag: string
  climber: string
  routeOrBoulder: string
  numberOfTries: number
}

const ascentList: Ascent[] = [
  {
    routeName: 'Bodybuilder',
    topoGrade: '7a',
    date: new Date('2015-08-01'),
    crag: 'Gorges de la Jonte',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 5,
  },
  {
    routeName: 'Le Plongeoir',
    topoGrade: '7b',
    date: new Date('2015-08-02'),
    crag: 'Gorges de la Jonte',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 5,
  },
  {
    routeName: 'Siegfried Gauche',
    topoGrade: '7a',
    date: new Date('2017-06-25'),
    crag: 'Vieux-Château',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 1,
  },
  {
    routeName: 'Highway Paradise',
    topoGrade: '7b+',
    date: new Date('2017-08-04'),
    crag: 'Bouilland',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 1,
  },
  {
    routeName: 'Ballade pour Vincent',
    topoGrade: '7a+',
    date: new Date('2018-03-25'),
    crag: 'Calanques',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 1,
  },
  {
    routeName: 'Le Loire',
    topoGrade: '7a',
    date: new Date('2018-06-17'),
    crag: 'Buoux',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 2,
  },
  {
    routeName: 'Cococaline',
    topoGrade: '7a+',
    date: new Date('2018-06-17'),
    crag: 'Buoux',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 1,
  },
  {
    routeName: 'Exquise Esquisse',
    topoGrade: '7b',
    date: new Date('2018-06-18'),
    crag: 'Buoux',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 1,
  },
  {
    routeName: 'Baby',
    topoGrade: '8a',
    date: new Date('2018-11-03'),
    crag: 'Siurana',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 3,
  },
  {
    routeName: 'Cannibale',
    topoGrade: '8a+',
    date: new Date('2020-10-04'),
    crag: 'Balme de Yenne',
    climber: 'Edouard Misset',
    routeOrBoulder: 'route',
    numberOfTries: 10,
  },
  {
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

const sample = ascentList

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

// Count operation
export const countOperation: Operation = (currentValue, _row) =>
  currentValue + 1

// Sum operation
export const sumOperation: Operation = (currentValue, row) =>
  currentValue + row.value

// Average operation
// let averageOperation: Operation = (currentValue, row, count = 0) =>
//   (currentValue * count + row.value) / (count + 1)

// Max operation
export const maxOperation: Operation = (currentValue, row) =>
  Math.max(currentValue, row.value)

// Min operation
export const minOperation: Operation = (currentValue, row) =>
  currentValue === 0 ? row.value : Math.min(currentValue, row.value)

type FilterDateCreator = (
  params:
    | { referenceDate?: Date; durationInMilliseconds?: number }
    | { year: number }
    | undefined,
) => (date: Date) => boolean

export const filterDateCreator: FilterDateCreator = (params = {}) => {
  if ('year' in params) return date => date.getUTCFullYear() === params.year

  const {
    referenceDate = new Date(),
    durationInMilliseconds = oneYearInMilliseconds,
  } = params

  return date =>
    date.getUTCMilliseconds() >=
    referenceDate.getUTCMilliseconds() - durationInMilliseconds
}

export const filter2024 = filterDateCreator({ year: 2024 })
export const filter2023 = filterDateCreator({ year: 2023 })
export const filterLast12Months = filterDateCreator({
  durationInMilliseconds: oneYearInMilliseconds,
})

const samSample = [...sample].filter(item => filterLast12Months(item.date))

const pivotTable2 = createPivotTable({
  data: ascentList,
  rowKey: 'date',
  columnKey: 'numberOfTries',
  operation: countOperation,
})
console.log(pivotTable2)

/*

const pivotTableSum = createPivotTable(sample, 'grade', 'tries', sumOperation)
console.log('🚀 ~ pivotTableSum:', pivotTableSum)
// let pivotTableAverage = createPivotTable(sample, 'grade', 'tries', averageOperation);
// console.log("🚀 ~ pivotTableAverage:", pivotTableAverage)
const pivotTableMax = createPivotTable(sample, 'grade', 'tries', maxOperation)
console.log('🚀 ~ pivotTableMax:', pivotTableMax)
const pivotTableMin = createPivotTable(sample, 'grade', 'tries', minOperation)
console.log('🚀 ~ pivotTableMin:', pivotTableMin)

export const localSortStrings = (
  left: string,
  right: string,
  ascending = true,
): number => left.localeCompare(right) * (ascending ? 1 : -1)

export const sortNumber = (
  left: number,
  right: number,
  ascending = true,
): number => {
  if (Number.isNaN(left)) return 1
  if (Number.isNaN(right)) return -1
  return (left - right) * (ascending ? 1 : -1)
}

export const sortDate = (left: Date, right: Date, ascending = true): number => {
  if (Number.isNaN(left.getTime())) return 1
  if (Number.isNaN(right.getTime())) return -1
  return (left.getTime() - right.getTime()) * (ascending ? 1 : -1)
}



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

*/
