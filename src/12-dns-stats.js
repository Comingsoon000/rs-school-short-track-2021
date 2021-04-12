/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains.forEach((element) => {
    const reversedEl = element.split('.').reverse();
    reversedEl.reduce((acc, item) => {
      const result = `${acc}.${item}`;
      if (obj[result]) {
        obj[result] += 1;
      } else {
        obj[result] = 1;
      }
      return result;
    }, '');
  });
  return obj;
}

module.exports = getDNSStats;
