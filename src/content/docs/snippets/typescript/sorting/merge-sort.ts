/**
 * Merge Sort Algorithm
 * 
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
 * 
 * Space Complexity: O(n)
 * 
 * Stable: Yes
 * In-place: No
 * 
 * Best used when: Stability is required or guaranteed O(n log n) is needed
 */

export function mergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return [...arr]
  }
  
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  
  return merge(mergeSort(left), mergeSort(right))
}

function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = []
  let leftIndex = 0
  let rightIndex = 0
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

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
  
  return mergeBy(
    mergeSortBy(left, compareFn),
    mergeSortBy(right, compareFn),
    compareFn
  )
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

/**
 * Bottom-Up Merge Sort (Iterative)
 * Avoids recursion by iteratively merging subarrays
 */
export function bottomUpMergeSort<T>(arr: T[]): T[] {
  const result = [...arr]
  const n = result.length
  
  for (let size = 1; size < n; size *= 2) {
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
