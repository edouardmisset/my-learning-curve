/**
 * Bubble Sort Algorithm
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
 */

export function bubbleSort<T>(arr: T[]): T[] {
  const result = [...arr]
  const n = result.length

  for (let i = 0; i < n - 1; i++) {
    let swapped = false

    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        ;[result[j], result[j + 1]] = [result[j + 1], result[j]]
        swapped = true
      }
    }

    if (!swapped) break
  }

  return result
}

export function bubbleSortBy<T>(
  arr: T[],
  compareFn: (a: T, b: T) => number,
): T[] {
  const result = [...arr]
  const n = result.length

  for (let i = 0; i < n - 1; i++) {
    let swapped = false

    for (let j = 0; j < n - i - 1; j++) {
      if (compareFn(result[j], result[j + 1]) > 0) {
        ;[result[j], result[j + 1]] = [result[j + 1], result[j]]
        swapped = true
      }
    }

    if (!swapped) break
  }

  return result
}

/**
 * Cocktail Shaker Sort (Bidirectional Bubble Sort)
 * An optimized version that sorts in both directions
 */
export function cocktailShakerSort<T>(arr: T[]): T[] {
  const result = [...arr]
  let start = 0
  let end = result.length - 1
  let swapped = true

  while (swapped) {
    swapped = false

    for (let i = start; i < end; i++) {
      if (result[i] > result[i + 1]) {
        ;[result[i], result[i + 1]] = [result[i + 1], result[i]]
        swapped = true
      }
    }

    if (!swapped) break

    swapped = false
    end--

    for (let i = end - 1; i >= start; i--) {
      if (result[i] > result[i + 1]) {
        ;[result[i], result[i + 1]] = [result[i + 1], result[i]]
        swapped = true
      }
    }

    start++
  }

  return result
}
