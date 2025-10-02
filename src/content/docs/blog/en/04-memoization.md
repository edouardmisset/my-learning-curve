---
date: 2023-10-10
title: Memoization
excerpt: "Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again."
tags: [ 'JavaScript', 'Optimization', 'Memoization', 'Closure', 'Higher Order Functions' ]
lastUpdated: 2025-10-02
---

## Definition

> Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
>
> ~ Wikipedia

<!-- truncate -->

## The concept

> As our applications grow and begin to carry out heavier computations, there comes an increasing need for speed (🏎️) and the optimization of processes becomes a necessity. When we ignore this concern, we end up with programs that take a lot of time and consume a monstrous chunk of system resources during execution.
>
> Memoization is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
>
> ~ Philip Obosi

Memoization is built upon two key JS concepts:

- **Closure** (function and the lexical environment where it was declared)
- **[Higher Order Functions](https://edouardmisset.github.io/my-learning-curve/blog/en/05-higher-order-functions)** (returning / accepting functions from functions)

## Examples

### Basic example

Simple memoization exemple:

```javascript
const cache = {}
function memoizedAddTo1000(number) {
  if (number in cache) {
    return cache[number]
  } else {
    console.log('(Long time) calculation...')
    cache[number] = number + 1000
    return cache[number]
  }
}

console.log('First call: ', memoizedAddTo1000(1))
console.log('Second call: ', memoizedAddTo1000(1))

// (Long time) calculation...
// First call: 1001
// Second call: 1001
```

### Advanced example

Memoization of a function:

```javascript
const cache = {}
function memoize(fn) {
  return function (...args) {
    if (cache[args]) {
      return cache[args]
    }
    const result = fn.apply(this, args)
    cache[args] = result
    return result
  }
}
```

## Resources

Understanding Memoization in JavaScript by [better.dev](https://www.better.dev/understanding-memoization-in-javascript)

Memoization [Wikipedia](https://en.wikipedia.org/wiki/Memoization)

Andrei Neagoie [ZTM](https://zerotomastery.io/)
