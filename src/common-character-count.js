const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const count1 = {};
  const count2 = {};

  s1.split("").forEach((item) => (count1[item] = (count1[item] || 0) + 1));
  s2.split("").forEach((item) => (count2[item] = (count2[item] || 0) + 1));

  const commonObj = {};

  if (Object.keys(count1).length > Object.keys(count2).length) {
    Object.keys(count1).forEach((item) => {
      if (count2[item] !== undefined) {
        count1[item] > count2[item]
          ? (commonObj[item] = count2[item])
          : (commonObj[item] = count1[item]);
      }
    });
  } else {
    Object.keys(count2).forEach((item) => {
      if (count1[item] !== undefined) {
        count1[item] > count2[item]
          ? (commonObj[item] = count2[item])
          : (commonObj[item] = count1[item]);
      }
    });
  }

  let sum = 0;

  for (let key in commonObj) {
    sum += commonObj[key];
  }

  return sum;
}

module.exports = {
  getCommonCharacterCount,
};
