/**
 * Quick Sort Algorithm
 * 
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n²) with poor pivot selection
 * 
 * Space Complexity: O(log n) average, O(n) worst case
 * 
 * Stable: No
 * In-place: Yes
 * 
 * Best used when: Average-case performance is acceptable and in-place sorting is needed
 */

export function quickSort<T>(arr: T[]): T[] {
  const result = [...arr]
  quickSortHelper(result, 0, result.length - 1)
  return result
}

function quickSortHelper<T>(arr: T[], low: number, high: number): void {
  if (low < high) {
    const pivotIndex = partition(arr, low, high)
    quickSortHelper(arr, low, pivotIndex - 1)
    quickSortHelper(arr, pivotIndex + 1, high)
  }
}

function partition<T>(arr: T[], low: number, high: number): number {
  const pivot = arr[high]
  let i = low - 1
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
  return i + 1
}

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

/**
 * Quick Sort with Random Pivot
 * Improves average case by avoiding worst-case scenarios
 */
export function quickSortRandom<T>(arr: T[]): T[] {
  const result = [...arr]
  quickSortRandomHelper(result, 0, result.length - 1)
  return result
}

function quickSortRandomHelper<T>(arr: T[], low: number, high: number): void {
  if (low < high) {
    const pivotIndex = randomPartition(arr, low, high)
    quickSortRandomHelper(arr, low, pivotIndex - 1)
    quickSortRandomHelper(arr, pivotIndex + 1, high)
  }
}

function randomPartition<T>(arr: T[], low: number, high: number): number {
  const randomIndex = low + Math.floor(Math.random() * (high - low + 1))
  ;[arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]]
  return partition(arr, low, high)
}

/**
 * Three-Way Quick Sort (Dutch National Flag)
 * Efficient for arrays with many duplicate elements
 */
export function quickSort3Way<T>(arr: T[]): T[] {
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
  let lt = low
  let i = low + 1
  let gt = high
  
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
