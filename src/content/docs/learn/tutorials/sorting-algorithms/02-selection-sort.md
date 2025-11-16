---
date: 2025-11-16
title: "Selection Sort"
description: "Understanding Selection Sort algorithm with implementation and complexity analysis."
tags: ["algorithms", "sorting", "selection-sort"]
prev:
  link: /my-learning-curve/learn/tutorials/sorting-algorithms/01-bubble-sort
  label: Bubble Sort
next: 
  link: /my-learning-curve/learn/tutorials/sorting-algorithms/03-insertion-sort
  label: Insertion Sort
---

## What is Selection Sort?

Selection Sort divides the array into sorted and unsorted regions. It repeatedly finds the minimum element from the unsorted region and places it at the beginning of the unsorted region, thus expanding the sorted region.

Unlike Bubble Sort, Selection Sort minimizes the number of swaps, making it useful when write operations are expensive.

## How It Works

1. Find the minimum element in the unsorted array
2. Swap it with the first element of the unsorted region
3. Move the boundary between sorted and unsorted regions
4. Repeat until the entire array is sorted

## Visual Example

```
Initial: [64, 25, 12, 22, 11]
         ^unsorted region

Pass 1: Find minimum in [64, 25, 12, 22, 11] → 11
[11, 25, 12, 22, 64]
 ^sorted

Pass 2: Find minimum in [25, 12, 22, 64] → 12
[11, 12, 25, 22, 64]
     ^sorted

Pass 3: Find minimum in [25, 22, 64] → 22
[11, 12, 22, 25, 64]
         ^sorted

Pass 4: Find minimum in [25, 64] → 25
[11, 12, 22, 25, 64]
             ^sorted

Final: [11, 12, 22, 25, 64] ✓ Sorted!
```

## TypeScript Implementation

```ts
export function selectionSort<T>(arr: T[]): T[] {
  const result = [...arr]
  const n = result.length
  
  for (let i = 0; i < n - 1; i++) {
    // Find minimum element in unsorted portion
    let minIndex = i
    
    for (let j = i + 1; j < n; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j
      }
    }
    
    // Swap minimum element with first unsorted element
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]]
    }
  }
  
  return result
}

// With custom comparator
export function selectionSortBy<T>(
  arr: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  const result = [...arr]
  const n = result.length
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    
    for (let j = i + 1; j < n; j++) {
      if (compareFn(result[j], result[minIndex]) < 0) {
        minIndex = j
      }
    }
    
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]]
    }
  }
  
  return result
}
```

## Usage Examples

```ts
// Sort numbers
const numbers = [64, 25, 12, 22, 11]
console.log(selectionSort(numbers))
// Output: [11, 12, 22, 25, 64]

// Sort with custom comparator (descending)
const descending = selectionSortBy(numbers, (a, b) => b - a)
console.log(descending)
// Output: [64, 25, 22, 12, 11]

// Sort objects
interface Product {
  name: string
  price: number
}

const products: Product[] = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 }
]

const sortedByPrice = selectionSortBy(products, (a, b) => a.price - b.price)
```

## Complexity Analysis

### Time Complexity

- **Best Case: O(n²)** - Always makes the same number of comparisons
- **Average Case: O(n²)** - No matter the input
- **Worst Case: O(n²)** - No optimization possible

The time complexity is always O(n²) because:
- Outer loop runs n-1 times
- Inner loop performs (n-i-1) comparisons each time
- Total comparisons: n(n-1)/2 ≈ n²/2

### Space Complexity

- **O(1)** - Only uses a constant amount of extra space

### Number of Operations

For an array of size n:
- **Comparisons**: Exactly n(n-1)/2
- **Swaps**: At most n-1 (one per pass)

## Advantages

1. **Minimizes swaps** - Only n-1 swaps maximum (useful when writes are expensive)
2. **In-place** - No extra memory required
3. **Simple to implement** - Easy to understand logic
4. **Predictable** - Always takes the same time regardless of input order

## Disadvantages

1. **Poor time complexity** - Always O(n²), even for sorted arrays
2. **Not stable** - May change relative order of equal elements
3. **Not adaptive** - Doesn't take advantage of existing order
4. **Many comparisons** - Always makes n²/2 comparisons

## Why Selection Sort is Unstable

Selection Sort is unstable because it can swap equal elements in a way that changes their relative order:

```
Example: [4a, 3, 4b, 2]

After pass 1: [2, 3, 4b, 4a]  ← 4b now comes before 4a
```

## When to Use Selection Sort

**Use Selection Sort when:**
- Write operations are very expensive (e.g., EEPROM, flash memory)
- You need to minimize the number of swaps
- Dataset is very small
- Memory is extremely limited
- Simplicity is paramount

**Avoid Selection Sort when:**
- You need better than O(n²) performance
- Stability is required
- You have nearly sorted data (use Insertion Sort instead)
- Dataset is large

## Variations

### Double Selection Sort

Finds both minimum and maximum in each pass:

```ts
export function doubleSelectionSort<T>(arr: T[]): T[] {
  const result = [...arr]
  let left = 0
  let right = result.length - 1
  
  while (left < right) {
    let minIndex = left
    let maxIndex = left
    
    // Find both min and max in one pass
    for (let i = left; i <= right; i++) {
      if (result[i] < result[minIndex]) minIndex = i
      if (result[i] > result[maxIndex]) maxIndex = i
    }
    
    // Handle edge case where maxIndex is at left position
    if (maxIndex === left) {
      maxIndex = minIndex
    }
    
    // Swap minimum to left
    if (minIndex !== left) {
      [result[left], result[minIndex]] = [result[minIndex], result[left]]
    }
    
    // Swap maximum to right
    if (maxIndex !== right) {
      [result[right], result[maxIndex]] = [result[maxIndex], result[right]]
    }
    
    left++
    right--
  }
  
  return result
}
```

## Comparison with Other Simple Sorts

| Aspect | Selection Sort | Bubble Sort | Insertion Sort |
|--------|---------------|-------------|----------------|
| Time Best | O(n²) | O(n) | O(n) |
| Time Average | O(n²) | O(n²) | O(n²) |
| Time Worst | O(n²) | O(n²) | O(n²) |
| Swaps | n-1 | O(n²) | O(n²) |
| Stable | ✗ | ✓ | ✓ |
| Adaptive | ✗ | ✓ | ✓ |
| Use Case | Minimize writes | Small/nearly sorted | Small/nearly sorted |

## Practice Problems

1. Implement Selection Sort to find k smallest elements
2. Count the exact number of comparisons for a given array
3. Modify to work with descending order
4. Implement the Double Selection Sort variation
5. Make Selection Sort stable by tracking original indices

## Key Takeaways

- Selection Sort always performs O(n²) comparisons
- Minimizes the number of swaps (maximum n-1)
- Not stable - can change relative order of equal elements
- Not adaptive - doesn't benefit from partial sorting
- Best when write operations are very expensive
- Simpler than Bubble Sort in terms of swap operations
