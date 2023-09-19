export const minValue = (min: number, value: number): string =>
  value < min ? `Must be at least ${min}` : '';
