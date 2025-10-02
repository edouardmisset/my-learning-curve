class Signal extends EventTarget {
  #value: number

  constructor(value: number) {
    super()
    this.#value = value
  }

  get value(): number {
    return this.#value
  }

  set value(newValue: number | ((prevValue: number) => number)) {
    const nextValue =
      typeof newValue === 'function' ? newValue(this.#value) : newValue

    if (nextValue === this.#value) {
      return
    }

    this.#value = nextValue
    this.dispatchEvent(new CustomEvent('notify', { detail: nextValue }))
  }
}

const signal = new Signal(42)
signal.addEventListener('notify', (event: CustomEvent) => {
  console.log(`Signal changed to ${event.detail}`)
})

signal.value = 42
// No change, no event
signal.value = 43
// LOGS: Signal changed to 43
signal.value = value => value + 1
// LOGS: Signal changed to 44

class Effect {
  #subscriptions = new Set<VoidFunction>()

  constructor(callback: VoidFunction, dependencies: EventTarget[] = []) {
    for (const dependency of dependencies) {
      dependency.addEventListener('notify', callback)
      this.#subscriptions.add(() => {
        dependency.removeEventListener('notify', callback)
      })
    }
    callback()
  }

  dispose(): void {
    for (const unsubscribe of this.#subscriptions) {
      unsubscribe()
    }
  }
}

const newSignal = new Signal(42)
const effect = new Effect(() => {
  console.log(`Effect triggered with value ${newSignal.value}`)
}, [newSignal])
// LOGS: Effect triggered with value 42

newSignal.value = 43
// LOGS: Effect triggered with value 43
effect.dispose()
newSignal.value = 44
// No effect

class ComputedValue extends EventTarget {
  #signal: Signal
  #effect: Effect

  constructor(callback: () => number, dependencies: EventTarget[] = []) {
    super()
    this.#signal = new Signal(callback())
    this.#effect = new Effect(() => {
      this.#signal.value = callback()
    }, dependencies)
  }

  get value(): number {
    return this.#signal.value
  }

  addEventListener(type: string, listener: EventListener): void {
    this.#signal.addEventListener(type, listener)
  }

  removeEventListener(type: string, listener: EventListener): void {
    this.#signal.removeEventListener(type, listener)
  }

  dispose(): void {
    this.#effect.dispose()
  }
}

const newerSignal = new Signal(42)
const _signalEffect = new Effect(() => {
  console.log(`Signal changed to ${newerSignal.value}`)
}, [newerSignal])
// LOGS: Signal changed to 42
const computed = new ComputedValue(() => newerSignal.value * 2, [newerSignal])
const _computedEffect = new Effect(() => {
  console.log(`Computed value changed to ${computed.value}`)
}, [computed])
// LOGS: Computed value changed to 84

newerSignal.value = 43
// LOGS: Signal changed to 43
// LOGS: Computed value changed to 86
