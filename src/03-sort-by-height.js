/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

const findNeeded = (arr, i) => ((arr[i + 1] !== -1)
  ? [arr[i + 1], i + 1]
  : findNeeded(arr, i + 1));

function sortByHeight(arr) {
  const copy = [...arr];
  let step = copy.length - 1;
  let swapFlag = 1;
  while (swapFlag) {
    swapFlag = 0;
    for (let i = 0; i < step; i += 1) {
      const [nextItem, nextIndex] = findNeeded(copy, i);
      if (copy[i] > nextItem) {
        const swapped = copy[i];
        copy[i] = nextItem;
        copy[nextIndex] = swapped;
        swapFlag = 1;
      }
    }
    step -= 1;
  }
  return copy;
}

module.exports = sortByHeight;
