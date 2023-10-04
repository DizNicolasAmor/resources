export const minDateOf = (dates: Date[]): Date =>
    new Date(Math.min.apply(null, dates));
