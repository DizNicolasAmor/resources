class Queue {
	constructor(...items) {
		this.reverse = false;
		this.values = [...items];
	}

	enqueue(...items) {
		return this.reverse
			? this.values.unshift(...items)
			: this.values.push(...items);
	}

	dequeue() {
		return this.reverse ? this.values.pop() : this.values.shift();
	}

	empty() {
		return this.values = [];
	}
	isEmpty() {
		return !!this.values.length;
	}
	front() {
		return this.values[0];
	}
	back() {
		return this.values[this.values.length - 1];
	}
}

