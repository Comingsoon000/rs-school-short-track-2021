/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  const result = str.split('').reduce((acc, item, index) => {
    if (item === str[index + 1]) {
      counter += 1;
      return acc;
    }
    const resultCounter = counter;
    counter = 1;
    return (resultCounter === 1)
      ? [...acc, item]
      : [...acc, resultCounter, item];
  }, []);
  return result.join('');
}

module.exports = encodeLine;
