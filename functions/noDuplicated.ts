export const noDuplicated = (arr: string[]): string[] =>
    arr.filter((item, pos, self) => self.indexOf(item) === pos);
