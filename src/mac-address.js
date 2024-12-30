const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n === undefined) return false;

  const arr = n.split("-");
  const filtered = arr.filter((item) => item.length === 2);

  if (filtered.length !== arr.length) return false;

  const isHEX = (num) => !isNaN(parseInt(num, 16));

  for (let i = 0; i < filtered.length; i++) {
    if (!isHEX(filtered[i][1]) || !isHEX(filtered[i][0])) return false;
  }

  return true;
}

module.exports = {
  isMAC48Address,
};
