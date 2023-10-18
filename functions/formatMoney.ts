export const formatMoney = (num: number): string =>
    num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
