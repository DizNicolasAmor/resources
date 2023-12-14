export const mergeArrWithNoDuplicated = (
    array1: number[],
    array2: number[],
): number[] =>
    Array.from(new Set([...array1, ...array2]));
