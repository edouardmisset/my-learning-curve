type AnyVoidFunction = (...arg: any[]) => void
interface DebounceParams {
  callback: AnyVoidFunction
  timerId?: { id: number }
  delay?: number
}
type ThrottleParams = Omit<DebounceParams, 'timerId'>

export const debounce = (params: DebounceParams): AnyVoidFunction => {
  const { callback, timerId = { id: -1 }, delay = 50 } = params

  return (...args) => {
    if (timerId.id !== -1) window.clearTimeout(timerId.id)

    timerId.id = window.setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  }
}

export const throttle = (params: ThrottleParams): AnyVoidFunction => {
  const { callback, delay = 100 } = params
  let throttlePause: boolean

  return (...args) => {
    if (throttlePause === true) return

    throttlePause = true
    setTimeout(() => {
      callback.apply(this, args)
      throttlePause = false
    }, delay)
  }
}
