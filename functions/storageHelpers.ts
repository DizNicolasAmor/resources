export const getFromStorage = (key: string): object | null => {
	if (!key) return null;

	try {
		const valueStr = localStorage.getItem(key);
		if (valueStr) return JSON.parse(valueStr);
		return null;
	} catch (reason) {
		console.error(reason);
		return null;
	}
};

export const setInStorage = (key: string, obj: object): void => {
	if (!key) console.error('Key is missing.');

	try {
		localStorage.setItem(key, JSON.stringify(obj));
	} catch (err) {
		console.error(err);
	}
};
