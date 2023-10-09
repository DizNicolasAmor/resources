export const validateAlpha = (str: string): boolean => str === str.replace(/[^A-Za-z]/g, "");
