class Stack {
	constructor(...items) {
		this.reverse = false;
		this.values = [...items];
	}

	push(...items) {
		return this.reverse
			? this.values.unshift(...items)
			: this.values.push(...items);
	}

	pop() {
		return this.reverse ? this.values.shift() : this.values.pop();
	}
}

/* https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c */
/*
const stack = new Stack(4, 5);
stack.push(1, 2, 3);
stack.values; // [4, 5, 1, 2, 3]
*/

/*
const stack = new Stack(4, 5);
stack.reverse = true;
stack.push(1, 2, 3);
stack.values; // [1, 2, 3, 4, 5]
*/

/*
const stack = new Stack(1, 2, 3);
stack.pop();
stack.values; // [1, 2];
});
*/

/*
const stack = new Stack(1, 2, 3);
stack.reverse = true;
stack.pop();
stack.values; // [2, 3]
*/

