const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  const nArr = n
    .toString()
    .split("")
    .map((item) => parseInt(item));
  let sum = 0;

  for (let i = 0; i <= nArr.length; i++) {
    if (sum < 10) {
      if (nArr[i]) {
        sum += nArr[i];
      }
    } else {
      return nArr[i - 1];
    }
  }

  return sum;
}

module.exports = {
  getSumOfDigits,
};
