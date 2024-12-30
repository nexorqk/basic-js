const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, option) {
  let res = "";

  for (let i = 0; i < option.repeatTimes; i++) {
    if (i > 0 && option.separator === undefined) {
      res += "+" + str;
    } else {
      res += str;
    }

    if (option.additionRepeatTimes !== undefined) {
      for (let j = 0; j < option.additionRepeatTimes; j++) {
        if (j > 0 && !option.additionSeparator) {
          res += "|";
        }

        res += option.addition;

        if (option.additionSeparator && j !== option.additionRepeatTimes - 1) {
          res += option.additionSeparator;
        }
      }
    }

    if (!option.additionRepeatTimes && option.addition !== undefined) {
      res += option.addition;
    }

    if (option.separator && i !== option.repeatTimes - 1) {
      res += option.separator;
    }
  }

  if (option.repeatTimes === undefined) {
    res += str;
    res += option.addition;
  }

  return res;
}

module.exports = {
  repeater,
};
