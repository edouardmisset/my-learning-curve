const SECONDS_PER_MINUTE = 60
const SECONDS_PER_HOUR = 3600
const SECONDS_PER_DAY = 86_400
const SECONDS_PER_WEEK = 604_800
// Note: This is an approximation, as months can have different lengths.
const SECONDS_PER_MONTH = 2_592_000 // 30 days
const SECONDS_PER_YEAR = 31_536_000 // 365 days

const CUTOFFS = [
  SECONDS_PER_MINUTE,
  SECONDS_PER_HOUR,
  SECONDS_PER_DAY,
  SECONDS_PER_WEEK,
  SECONDS_PER_MONTH,
  SECONDS_PER_YEAR,
  Number.POSITIVE_INFINITY,
] as const satisfies number[]
const UNITS = [
  'second',
  'minute',
  'hour',
  'day',
  'week',
  'month',
  'year',
] as const satisfies Intl.RelativeTimeFormatUnit[]

export function createRelativeTimeString(
  locale = 'en-US',
): (date: Date | number) => string {
  const relativeTimeFormatter = new Intl.RelativeTimeFormat(locale, {
    numeric: 'auto',
  })
  return (date: Date | number): string => {
    if (date instanceof Date || typeof date === 'number') {
      const timeInMs = typeof date === 'number' ? date : date.getTime()
      const deltaInSeconds = Math.round((timeInMs - Date.now()) / 1_000)
      const unitIndex = CUTOFFS.findIndex(
        cutoff => Math.abs(deltaInSeconds) < cutoff,
      )
      const previousCutoff = CUTOFFS[unitIndex - 1]
      const divisor = unitIndex && previousCutoff ? previousCutoff : 1
      const timeUnit: Intl.RelativeTimeFormatUnit = UNITS[unitIndex] ?? 'second'
      return relativeTimeFormatter.format(
        Math.round(deltaInSeconds / divisor),
        timeUnit,
      )
    }

    throw new Error('Expected a Date object or a numeric timestamp')
  }
}
