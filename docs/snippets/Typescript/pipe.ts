type UnaryFunction<T> = (arg: T) => T

/**
 * Composes any number of unary functions into a single unary function.
 * Functions are applied in right-to-left order.
 *
 * @param {...UnaryFunction<T>[]} functions - The unary functions to compose.
 * @returns {(data: T) => T} A function that, when called with an argument, applies the composed functions to the argument.
 *
 * @template T The type of the argument and return value.
 *
 * @example
 * const addOne = (x) => x + 1;
 * const double = (x) => x * 2;
 * const addOneThenDouble = compose(double, addOne);
 * const result = addOneThenDouble(5); // 12
 */
export const compose =
  <T>(...functions: UnaryFunction<T>[]) =>
  (data: T) =>
    functions.reduceRight((value, func) => func(value), data)

/**
 * Pipes any number of unary functions into a single unary function.
 * Functions are applied in left-to-right order.
 *
 * @param {...UnaryFunction<T>[]} functions - The unary functions to pipe.
 * @returns {(data: T) => T} A function that, when called with an argument, applies the piped functions to the argument.
 *
 * @template T The type of the argument and return value.
 *
 * @example
 * const addOne = (x) => x + 1;
 * const double = (x) => x * 2;
 * const addOneThenDouble = pipe(double, addOne);
 * const result = addOneThenDouble(5); // 11
 */
export const pipe =
  <T>(...functions: UnaryFunction<T>[]) =>
  (data: T) =>
    functions.reduce((value, func) => func(value), data)
