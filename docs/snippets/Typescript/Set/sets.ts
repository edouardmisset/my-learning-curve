/**
 * Returns the elements that are common to both arrays.
 *
 * This function finds the elements that are in both arrays.
 * It uses the `filter` method to check that each element of the first array is also in the second array.
 *
 * @template T The type of the elements in the arrays. It can be any type.
 *
 * @param {T[]} leftArray The first array.
 * @param {T[]} rightArray The second array.
 *
 * @returns {T[]} An array that contains all elements that are in both arrays.
 *
 * @example
 * const array1 = [1, 2, 3];
 * const array2 = [2, 3, 4];
 * const result = commonElements(array1, array2); // [2, 3]
 */
export const commonElements = <T>(leftArray: T[], rightArray: T[]): T[] =>
  leftArray.filter(item => new Set(rightArray).has(item))

/**
 * @description Alias for the {@link commonElements} function.
 */
export const intersection = commonElements

/**
 * Returns the unique elements from the combination of two arrays.
 *
 * This function combines two arrays and only keeps the unique elements.
 * It uses the `Set` object to remove duplicates.
 *
 * @template T The type of the elements in the arrays. It can be any type.
 *
 * @param {T[]} leftArray The first array.
 * @param {T[]} rightArray The second array.
 *
 * @returns {T[]} An array that contains all unique elements from both arrays.
 *
 * @example
 * const array1 = [1, 2, 3];
 * const array2 = [2, 3, 4];
 * const result = mergeUnique(array1, array2); // [1, 2, 3, 4]
 */
export const mergeUnique = <T>(leftArray: T[], rightArray: T[]): T[] =>
  Array.from(new Set([...leftArray, ...rightArray]))

/**
 * @description Alias for the {@link mergeUnique} function.
 */
export const union = mergeUnique

/**
 * Returns the elements that are unique to the first array.
 *
 * This function finds the elements that are in the first array but not in any of the others.
 * It uses the `some` method to check that each element of the first array is not in any of the other arrays.
 *
 * @template T The type of the elements in the arrays. It can be any type.
 *
 * @param {T[]} firstArray The first array.
 * @param {...T[][]} otherArrays The other arrays.
 *
 * @returns {T[]} An array that contains all elements that are in the first array but not in any of the other arrays.
 *
 * @example
 * const array1 = [1, 2, 3];
 * const array2 = [2, 3, 4];
 * const array3 = [3, 4, 5];
 * const result = uniqueInFirst(array1, array2, array3); // [1]
 */
export const uniqueInFirst = <T>(firstArray: T[], ...otherArrays: T[][]): T[] =>
  firstArray.filter(
    item => !otherArrays.some(array => new Set(array).has(item)),
  )

/**
 * @description Alias for the {@link uniqueInFirst} function.
 */
export const setDifference = uniqueInFirst

/**
 * Returns the unique elements from n arrays.
 *
 * This function uses the `setDifference` function to find the elements that are in one array but not in the others.
 * It uses the `reduce` method to apply this process to each array in turn, starting with the first two arrays and then using their symmetric difference as the starting point for the next call.
 *
 * @template T The type of the elements in the arrays. It can be any type.
 *
 * @param {...T[][]} arrays The arrays to find the unique elements of.
 *
 * @returns {T[]} An array that contains all elements that are in exactly one of the input arrays.
 *
 * @example
 * const array1 = [1, 2, 3];
 * const array2 = [2, 3, 4];
 * const array3 = [3, 4, 5];
 * const result = uniqueElements(array1, array2, array3); // [1, 5]
 */
export const uniqueElements = <T>(...arrays: T[][]): T[] =>
  arrays.reduce((previousArray, currentArray) => [
    ...uniqueInFirst(previousArray, currentArray),
    ...uniqueInFirst(currentArray, previousArray),
  ])

/**
 * @description Alias for the {@link uniqueElements} function.
 */
export const symmetricDifference = uniqueElements
