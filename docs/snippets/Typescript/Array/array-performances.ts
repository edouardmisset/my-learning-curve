const arrayLength = 150_000
const someValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Unshift

const unshifted = [...someValues]
console.time('Unshift')

while (unshifted.length < arrayLength) {
  unshifted.unshift(Number.NaN)
}

console.log(unshifted)
console.timeEnd('Unshift') // 1032.787841796875 ms

// Push

console.time('Push and reverse')
const pushed = [...someValues].reverse() // 38.06005859375 ms

while (pushed.length < arrayLength) {
  pushed.push(Number.NaN)
}

pushed.reverse()

console.log(pushed)
console.timeEnd('Push and reverse')

// Create new array with spread

console.time('New spread array')

let spreadCreated: unknown[]
const someLength = someValues.length
if (someValues.length < arrayLength) {
  spreadCreated = [
    ...Array(arrayLength - someValues.length).fill(Number.NaN),
    ...someValues,
  ]
}

console.log(spreadCreated)
console.timeEnd('New spread array') // 39.906982421875 ms

// Create new array with concat

console.time('New concat array')

let concatCreated: unknown[]
if (someValues.length < arrayLength) {
  concatCreated = Array(arrayLength - someValues.length)
    .fill(Number.NaN)
    .concat(someValues)
}

console.log(concatCreated)
console.timeEnd('New concat array') // 14.547119140625 ms
