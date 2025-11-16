---
date: 2025-11-16
title: "Insertion Sort"
description: "Understanding Insertion Sort algorithm with implementation and complexity analysis."
tags: ["algorithms", "sorting", "insertion-sort"]
prev:
  link: /my-learning-curve/learn/tutorials/sorting-algorithms/02-selection-sort
  label: Selection Sort
next: 
  link: /my-learning-curve/learn/tutorials/sorting-algorithms/04-merge-sort
  label: Merge Sort
---

## What is Insertion Sort?

Insertion Sort builds the sorted array one element at a time by repeatedly taking the next element and inserting it into its correct position among the previously sorted elements. It works similarly to how you might sort playing cards in your hand.

This algorithm is efficient for small datasets and nearly sorted arrays, making it practical in many real-world scenarios.

## How It Works

1. Start with the second element (first element is already "sorted")
2. Compare it with elements in the sorted portion
3. Shift larger elements to the right
4. Insert the element in its correct position
5. Repeat for all remaining elements

## Visual Example

```
Initial: [5, 2, 4, 6, 1, 3]
         ^sorted

Step 1: Insert 2
[5, 2, 4, 6, 1, 3] → [2, 5, 4, 6, 1, 3]
    ^sorted

Step 2: Insert 4
[2, 5, 4, 6, 1, 3] → [2, 4, 5, 6, 1, 3]
       ^sorted

Step 3: Insert 6 (already in place)
[2, 4, 5, 6, 1, 3]
          ^sorted

Step 4: Insert 1
[2, 4, 5, 6, 1, 3] → [1, 2, 4, 5, 6, 3]
             ^sorted

Step 5: Insert 3
[1, 2, 4, 5, 6, 3] → [1, 2, 3, 4, 5, 6]
                ^sorted

Final: [1, 2, 3, 4, 5, 6] ✓ Sorted!
```

## TypeScript Implementation

```ts
export function insertionSort<T>(arr: T[]): T[] {
  const result = [...arr]
  const n = result.length
  
  for (let i = 1; i < n; i++) {
    const key = result[i]
    let j = i - 1
    
    // Shift elements greater than key to the right
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j]
      j--
    }
    
    // Insert key in its correct position
    result[j + 1] = key
  }
  
  return result
}

// With custom comparator
export function insertionSortBy<T>(
  arr: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  const result = [...arr]
  const n = result.length
  
  for (let i = 1; i < n; i++) {
    const key = result[i]
    let j = i - 1
    
    while (j >= 0 && compareFn(result[j], key) > 0) {
      result[j + 1] = result[j]
      j--
    }
    
    result[j + 1] = key
  }
  
  return result
}
```

## Usage Examples

```ts
// Sort numbers
const numbers = [5, 2, 4, 6, 1, 3]
console.log(insertionSort(numbers))
// Output: [1, 2, 3, 4, 5, 6]

// Sort strings
const words = ['dog', 'cat', 'zebra', 'ant']
console.log(insertionSort(words))
// Output: ['ant', 'cat', 'dog', 'zebra']

// Sort objects by multiple criteria
interface Student {
  name: string
  grade: number
  age: number
}

const students: Student[] = [
  { name: 'Alice', grade: 90, age: 20 },
  { name: 'Bob', grade: 85, age: 19 },
  { name: 'Charlie', grade: 90, age: 21 }
]

// First sort by age, then by grade (stable sort preserves age order)
const sortedByGrade = insertionSortBy(students, (a, b) => b.grade - a.grade)
```

## Complexity Analysis

### Time Complexity

- **Best Case: O(n)** - When array is already sorted, only n-1 comparisons needed
- **Average Case: O(n²)** - On average, each element moves halfway back
- **Worst Case: O(n²)** - When array is reverse sorted, maximum shifts needed

### Space Complexity

- **O(1)** - Only uses constant extra space for the key and index variables

### Number of Operations

For an array of size n:
- **Best Case**: n-1 comparisons, 0 swaps
- **Average Case**: ~n²/4 comparisons, ~n²/4 swaps
- **Worst Case**: n(n-1)/2 comparisons, n(n-1)/2 swaps

## Advantages

