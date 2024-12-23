const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const res = [];

  let i = 0;

  const discarded = [];

  while (i < arr.length) {
    if (arr[i].toString().slice(0, 2) === "--") {
      if (arr[i] === "--double-next") {
        if (arr[i + 1]) {
          res.push(arr[i + 1]);
        }
        i++;
      } else if (arr[i] === "--double-prev") {
        if (res[res.length - 1] && discarded.indexOf(i - 1) === -1) {
          res.push(res[res.length - 1]);
        }
        i++;
      } else if (arr[i] === "--discard-prev") {
        if (res[i - 1] && discarded.indexOf(i - 1) === -1) {
          res.pop();
        }
        i++;
      } else if (arr[i] === "--discard-next") {
        discarded.push(i + 1);
        i += 2;
      } else {
        res.push(arr[i]);
        i++;
      }
    } else {
      res.push(arr[i]);
      i++;
    }
  }

  return res;
}

module.exports = {
  transform,
};
