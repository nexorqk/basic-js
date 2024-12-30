const { NotImplementedError } = require("../extensions/index.js");

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
  let i = 0;
  let result = "";

  while (i < str.length) {
    let step = 1;

    if (str[i] === str[i + 1]) {
      while (step < str.length - i) {
        if (str[i] === str[i + step]) {
          step++;
        } else {
          break;
        }
      }

      result += step + str[i];
    } else {
      result += str[i];
    }

    i += step;
  }

  return result;
}

module.exports = {
  encodeLine,
};
