const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const finalArr = [];

  for (let i = 0; i < names.length; i++) {
    const item = names[i];
    const partOfNames = names.slice(0, i);

    if (partOfNames.includes(item)) {
      const count = partOfNames.filter(
        (filterItem) => filterItem === item
      ).length;

      const res = `${item}(${count})`;

      finalArr.push(res);
    } else {
      if (finalArr.includes(item)) {
        const count = finalArr.filter(
          (finalFilter) => finalFilter === item
        ).length;
        finalArr.push(`${item}(${count})`);
      } else {
        finalArr.push(item);
      }
    }
  }

  return finalArr;
}
module.exports = {
  renameFiles,
};
