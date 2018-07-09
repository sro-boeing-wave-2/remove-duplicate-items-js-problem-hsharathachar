/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const str = new Set(items);
  const res = [...str];
  return res;
};

module.exports = removeDuplicateItems;
