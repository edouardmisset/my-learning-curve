---
date: 2025-11-16
title: "Merge Sort"
description: "Understanding Merge Sort algorithm with implementation and complexity analysis."
tags: ["algorithms", "sorting", "merge-sort", "divide-and-conquer"]
prev:
  link: /my-learning-curve/learn/tutorials/sorting-algorithms/03-insertion-sort
  label: Insertion Sort
next: 
  link: /my-learning-curve/learn/tutorials/sorting-algorithms/05-quick-sort
  label: Quick Sort
---

## What is Merge Sort?

Merge Sort is an efficient, stable sorting algorithm that uses the divide-and-conquer paradigm. It divides the array into two halves, recursively sorts them, and then merges the sorted halves back together.

This algorithm guarantees O(n log n) time complexity in all cases, making it predictable and reliable.

## How It Works

1. **Divide**: Split the array into two halves
2. **Conquer**: Recursively sort each half
3. **Combine**: Merge the two sorted halves into one sorted array

The recursion continues until subarrays of size 1 are reached (trivially sorted).

## Visual Example

```
Initial: [38, 27, 43, 3, 9, 82, 10]

Divide Phase:
[38, 27, 43, 3, 9, 82, 10]
      ↙              ↘
[38, 27, 43]    [3, 9, 82, 10]
   ↙     ↘         ↙       ↘
[38] [27, 43]   [3, 9]  [82, 10]
     ↙    ↘     ↙  ↘    ↙    ↘
   [27]  [43] [3] [9] [82]  [10]

Merge Phase:
   [27]  [43] [3] [9] [82]  [10]
     ↘    ↙     ↘  ↙    ↘    ↙
    [27, 43]   [3, 9]  [10, 82]
        ↘        ↙         ↙
      [3, 9, 27, 43]  [10, 82]
              ↘          ↙
        [3, 9, 10, 27, 43, 82]

Final: [3, 9, 10, 27, 38, 43, 82] ✓ Sorted!
```

## TypeScript Implementation

```ts
export function mergeSort<T>(arr: T[]): T[] {
  // Base case: arrays of length 0 or 1 are already sorted
  if (arr.length <= 1) {
    return [...arr]
  }
  
  // Divide
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  
  // Conquer (recursive calls)
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)
  
  // Combine
  return merge(sortedLeft, sortedRight)
}

function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = []
  let leftIndex = 0
  let rightIndex = 0
  
  // Merge elements in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  
  // Add remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// With custom comparator
export function mergeSortBy<T>(
  arr: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  if (arr.length <= 1) {
    return [...arr]
  }
  
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  
  const sortedLeft = mergeSortBy(left, compareFn)
  const sortedRight = mergeSortBy(right, compareFn)
  
  return mergeBy(sortedLeft, sortedRight, compareFn)
}

function mergeBy<T>(
  left: T[],
  right: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  const result: T[] = []
  let leftIndex = 0
  let rightIndex = 0
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (compareFn(left[leftIndex], right[rightIndex]) <= 0) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
```

## Usage Examples

```ts
// Sort numbers
const numbers = [38, 27, 43, 3, 9, 82, 10]
console.log(mergeSort(numbers))
// Output: [3, 9, 10, 27, 38, 43, 82]

// Sort strings
const words = ['banana', 'apple', 'cherry', 'date', 'elderberry']
console.log(mergeSort(words))
// Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

// Sort objects
interface Task {
  name: string
  priority: number
  date: Date
}

const tasks: Task[] = [
  { name: 'Task A', priority: 2, date: new Date('2024-01-15') },
  { name: 'Task B', priority: 1, date: new Date('2024-01-10') },
  { name: 'Task C', priority: 2, date: new Date('2024-01-12') }
]

// Sort by priority, then by date (stable sort preserves date order)
const sortedTasks = mergeSortBy(tasks, (a, b) => {
  if (a.priority !== b.priority) {
    return a.priority - b.priority
  }
  return a.date.getTime() - b.date.getTime()
})
```

## Complexity Analysis

### Time Complexity

- **Best Case: O(n log n)** - Consistent regardless of input
- **Average Case: O(n log n)** - Always divides and merges the same way
- **Worst Case: O(n log n)** - Guaranteed performance

The time complexity comes from:
- log n levels in the recursion tree (dividing by 2 each time)
- n operations at each level (merging)
- Total: O(n log n)

### Space Complexity

- **O(n)** - Requires additional memory for temporary arrays during merging
- Recursion stack: O(log n) space

### Recurrence Relation

T(n) = 2T(n/2) + O(n)

This solves to O(n log n) using the Master Theorem.

## Advantages

1. **Guaranteed O(n log n)** - Predictable performance in all cases
2. **Stable** - Maintains relative order of equal elements
3. **Parallelizable** - Can easily sort subarrays in parallel
4. **Predictable** - Performance doesn't depend on input distribution
5. **Good for linked lists** - Works efficiently with linked structures
6. **External sorting** - Ideal for sorting large datasets that don't fit in memory

