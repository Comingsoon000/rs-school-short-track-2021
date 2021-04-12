/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let endIndex = array.length;
  let midIndex;
  let beginIndex = 0;
  while (beginIndex < endIndex) {
    midIndex = Math.floor((beginIndex + endIndex) / 2);
    if (value <= array[midIndex]) {
      endIndex = midIndex;
    } else {
      beginIndex = midIndex + 1;
    }
  }
  return beginIndex;
}

module.exports = findIndex;
