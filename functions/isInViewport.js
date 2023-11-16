const isInViewport = (e, { top: t, height: h } = e.getBoundingClientRect()) =>
	t <= innerHeight && t + h >= 0;
