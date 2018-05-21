const sortArray = (initialArray, sortingReference, sortingFactor) => {
	const criteria = (a, b) => {
		if (sortingReference.indexOf(a[sortingFactor]) < sortingReference.indexOf(b[sortingFactor]))
			return -1;
		if (sortingReference.indexOf(a[sortingFactor]) > sortingReference.indexOf(b[sortingFactor]))
			return 1;
		return 0;
	};
	return [...initialArr].sort(criteria);
};