## Disadvantages

1. **Extra space** - Requires O(n) additional memory
2. **Not in-place** - Creates new arrays during merging
3. **Slower for small arrays** - Higher constant factors than simple sorts
4. **Cache performance** - Not as cache-friendly as Quick Sort

## Why Merge Sort is Stable

During merging, when elements are equal, we always take from the left subarray first:

```ts
if (left[leftIndex] <= right[rightIndex]) {  // Note: <=, not <
  result.push(left[leftIndex])
  leftIndex++
}
```

This preserves the original relative order of equal elements.

## Optimizations

### 1. Use Insertion Sort for Small Subarrays

```ts
export function optimizedMergeSort<T>(arr: T[], threshold = 10): T[] {
  if (arr.length <= threshold) {
    return insertionSort(arr)  // Use Insertion Sort for small arrays
  }
  
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  
  return merge(
    optimizedMergeSort(left, threshold),
    optimizedMergeSort(right, threshold)
  )
}
```

### 2. In-Place Merge Sort

Reduce space complexity with in-place merging (more complex):

```ts
export function inPlaceMergeSort<T>(arr: T[]): T[] {
  const result = [...arr]
  mergeSortInPlace(result, 0, result.length - 1)
  return result
}

function mergeSortInPlace<T>(arr: T[], left: number, right: number): void {
  if (left >= right) return
  
  const mid = Math.floor((left + right) / 2)
  mergeSortInPlace(arr, left, mid)
  mergeSortInPlace(arr, mid + 1, right)
  mergeInPlace(arr, left, mid, right)
}

function mergeInPlace<T>(arr: T[], left: number, mid: number, right: number): void {
  const leftArr = arr.slice(left, mid + 1)
  const rightArr = arr.slice(mid + 1, right + 1)
  
  let i = 0, j = 0, k = left
  
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++]
    } else {
      arr[k++] = rightArr[j++]
    }
  }
  
  while (i < leftArr.length) arr[k++] = leftArr[i++]
  while (j < rightArr.length) arr[k++] = rightArr[j++]
}
```

### 3. Natural Merge Sort

Take advantage of existing sorted runs in the input.

## When to Use Merge Sort

**Use Merge Sort when:**
- You need guaranteed O(n log n) performance
- Stability is required
- Sorting linked lists
- External sorting (data doesn't fit in memory)
- Parallel processing is available
- Worst-case performance matters

**Avoid Merge Sort when:**
- Memory is very limited (O(n) extra space)
- Working with small datasets (overhead not worth it)
- In-place sorting is required
- Cache performance is critical

## Bottom-Up Merge Sort (Iterative)

An iterative version that avoids recursion:

```ts
export function bottomUpMergeSort<T>(arr: T[]): T[] {
  const result = [...arr]
  const n = result.length
  
  // Start with subarrays of size 1, double size in each iteration
  for (let size = 1; size < n; size *= 2) {
    // Merge adjacent subarrays of current size
    for (let start = 0; start < n - size; start += 2 * size) {
      const mid = start + size - 1
      const end = Math.min(start + 2 * size - 1, n - 1)
      
      const left = result.slice(start, mid + 1)
      const right = result.slice(mid + 1, end + 1)
      const merged = merge(left, right)
      
      for (let i = 0; i < merged.length; i++) {
        result[start + i] = merged[i]
      }
    }
  }
  
  return result
}
```

## Comparison with Other Efficient Sorts

| Aspect | Merge Sort | Quick Sort | Heap Sort |
|--------|-----------|-----------|-----------|
| Best Case | O(n log n) | O(n log n) | O(n log n) |
| Average | O(n log n) | O(n log n) | O(n log n) |
| Worst Case | O(n log n) | O(n²) | O(n log n) |
| Space | O(n) | O(log n) | O(1) |
| Stable | ✓ | ✗ | ✗ |
| In-place | ✗ | ✓ | ✓ |
| Cache-friendly | Medium | High | Medium |

## Practice Problems

1. Implement bottom-up (iterative) Merge Sort
2. Count the number of inversions using Merge Sort
3. Merge k sorted arrays using Merge Sort principle
4. Implement in-place Merge Sort
5. Implement 3-way Merge Sort (divide into 3 parts)
6. Use Merge Sort to find the median of an unsorted array

## Key Takeaways

- Merge Sort guarantees O(n log n) in all cases
- Stable algorithm that preserves order of equal elements
- Requires O(n) extra space for merging
- Best choice when stability and predictable performance are needed
- Foundation for Timsort (Python's built-in sort)
- Excellent for external sorting and parallel processing
- Divide-and-conquer is a powerful algorithmic paradigm
