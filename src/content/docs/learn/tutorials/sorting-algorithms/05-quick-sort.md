---
date: 2025-11-16
title: "Quick Sort"
description: "Understanding Quick Sort algorithm with implementation and complexity analysis."
tags: ["algorithms", "sorting", "quick-sort", "divide-and-conquer"]
prev:
  link: /my-learning-curve/learn/tutorials/sorting-algorithms/04-merge-sort
  label: Merge Sort
next: 
  link: /my-learning-curve/learn/tutorials/sorting-algorithms/06-heap-sort
  label: Heap Sort
---

## What is Quick Sort?

Quick Sort is a highly efficient, in-place sorting algorithm that uses the divide-and-conquer paradigm. It works by selecting a 'pivot' element and partitioning the array so that elements smaller than the pivot come before it, and larger elements come after it.

Quick Sort is often faster in practice than other O(n log n) algorithms, making it one of the most widely used sorting algorithms.

## How It Works

1. **Choose a pivot** - Select an element from the array
2. **Partition** - Rearrange array so elements < pivot are on left, elements > pivot are on right
3. **Recursively sort** - Apply Quick Sort to left and right partitions
4. **Combine** - No work needed, array is sorted in place

## Visual Example

```
Initial: [10, 7, 8, 9, 1, 5]
Pivot: 5 (last element)

Partition:
[10, 7, 8, 9, 1, 5]
 ^i              ^pivot
[1, 7, 8, 9, 10, 5]  (swap 10 and 1)
    ^i
[1, 5, 8, 9, 10, 7]  (place pivot)
    ^sorted

Recursion on [1] and [8, 9, 10, 7]:
  [1] - already sorted
  [8, 9, 10, 7] - pivot: 7
    [7, 9, 10, 8]  (place pivot)
        ^sorted
    Recursion on [] and [9, 10, 8]:
      [9, 10, 8] - pivot: 8
        [8, 10, 9]  (place pivot)
            ^sorted
        Recursion on [] and [10, 9]:
          [10, 9] - pivot: 9
            [9, 10]  (place pivot)
                ^sorted

Final: [1, 5, 7, 8, 9, 10] ✓ Sorted!
```

## TypeScript Implementation

### Basic Implementation

```ts
export function quickSort<T>(arr: T[]): T[] {
  const result = [...arr]
  quickSortHelper(result, 0, result.length - 1)
  return result
}

function quickSortHelper<T>(arr: T[], low: number, high: number): void {
  if (low < high) {
    // Partition and get pivot index
    const pivotIndex = partition(arr, low, high)
    
    // Recursively sort elements before and after partition
    quickSortHelper(arr, low, pivotIndex - 1)
    quickSortHelper(arr, pivotIndex + 1, high)
  }
}

function partition<T>(arr: T[], low: number, high: number): number {
  const pivot = arr[high]  // Choose last element as pivot
  let i = low - 1  // Index of smaller element
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++
      [arr[i], arr[j]] = [arr[j], arr[i]]  // Swap
    }
  }
  
  // Place pivot in correct position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
  return i + 1
}
```

### With Custom Comparator

```ts
export function quickSortBy<T>(
  arr: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  const result = [...arr]
  quickSortByHelper(result, 0, result.length - 1, compareFn)
  return result
}

function quickSortByHelper<T>(
  arr: T[],
  low: number,
  high: number,
  compareFn: (a: T, b: T) => number
): void {
  if (low < high) {
    const pivotIndex = partitionBy(arr, low, high, compareFn)
    quickSortByHelper(arr, low, pivotIndex - 1, compareFn)
    quickSortByHelper(arr, pivotIndex + 1, high, compareFn)
  }
}

function partitionBy<T>(
  arr: T[],
  low: number,
  high: number,
  compareFn: (a: T, b: T) => number
): number {
  const pivot = arr[high]
  let i = low - 1
  
  for (let j = low; j < high; j++) {
    if (compareFn(arr[j], pivot) < 0) {
      i++
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
  return i + 1
}
```

