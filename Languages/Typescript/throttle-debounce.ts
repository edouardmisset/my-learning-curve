type TimeoutId = NodeJS.Timeout | number | null

let throttleTimerId: TimeoutId = null
export const throttle = (callback: Function, delay = 50): void => {
  if (throttleTimerId != null) return

  throttleTimerId = setTimeout(() => {
    callback()
    throttleTimerId = null
  }, delay)
}

// Debounce

type AnyVoidFunction = (...arg: any[]) => void

interface DebounceParams {
  callback: AnyVoidFunction
  timerId?: number
  delay?: number
}

export const debounce = (params: DebounceParams): AnyVoidFunction => {
  const { callback, timerId, delay = 50 } = params
  let timer = timerId

  return (...args) => {
    if (timer != null) window.clearTimeout(timer)

    timer = window.setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  }
}
