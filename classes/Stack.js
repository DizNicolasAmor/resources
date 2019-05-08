/* Case 1 - Stack as an array */
class Stack {
  constructor() {
    this.stack = [];
  }
  
  push(...element) {
    this.stack.push(...element);
    return this.stack;
  }
  
  pop() {
    return this.stack.pop();
  }
  
  peek() {
    return this.stack[this.stack.length - 1];
  }
  
  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }
}

/* Case 2 - Stack as an object */
class Stack {
  constructor() {
    this.stack = {};
    this.count = 0;
  }

  push(element) {
    this.stack[this.count] = element;
    this.count++;
    return this.stack;
  }

  pop() {
    this.count--;
    const element = this.stack[this.count];
    delete this.stack[this.count];
    return element;
  }

  peek() {
    return this.stack[this.count - 1];
  }

  size() {
    return this.count;
  }

  print() {
    console.log(this.stack);
  }
}

/* Case 3 - Alternative Stack as an array */
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

