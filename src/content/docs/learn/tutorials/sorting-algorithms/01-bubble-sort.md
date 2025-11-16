---
date: 2025-11-16
title: "Bubble Sort"
description: "Understanding Bubble Sort algorithm with implementation and complexity analysis."
tags: ["algorithms", "sorting", "bubble-sort"]
prev:
  link: /my-learning-curve/learn/tutorials/sorting-algorithms/00-overview
  label: Overview
next: 
  link: /my-learning-curve/learn/tutorials/sorting-algorithms/02-selection-sort
  label: Selection Sort
---

## What is Bubble Sort?

Bubble Sort is one of the simplest sorting algorithms. It repeatedly steps through the array, compares adjacent elements, and swaps them if they're in the wrong order. The pass through the array is repeated until the array is sorted.

The algorithm gets its name because smaller elements "bubble" to the top (beginning) of the array with each iteration.

## How It Works

1. Compare the first two elements
2. If the first is greater than the second, swap them
3. Move to the next pair and repeat
4. After one pass, the largest element is in its final position
5. Repeat for remaining unsorted elements

## Visual Example

```
Initial: [5, 3, 8, 4, 2]

Pass 1:
[5, 3, 8, 4, 2] → [3, 5, 8, 4, 2] (swap 5 and 3)
[3, 5, 8, 4, 2] → [3, 5, 8, 4, 2] (no swap)
[3, 5, 8, 4, 2] → [3, 5, 4, 8, 2] (swap 8 and 4)
[3, 5, 4, 8, 2] → [3, 5, 4, 2, 8] (swap 8 and 2)
After pass 1: [3, 5, 4, 2, 8] (8 is in final position)

Pass 2:
[3, 5, 4, 2, 8] → [3, 5, 4, 2, 8] (no swap)
[3, 5, 4, 2, 8] → [3, 4, 5, 2, 8] (swap 5 and 4)
[3, 4, 5, 2, 8] → [3, 4, 2, 5, 8] (swap 5 and 2)
After pass 2: [3, 4, 2, 5, 8] (5 is in final position)

Pass 3:
[3, 4, 2, 5, 8] → [3, 4, 2, 5, 8] (no swap)
[3, 4, 2, 5, 8] → [3, 2, 4, 5, 8] (swap 4 and 2)
After pass 3: [3, 2, 4, 5, 8] (4 is in final position)

Pass 4:
[3, 2, 4, 5, 8] → [2, 3, 4, 5, 8] (swap 3 and 2)
After pass 4: [2, 3, 4, 5, 8] ✓ Sorted!
```

## TypeScript Implementation

```ts
export function bubbleSort<T>(arr: T[]): T[] {
  const result = [...arr] // Create a copy to avoid mutating original
  const n = result.length
  
  for (let i = 0; i < n - 1; i++) {
    // Flag to optimize by detecting when array is already sorted
    let swapped = false
    
    // Last i elements are already in place
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Swap elements
        [result[j], result[j + 1]] = [result[j + 1], result[j]]
        swapped = true
      }
    }
    
    // If no swaps occurred, array is sorted
    if (!swapped) break
  }
  
  return result
}

// Example with custom comparator
export function bubbleSortBy<T>(
  arr: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  const result = [...arr]
  const n = result.length
  
  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    
    for (let j = 0; j < n - i - 1; j++) {
      if (compareFn(result[j], result[j + 1]) > 0) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]]
        swapped = true
      }
    }
    
    if (!swapped) break
  }
  
  return result
}
```

## Usage Examples

```ts
// Sort numbers
const numbers = [64, 34, 25, 12, 22, 11, 90]
console.log(bubbleSort(numbers))
// Output: [11, 12, 22, 25, 34, 64, 90]

// Sort strings
const words = ['banana', 'apple', 'cherry', 'date']
console.log(bubbleSort(words))
// Output: ['apple', 'banana', 'cherry', 'date']

// Sort objects by property
interface Person {
  name: string
  age: number
}

const people: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
]

const sortedByAge = bubbleSortBy(people, (a, b) => a.age - b.age)
console.log(sortedByAge)
// Output: [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]
```

## Complexity Analysis

### Time Complexity

- **Best Case: O(n)** - When the array is already sorted, the optimized version with the `swapped` flag will make only one pass
- **Average Case: O(n²)** - On average, needs to make n×n/2 comparisons
- **Worst Case: O(n²)** - When the array is reverse sorted, maximum swaps are needed

### Space Complexity

- **O(1)** - Only uses a constant amount of extra space (the `swapped` flag and loop variables)
- Note: Our implementation creates a copy, using O(n) space. An in-place version would use O(1).

### Number of Operations

For an array of size n:
- **Comparisons**: At most n(n-1)/2 ≈ n²/2
- **Swaps**: At most n(n-1)/2 ≈ n²/2 (worst case)

## Advantages

1. **Simple to understand and implement** - Great for learning
2. **Stable** - Maintains relative order of equal elements
3. **In-place** - Doesn't require extra memory (in the in-place version)
4. **Adaptive** - Efficient on nearly sorted data with optimization

## Disadvantages

1. **Poor performance on large datasets** - O(n²) time complexity
2. **Many swaps** - Can be expensive if swap operations are costly
3. **Not practical for production** - Better algorithms exist for most use cases

## Optimizations

### 1. Early Termination
The `swapped` flag allows the algorithm to stop early if no swaps occur in a pass.

### 2. Reducing Range
After each pass, we reduce the range by one since the largest element is in place.

### 3. Cocktail Shaker Sort
A variation that sorts in both directions, which can be more efficient for certain inputs.

```ts
export function cocktailShakerSort<T>(arr: T[]): T[] {
  const result = [...arr]
  let start = 0
  let end = result.length - 1
  let swapped = true
  
  while (swapped) {
    swapped = false
    
    // Forward pass
    for (let i = start; i < end; i++) {
      if (result[i] > result[i + 1]) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]]
        swapped = true
      }
    }
    
    if (!swapped) break
    
    swapped = false
    end--
    
    // Backward pass
    for (let i = end - 1; i >= start; i--) {
      if (result[i] > result[i + 1]) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]]
        swapped = true
      }
    }
    
    start++
  }
  
  return result
}
```

## When to Use Bubble Sort

**Use Bubble Sort when:**
- Learning sorting algorithms
- Dataset is very small (< 10 elements)
- Array is nearly sorted
- Simplicity is more important than performance
- Educational purposes or demonstrations

**Avoid Bubble Sort when:**
- Performance matters
- Dataset is large (> 100 elements)
- You need guaranteed performance
- Production code (use built-in sort or better algorithms)

## Comparison with Other Algorithms

| Aspect | Bubble Sort | Insertion Sort | Selection Sort |
|--------|-------------|----------------|----------------|
| Best Case | O(n) | O(n) | O(n²) |
| Average Case | O(n²) | O(n²) | O(n²) |
| Worst Case | O(n²) | O(n²) | O(n²) |
| Swaps | Many | Fewer | Fewest |
| Stable | ✓ | ✓ | ✗ |
| Adaptive | ✓ | ✓ | ✗ |

## Practice Problems

1. Implement Bubble Sort without using the swapped flag optimization
2. Count the number of comparisons and swaps for a given array
3. Implement a descending order Bubble Sort
4. Modify Bubble Sort to sort only the first k elements
5. Implement the Cocktail Shaker Sort variation

## Key Takeaways

- Bubble Sort is simple but inefficient for large datasets
- The algorithm is stable and in-place
- Optimization with early termination improves best-case performance
- Better suited for learning than production use
- Understanding Bubble Sort helps grasp fundamental sorting concepts
