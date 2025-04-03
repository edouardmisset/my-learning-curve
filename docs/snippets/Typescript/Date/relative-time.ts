export function createRelativeTimeString(
  locale = 'en-US',
): (date: Date | number) => string {
  const secondsPerMinute = 60
  const secondsPerHour = 3600
  const secondsPerDay = 86_400
  const secondsPerWeek = 604_800
  // Note: This is an approximation, as months can have different lengths.
  const secondsPerMonth = 2_592_000 // 30 days
  const secondsPerYear = 31_536_000 // 365 days

  const cutoffs = [
    secondsPerMinute,
    secondsPerHour,
    secondsPerDay,
    secondsPerWeek,
    secondsPerMonth,
    secondsPerYear,
    Number.POSITIVE_INFINITY,
  ]
  const units: Intl.RelativeTimeFormatUnit[] = [
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
  ]
  const relativeTimeFormatter = new Intl.RelativeTimeFormat(locale, {
    numeric: 'auto',
  })
  return (date: Date | number): string => {
    if (date instanceof Date || typeof date === 'number') {
      const timeInMs = typeof date === 'number' ? date : date.getTime()
      const deltaInSeconds = Math.round((timeInMs - Date.now()) / 1_000)
      const unitIndex = cutoffs.findIndex(
        cutoff => Math.abs(deltaInSeconds) < cutoff,
      )
      const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1
      return relativeTimeFormatter.format(
        Math.round(deltaInSeconds / divisor),
        units[unitIndex],
      )
    }

    throw new Error('Expected a Date object or a numeric timestamp')
  }
}
