export const germanPrice = (number: number): string =>
	number.toFixed(2).replace(".", ",")
		.replace(/(\d)(?=(\d{3})+(?:\,\d+)?$)/g, "$1.");
