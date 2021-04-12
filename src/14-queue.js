const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const listFromArr = (arr) => {
  const [first, ...rest] = arr;
  const node = new ListNode(first);
  node.next = (rest.length !== 0) ? listFromArr(rest) : null;
  return node;
};

function removeKFromList(l, k) {
  const arrFromListWithoutInt = (list, int, acc = []) => {
    if (list.value !== int) {
      acc.push(list.value);
    }
    if (list.next !== null) {
      arrFromListWithoutInt(list.next, int, acc);
    }
    return acc;
  };
  const arr = arrFromListWithoutInt(l, k);
  return listFromArr(arr);
}

class Queue {
  constructor() {
    this.node = null;
    this.values = [];
  }

  get size() {
    return this.values.length;
  }

  enqueue(element) {
    const lastNode = this.node;
    this.node = new ListNode(element);
    this.node.next = lastNode;
    this.values.push(this.node.value);
  }

  dequeue() {
    const deleted = this.node;
    const beginPoint = this.values[0];
    this.node = removeKFromList(deleted, beginPoint);
    this.values.splice(0, 1);
    return beginPoint;
  }
}

module.exports = Queue;