1. **Simple and intuitive** - Easy to understand and implement
2. **Stable** - Maintains relative order of equal elements
3. **In-place** - Requires only O(1) extra memory
4. **Adaptive** - Efficient for nearly sorted data (O(n) best case)
5. **Online** - Can sort data as it's received
6. **Good for small datasets** - Low overhead makes it practical for small n
7. **Good for nearly sorted data** - Performs well when input is partially ordered

## Disadvantages

1. **Quadratic worst case** - Poor performance on large unsorted datasets
2. **Many shifts** - In worst case, lots of element movement
3. **Not suitable for large datasets** - O(n²) becomes prohibitive

## Why Insertion Sort is Stable

Insertion Sort only shifts elements that are strictly greater than the key, never equal elements. This preserves the original relative order:

```
Input: [3a, 1, 3b, 2]

After sorting: [1, 2, 3a, 3b]  ← 3a still before 3b
```

## Optimizations

### Binary Insertion Sort

Use binary search to find insertion position (reduces comparisons but not shifts):

```ts
export function binaryInsertionSort<T>(arr: T[]): T[] {
  const result = [...arr]
  const n = result.length
  
  for (let i = 1; i < n; i++) {
    const key = result[i]
    
    // Binary search for insertion position
    let left = 0
    let right = i - 1
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (result[mid] > key) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    
    // Shift elements and insert
    for (let j = i - 1; j >= left; j--) {
      result[j + 1] = result[j]
    }
    result[left] = key
  }
  
  return result
}
```

### Sentinel Optimization

Place a sentinel value to eliminate boundary checks:

```ts
export function insertionSortWithSentinel<T>(arr: T[]): T[] {
  const result = [...arr]
  const n = result.length
  
  if (n <= 1) return result
  
  // Find minimum and move to first position (sentinel)
  let minIndex = 0
  for (let i = 1; i < n; i++) {
    if (result[i] < result[minIndex]) minIndex = i
  }
  [result[0], result[minIndex]] = [result[minIndex], result[0]]
  
  // Now we can skip boundary check (j >= 0)
  for (let i = 2; i < n; i++) {
    const key = result[i]
    let j = i - 1
    
    while (result[j] > key) {  // No need for j >= 0
      result[j + 1] = result[j]
      j--
    }
    
    result[j + 1] = key
  }
  
  return result
}
```

## When to Use Insertion Sort

**Use Insertion Sort when:**
- Dataset is small (< 50 elements)
- Array is nearly sorted
- Stability is required
- Sorting data as it arrives (online sorting)
- As part of hybrid algorithms (like Timsort)
- Low overhead is critical

**Avoid Insertion Sort when:**
- Dataset is large and random
- You need guaranteed O(n log n) performance
- Better alternatives are available

## Real-World Usage

Insertion Sort is used in practice:

1. **Timsort** - Python and Java use Insertion Sort for small subarrays
2. **Introsort** - C++ STL uses Insertion Sort for small partitions
3. **Online Algorithms** - Sorting streaming data
4. **Nearly Sorted Data** - When data is mostly ordered

## Comparison with Other Simple Sorts

| Aspect | Insertion Sort | Bubble Sort | Selection Sort |
|--------|---------------|-------------|----------------|
| Best Case | O(n) | O(n) | O(n²) |
| Average | O(n²) | O(n²) | O(n²) |
| Worst Case | O(n²) | O(n²) | O(n²) |
| Adaptive | ✓ | ✓ | ✗ |
| Stable | ✓ | ✓ | ✗ |
| Online | ✓ | ✗ | ✗ |
| Practical | ✓ | ✗ | Limited |

## Practice Problems

1. Implement Insertion Sort for a linked list
2. Count the number of shifts for a given array
3. Implement Binary Insertion Sort
4. Sort an array using Insertion Sort but in descending order
5. Use Insertion Sort to sort only the first k elements
6. Implement the sentinel optimization

## Key Takeaways

- Insertion Sort is efficient for small and nearly sorted arrays
- Best case O(n) when data is already sorted
- Stable and adaptive algorithm
- Works well for online sorting (data arriving in real-time)
- Used in practice as part of hybrid sorting algorithms
- Simple to implement with low overhead
- Better than Bubble and Selection Sort for most practical uses
