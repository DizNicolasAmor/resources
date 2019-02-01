const addMonths = (date, months) => new Date(date.setMonth(date.getMonth() + months));
const isWeekend = date => date.getDay() === 0 || date.getDay() === 6;
const generateArrayOfDays = (startDay, endDay) => {
	let auxLock = 1;
	let arr = [];
	let auxDate = new Date(startDay);
	while (auxDate <= endDay || auxLock < 100) {
		arr.push(new Date(auxDate));
		auxDate.setDate(auxDate.getDate() + 1);
		auxLock += 1;
	}
	return arr;
};

export const startDate = new Date();
export const endDate = addMonths(new Date(), 3);
export const daysToExclude = generateArrayOfDays(startDate, endDate).filter(isWeekend);