## Usage Examples

```ts
// Sort numbers
const numbers = [10, 7, 8, 9, 1, 5]
console.log(quickSort(numbers))
// Output: [1, 5, 7, 8, 9, 10]

// Sort with custom comparator (descending)
const descending = quickSortBy(numbers, (a, b) => b - a)
console.log(descending)
// Output: [10, 9, 8, 7, 5, 1]

// Sort objects
interface Employee {
  name: string
  salary: number
  department: string
}

const employees: Employee[] = [
  { name: 'Alice', salary: 80000, department: 'Engineering' },
  { name: 'Bob', salary: 60000, department: 'Sales' },
  { name: 'Charlie', salary: 90000, department: 'Engineering' }
]

const sortedBySalary = quickSortBy(employees, (a, b) => b.salary - a.salary)
```

## Complexity Analysis

### Time Complexity

- **Best Case: O(n log n)** - Pivot divides array evenly each time
- **Average Case: O(n log n)** - Expected with random pivots
- **Worst Case: O(n²)** - Pivot is always smallest/largest (e.g., sorted array with last element as pivot)

### Space Complexity

- **O(log n)** - Space for recursive call stack (best/average case)
- **O(n)** - In worst case, recursion depth can be n

### Recurrence Relations

- Best/Average: T(n) = 2T(n/2) + O(n) → O(n log n)
- Worst: T(n) = T(n-1) + O(n) → O(n²)

## Advantages

1. **Fast in practice** - Often faster than Merge Sort due to cache efficiency
2. **In-place** - Only O(log n) extra space for recursion
3. **Cache-friendly** - Good locality of reference
4. **Tail recursion** - Can be optimized by compilers
5. **Parallelizable** - Partitions can be sorted independently

## Disadvantages

1. **Unstable** - Doesn't preserve relative order of equal elements
2. **Worst case O(n²)** - Poor pivot selection leads to bad performance
3. **Not adaptive** - Doesn't take advantage of existing order
4. **Recursive** - Stack overflow possible with poor implementation

## Pivot Selection Strategies

The choice of pivot significantly affects performance:

### 1. Last Element (Basic)

```ts
const pivot = arr[high]
```
- Simple but worst case O(n²) on sorted arrays

### 2. First Element

```ts
const pivot = arr[low]
```
- Also O(n²) on sorted arrays

### 3. Random Element

```ts
function randomPartition<T>(arr: T[], low: number, high: number): number {
  const randomIndex = low + Math.floor(Math.random() * (high - low + 1))
  [arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]]
  return partition(arr, low, high)
}
```
- Expected O(n log n) performance
- Avoids worst case on sorted data

### 4. Median of Three

```ts
function medianOfThree<T>(arr: T[], low: number, high: number): number {
  const mid = Math.floor((low + high) / 2)
  
  // Sort low, mid, high
  if (arr[mid] < arr[low]) [arr[low], arr[mid]] = [arr[mid], arr[low]]
  if (arr[high] < arr[low]) [arr[low], arr[high]] = [arr[high], arr[low]]
  if (arr[high] < arr[mid]) [arr[mid], arr[high]] = [arr[high], arr[mid]]
  
  // Place median at high position
  [arr[mid], arr[high]] = [arr[high], arr[mid]]
  return partition(arr, low, high)
}
```
- Better than random for many inputs
- Avoids worst case on sorted/reverse-sorted data

## Optimizations

### 1. Hybrid with Insertion Sort

For small subarrays, use Insertion Sort:

```ts
function optimizedQuickSort<T>(arr: T[], threshold = 10): T[] {
  const result = [...arr]
  quickSortOptimized(result, 0, result.length - 1, threshold)
  return result
}

function quickSortOptimized<T>(
  arr: T[],
  low: number,
  high: number,
  threshold: number
): void {
  if (high - low < threshold) {
    insertionSortRange(arr, low, high)
    return
  }
  
  if (low < high) {
    const pivotIndex = partition(arr, low, high)
    quickSortOptimized(arr, low, pivotIndex - 1, threshold)
    quickSortOptimized(arr, pivotIndex + 1, high, threshold)
  }
}
```

