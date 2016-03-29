/*!
 * @license mirror-key-value
 * (c) sugarshin
 * License: MIT
 */

/**
 * mirrorKeyValue
 *
 * @param {String[]} array
 * @param {Object} [base = {}]
 * @returns {Object}
 */
export default function mirrorKeyValue(array, base = {}) {
  if (!Array.isArray(array) || !isStrings(array)) {
    throw new TypeError('should be an array of string.');
  }
  return array.reduce((result, str) => {
    if (result[str]) { return result; }
    result[str] = str;
    return result;
  }, base);
}

function isStrings(array) {
  return array.every(val => typeof val === 'string');
}
