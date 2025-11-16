/**
 * Insertion Sort Algorithm
 * 
 * Time Complexity:
 * - Best: O(n) when array is already sorted
 * - Average: O(n²)
 * - Worst: O(n²) when array is reverse sorted
 * 
 * Space Complexity: O(1)
 * 
 * Stable: Yes
 * In-place: Yes
 * Adaptive: Yes
 * 
 * Best used when: Dataset is small or nearly sorted
 */

export function insertionSort<T>(arr: T[]): T[] {
  const result = [...arr]
  const n = result.length
  
  for (let i = 1; i < n; i++) {
    const key = result[i]
    let j = i - 1
    
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j]
      j--
    }
    
    result[j + 1] = key
  }
  
  return result
}

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

/**
 * Binary Insertion Sort
 * Uses binary search to find insertion position
 * Reduces comparisons but not shifts
 */
export function binaryInsertionSort<T>(arr: T[]): T[] {
  const result = [...arr]
  const n = result.length
  
  for (let i = 1; i < n; i++) {
    const key = result[i]
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
    
    for (let j = i - 1; j >= left; j--) {
      result[j + 1] = result[j]
    }
    result[left] = key
  }
  
  return result
}
