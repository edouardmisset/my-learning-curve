/**
 * Heap Sort Algorithm
 * 
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
 * 
 * Space Complexity: O(1)
 * 
 * Stable: No
 * In-place: Yes
 * 
 * Best used when: Guaranteed O(n log n) with O(1) space is needed
 */

export function heapSort<T>(arr: T[]): T[] {
  const result = [...arr]
  const n = result.length
  
  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(result, n, i)
  }
  
  // Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    [result[0], result[i]] = [result[i], result[0]]
    heapify(result, i, 0)
  }
  
  return result
}

function heapify<T>(arr: T[], heapSize: number, rootIndex: number): void {
  let largest = rootIndex
  const left = 2 * rootIndex + 1
  const right = 2 * rootIndex + 2
  
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left
  }
  
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right
  }
  
  if (largest !== rootIndex) {
    [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]]
    heapify(arr, heapSize, largest)
  }
}

export function heapSortBy<T>(
  arr: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  const result = [...arr]
  const n = result.length
  
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyBy(result, n, i, compareFn)
  }
  
  for (let i = n - 1; i > 0; i--) {
    [result[0], result[i]] = [result[i], result[0]]
    heapifyBy(result, i, 0, compareFn)
  }
  
  return result
}

function heapifyBy<T>(
  arr: T[],
  heapSize: number,
  rootIndex: number,
  compareFn: (a: T, b: T) => number
): void {
  let largest = rootIndex
  const left = 2 * rootIndex + 1
  const right = 2 * rootIndex + 2
  
  if (left < heapSize && compareFn(arr[left], arr[largest]) > 0) {
    largest = left
  }
  
  if (right < heapSize && compareFn(arr[right], arr[largest]) > 0) {
    largest = right
  }
  
  if (largest !== rootIndex) {
    [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]]
    heapifyBy(arr, heapSize, largest, compareFn)
  }
}

/**
 * Iterative Heapify (avoids recursion)
 */
function heapifyIterative<T>(arr: T[], heapSize: number, rootIndex: number): void {
  let current = rootIndex
  
  while (true) {
    let largest = current
    const left = 2 * current + 1
    const right = 2 * current + 2
    
    if (left < heapSize && arr[left] > arr[largest]) {
      largest = left
    }
    
    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right
    }
    
    if (largest === current) break
    
    [arr[current], arr[largest]] = [arr[largest], arr[current]]
    current = largest
  }
}

/**
 * Find K largest elements using heap
 */
export function findKLargest<T>(arr: T[], k: number): T[] {
  const heap = [...arr]
  const n = heap.length
  
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(heap, n, i)
  }
  
  const result: T[] = []
  let heapSize = n
  
  for (let i = 0; i < k && heapSize > 0; i++) {
    result.push(heap[0])
    ;[heap[0], heap[heapSize - 1]] = [heap[heapSize - 1], heap[0]]
    heapSize--
    heapify(heap, heapSize, 0)
  }
  
  return result
}
