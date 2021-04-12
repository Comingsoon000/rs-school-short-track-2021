/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.size = 0;
    this.storage = [];
  }

  push(element) {
    this.storage[this.size] = element;
    this.size += 1;
  }

  pop() {
    this.size -= 1;
    const deleted = this.storage[this.size];
    delete this.storage[this.size];
    return deleted;
  }

  peek() {
    return this.storage[this.size - 1];
  }
}

module.exports = Stack;
