/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

const minesCount = (matrix, j, i) => {
  const height = matrix.length - 1;
  const length = matrix[j].length - 1;
  let counter = 0;
  for (let y = -1; y < 2; y += 1) {
    for (let x = -1; x < 2; x += 1) {
      if (!((j + y < 0 || i + x < 0) || j + y > height || i + x > length)) {
        if ((matrix[j + y][i + x]) && (!(x === 0 && y === 0))) {
          counter += 1;
        }
      }
    }
  }
  return counter;
};

function minesweeper(matrix) {
  const result = [];
  for (let j = 0; j < matrix.length; j += 1) {
    result.push([]);
    for (let i = 0; i < matrix[j].length; i += 1) {
      result[j][i] = minesCount(matrix, j, i);
    }
  }
  return result;
}

module.exports = minesweeper;
