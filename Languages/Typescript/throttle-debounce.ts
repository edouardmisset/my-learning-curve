type TimeoutId = NodeJS.Timeout | number | null

let throttleTimerId: TimeoutId = null
export const throttle = (callback: Function, delay = 50): void => {
  if (throttleTimerId != null) return

  throttleTimerId = setTimeout(() => {
    callback()
    throttleTimerId = null
  }, delay)
}

let debounceTimerId: TimeoutId = null
export const debounce = (callback: Function, delay = 50): void => {
  if (debounceTimerId != null) clearTimeout(debounceTimerId)

  debounceTimerId = setTimeout(callback, delay)
}
