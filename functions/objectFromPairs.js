/**
 * Creates an object from an array of pairs
 * @param { Array<Array<string, any>> } arr - The array of pairs
 * @example
 * // returns { a: 1, b: 2 }
 * objectFromPairs([['a', 1], ['b', 2]])
 */
const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});
