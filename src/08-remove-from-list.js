/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

const ListNode = require('../extensions/list-node');

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

module.exports = removeKFromList;
