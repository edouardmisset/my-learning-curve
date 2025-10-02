// biome-ignore lint/suspicious/noExplicitAny: ... because it's a type helper file
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

export const createPivotTable = <
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

      return Object.assign(acc, {
        [rowKeyValue]: Object.assign({}, existingRow, {
          [colKeyValue]: updatedValue,
        }),
      })
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
