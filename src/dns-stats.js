const { NotImplementedError } = require("../extensions/index.js");

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
  const dnsAppearanceObj = {};

  domains.forEach((domain) => {
    const subDomains = domain.split(".");

    let name = "";
    for (let i = subDomains.length - 1; i >= 0; i--) {
      name += `.${subDomains[i]}`;
      dnsAppearanceObj[name] = (dnsAppearanceObj[name] || 0) + 1;
    }
  });

  return dnsAppearanceObj;
}

module.exports = {
  getDNSStats,
};
