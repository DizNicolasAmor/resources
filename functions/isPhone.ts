export const isPhone = (value: string): string =>
    Number.isNaN(Number(value)) ? 'Required' : '';
