/**
 * @file HashTable.js
 * @module HashTable
 */

/**
 * @function hash
 * @param {string} string
 * @param {number} max
 */
const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

const HashTable = function() {
  const storage = [];
  const storageLimit = 4;

  return {
    print: function() {
      console.log(storage);
    },
    /**
     * @function add
     * @param {string} key
     * @param {number} value
     */
    add: function(key, value) {
      const index = hash(key, storageLimit);
      if (!storage[index]) {
        storage[index] = [[key, value]];
      } else {
        let inserted = false;
        for (let i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (!inserted) storage[index].push([key, value]);
      }
    },
    /**
     * @function remove
     * @param {string} key
     */
    remove: function(key) {
      const index = hash(key, storageLimit);
      if (storage[index].length === 1 && storage[index][0][0] === key) {
        delete storage[index];
      } else {
        for (let i = 0; i < storage[index]; i++) {
          if (storage[index][i][0] === key) {
            delete storage[index][i];
          }
        }
      }
    },
    /**
     * @function
     * @param {string} key
     */
    lookup: function(key) {
      const index = hash(key, storageLimit);
      if (!storage[index]) return undefined;
      else {
        for (let i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            return storage[index][i][1];
          }
        }
      }
    }
  };
};

module.exports = { hash, HashTable };