### 2. Three-Way Partitioning (Dutch National Flag)

Handles duplicate elements efficiently:

```ts
function quickSort3Way<T>(arr: T[]): T[] {
  const result = [...arr]
  quickSort3WayHelper(result, 0, result.length - 1)
  return result
}

function quickSort3WayHelper<T>(arr: T[], low: number, high: number): void {
  if (low >= high) return
  
  const [lt, gt] = partition3Way(arr, low, high)
  quickSort3WayHelper(arr, low, lt - 1)
  quickSort3WayHelper(arr, gt + 1, high)
}

function partition3Way<T>(arr: T[], low: number, high: number): [number, number] {
  const pivot = arr[low]
  let lt = low      // arr[low..lt-1] < pivot
  let i = low + 1   // arr[lt..i-1] == pivot
  let gt = high     // arr[gt+1..high] > pivot
  
  while (i <= gt) {
    if (arr[i] < pivot) {
      [arr[lt], arr[i]] = [arr[i], arr[lt]]
      lt++
      i++
    } else if (arr[i] > pivot) {
      [arr[i], arr[gt]] = [arr[gt], arr[i]]
      gt--
    } else {
      i++
    }
  }
  
  return [lt, gt]
}
```

### 3. Tail Recursion Elimination

Reduce stack space:

```ts
function quickSortTailRecursive<T>(arr: T[]): T[] {
  const result = [...arr]
  let low = 0
  let high = result.length - 1
  
  while (low < high) {
    const pivotIndex = partition(result, low, high)
    
    // Recurse on smaller partition, iterate on larger
    if (pivotIndex - low < high - pivotIndex) {
      quickSortHelper(result, low, pivotIndex - 1)
      low = pivotIndex + 1
    } else {
      quickSortHelper(result, pivotIndex + 1, high)
      high = pivotIndex - 1
    }
  }
  
  return result
}
```

## When to Use Quick Sort

**Use Quick Sort when:**
- Average-case performance is acceptable
- In-place sorting is important
- Cache performance matters
- Working with large datasets
- Memory is limited
- General-purpose sorting

**Avoid Quick Sort when:**
- Stability is required
- Worst-case O(n log n) is mandatory
- Working with many duplicates (use 3-way partitioning)
- Stack space is very limited

## Real-World Usage

Quick Sort is used in practice:

1. **C++ STL**: Part of Introsort (Quick Sort + Heap Sort + Insertion Sort)
2. **Java**: Dual-Pivot Quick Sort for primitive arrays
3. **Unix sort**: Uses Quick Sort for in-memory sorting
4. **Many libraries**: As the default in-place sorting algorithm

## Comparison with Other Sorts

| Aspect | Quick Sort | Merge Sort | Heap Sort |
|--------|-----------|-----------|-----------|
| Average | O(n log n) | O(n log n) | O(n log n) |
| Worst Case | O(n²) | O(n log n) | O(n log n) |
| Space | O(log n) | O(n) | O(1) |
| Stable | ✗ | ✓ | ✗ |
| In-place | ✓ | ✗ | ✓ |
| Cache | Excellent | Good | Fair |
| Practical Speed | Fastest | Fast | Moderate |

## Practice Problems

1. Implement Quick Sort with random pivot selection
2. Implement the Dutch National Flag (3-way) partitioning
3. Find the kth smallest element using Quick Select
4. Count the number of comparisons for given input
5. Implement iterative Quick Sort using a stack
6. Handle arrays with many duplicate elements efficiently

## Key Takeaways

- Quick Sort is typically the fastest sorting algorithm in practice
- Average case O(n log n), but worst case O(n²)
- In-place algorithm with excellent cache performance
- Choice of pivot is critical for performance
- Not stable - can change order of equal elements
- Foundation for many real-world sorting implementations
- Can be optimized with hybrid approaches and smart pivot selection
- Three-way partitioning handles duplicates efficiently
