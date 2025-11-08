---
date: 2025-11-08
title: Debouncing and Throttling
excerpt: "Debouncing and throttling are techniques to control how many times we allow a function to be executed over time, improving performance and user experience."
tags: ['JavaScript', 'Performance', 'Optimization', 'Debouncing', 'Throttling', 'Event Handling']
lastUpdated: 2025-11-08
---

## TL;DR

- Debounce: run after the events stop for N ms (great for search inputs, resize).
- Throttle: run at _most once_ every N ms (great for scroll, drag, rate-limits).

### Visual behavior (combined)

```text
Events:     X X X X X X X
Time:       |-------|-------|----
Throttled:  ✓       ✓       ✓
Debounced:                      ✓
```

## The concept

**Debouncing** and **throttling** are techniques to control how many times we
allow a function to be executed over time. They are especially useful when
dealing with events that fire rapidly, such as scrolling, resizing, clicks or
typing.

> The Debounce technique allow us to “group” multiple sequential calls in a single one.
>
> By using [Throttle], we don’t allow to our function to execute more than once
> every X milliseconds.
>
> The main difference between this and debouncing is that throttle guarantees
> the execution of the function regularly, at least every X milliseconds.
>
> ~ David Corbacho

## Debouncing

### Definition

Debouncing ensures that a function is only executed after a certain period of
inactivity. If the function is called again before the delay has passed, the
timer resets.

**Use cases:**

- Search input: Wait until the user stops typing before making an API call
- Window resize: Wait until the user finishes resizing before recalculating
  layout
- Form validation: Validate input after the user stops typing

### Basic example

```javascript
function debounce(func, delay) {
  let timeoutId
  
  return function (...args) {
    // Clear the previous timeout
    clearTimeout(timeoutId)
    
    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// Usage
const searchInput = document.querySelector('#search')

const handleSearch = (event) => {
  console.log('Searching for:', event.target.value)
  // Make API call here
}

// Only call handleSearch 500ms after the user stops typing
searchInput.addEventListener('input', debounce(handleSearch, 500))
```

### Debouncing behavior

```text
Events:     X X X X X X X           X X X X
Time:       |-------------------|-----------------|
Debounced:                      ✓                 ✓
```

The function only executes after the events stop firing for the specified delay.

## Throttling

### What is throttling?

Throttling ensures that a function is executed at most once in a specified time
period, regardless of how many times it's triggered.

**Use cases:**

- Scroll events: Update position indicator while scrolling
- Button clicks: Prevent double-submission
- Mouse movement: Track cursor position without overwhelming performance
- API rate limiting: Ensure requests don't exceed limits

### Basic implementation

```javascript
function throttle(func, limit) {
  let inThrottle
  
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

// Usage
const handleScroll = () => {
  console.log('Scroll position:', window.scrollY)
  // Update UI here
}

// Only call handleScroll once every 200ms while scrolling
window.addEventListener('scroll', throttle(handleScroll, 200))
```

### Throttling behavior

```text
Events:     X X X X X X X X X X X X X X X
Time:       |-------|-------|-------|-------|
Throttled:  ✓       ✓       ✓       ✓       ✓
```

The function executes at regular intervals while events are firing.

## Key differences

| Feature | Debouncing | Throttling |
|---------|-----------|-----------|
| **Execution** | After inactivity period | At regular intervals |
| **Best for** | Actions after user stops | Continuous actions |
| **Calls** | Once after delay | Multiple times at intervals |
| **Example** | Search autocomplete | Scroll position tracking |

## Advanced example with leading and trailing options

```javascript
function debounce(func, delay, { leading = false, trailing = true } = {}) {
  let timeoutId
  
  return function (...args) {
    const callNow = leading && !timeoutId
    
    clearTimeout(timeoutId)
    
    timeoutId = setTimeout(() => {
      timeoutId = null
      if (trailing) {
        func.apply(this, args)
      }
    }, delay)
    
    if (callNow) {
      func.apply(this, args)
    }
  }
}

function throttle(func, limit, { leading = true, trailing = true } = {}) {
  let inThrottle
  let lastFunc
  let lastRan
  
  return function (...args) {
    if (!inThrottle) {
      if (leading) {
        func.apply(this, args)
      }
      lastRan = Date.now()
      inThrottle = true
      
      setTimeout(() => {
        inThrottle = false
        if (trailing && lastFunc) {
          lastFunc()
        }
      }, limit)
    } else {
      lastFunc = () => func.apply(this, args)
    }
  }
}
```

## Performance comparison

```javascript
// Without optimization
let counter = 0
window.addEventListener('scroll', () => {
  counter++
  console.log('Scroll event fired:', counter)
})
// Result: Hundreds of calls per second 😱

// With throttling
let throttledCounter = 0
window.addEventListener('scroll', throttle(() => {
  throttledCounter++
  console.log('Throttled scroll:', throttledCounter)
}, 200))
// Result: ~5 calls per second ✅

// With debouncing
let debouncedCounter = 0
window.addEventListener('scroll', debounce(() => {
  debouncedCounter++
  console.log('Debounced scroll:', debouncedCounter)
}, 200))
// Result: 1 call after scrolling stops for 200ms ✅
```

## Practical examples

### Search with debouncing

```javascript
const searchAPI = async (query) => {
  const response = await fetch(`/api/search?q=${query}`)
  return response.json()
}

const debouncedSearch = debounce(async (event) => {
  const query = event.target.value
  if (query.length >= 2) {
    const results = await searchAPI(query)
    displayResults(results)
  }
}, 300)

document.querySelector('#search').addEventListener('input', debouncedSearch)
```

### Infinite scroll with throttling

```javascript
const loadMoreContent = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement
  
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    console.log('Loading more content...')
    // Fetch and append more content
  }
}

window.addEventListener('scroll', throttle(loadMoreContent, 250))
```

### Save button with debouncing

```javascript
const autoSave = debounce((content) => {
  console.log('Auto-saving...')
  fetch('/api/save', {
    method: 'POST',
    body: JSON.stringify({ content }),
    headers: { 'Content-Type': 'application/json' }
  })
}, 1000)

document.querySelector('#editor').addEventListener('input', (event) => {
  autoSave(event.target.value)
})
```

## Resources

CSS-Tricks explanation by [David Corbacho](https://css-tricks.com/debouncing-throttling-explained-examples/)

Video tutorial by [Web Dev Simplified](https://www.youtube.com/watch?v=cjIswDCKgu0)

Lodash documentation: [debounce](https://lodash.com/docs/#debounce) and
[throttle](https://lodash.com/docs/#throttle)

Debounce and throttle utilities by Sindre Sorhus:

- [debounce GitHub](https://github.com/sindresorhus/debounce) /
[npm](https://www.npmjs.com/package/debounce)
- [p-debounce GitHub](https://github.com/sindresorhus/p-debounce) /
[npm](https://www.npmjs.com/package/p-debounce)
- [throttleit GitHub](https://github.com/sindresorhus/throttleit) / [npm](https://www.npmjs.com/package/throttleit)

---

### Disclaimer

_This article was drafted with the assistance of AI and reviewed/edited by the author._
