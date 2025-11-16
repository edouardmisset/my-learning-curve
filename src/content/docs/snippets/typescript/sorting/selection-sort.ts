/**
 * Selection Sort Algorithm
 * 
 * Time Complexity:
 * - Best: O(n²)
 * - Average: O(n²)
 * - Worst: O(n²)
 * 
 * Space Complexity: O(1)
 * 
 * Stable: No
 * In-place: Yes
 * 
 * Best used when: Write operations are expensive (minimizes swaps)
 */

export function selectionSort<T>(arr: T[]): T[] {
  const result = [...arr]
  const n = result.length
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    
    for (let j = i + 1; j < n; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j
      }
    }
    
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]]
    }
  }
  
  return result
}

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

/**
 * Double Selection Sort
 * Finds both minimum and maximum in each pass
 */
export function doubleSelectionSort<T>(arr: T[]): T[] {
  const result = [...arr]
  let left = 0
  let right = result.length - 1
  
  while (left < right) {
    let minIndex = left
    let maxIndex = left
    
    for (let i = left; i <= right; i++) {
      if (result[i] < result[minIndex]) minIndex = i
      if (result[i] > result[maxIndex]) maxIndex = i
    }
    
    if (maxIndex === left) {
      maxIndex = minIndex
    }
    
    if (minIndex !== left) {
      [result[left], result[minIndex]] = [result[minIndex], result[left]]
    }
    
    if (maxIndex !== right) {
      [result[right], result[maxIndex]] = [result[maxIndex], result[right]]
    }
    
    left++
    right--
  }
  
  return result
}
