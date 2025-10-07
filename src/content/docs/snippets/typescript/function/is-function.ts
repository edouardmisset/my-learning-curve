/**
 * Checks if the provided value is a function.
 *
 * @param {unknown} maybeFunction - The value to check.
 * @returns {boolean} Returns `true` if `maybeFunction` is a function, else `false`.
 *
 * @example
 * isFunction(function() {});
 * // => true
 *
 * @example
 * isFunction('not a function');
 * // => false
 */

// biome-ignore lint/complexity/noBannedTypes: this is a very generic function
export const isFunction = (maybeFunction: unknown): maybeFunction is Function =>
  typeof maybeFunction === 'function'
