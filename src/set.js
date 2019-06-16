/**
 * @file set.js
 * @module mySet
 */

const mySet = function() {
  const collection = [];

  return {
    /**
     * @function has
     * @param {*} el
     */
    has: function(el) {
      return collection.indexOf(el) !== -1;
    },
    /**
     * @function values
     */
    values: function() {
      return collection;
    },
    /**
     * @function add
     * @param {*} el
     * @description Adds an element to the set, if the set does not already contain the element.
     */
    add: function(el) {
      if (!this.has(el)) {
        collection.push(el);
        return true;
      }
      return false;
    },
    /**
     * @function remove
     * @param {*} el
     */
    remove: function(el) {
      if (this.has(el)) {
        const i = collection.indexOf(el);
        collection.splice(i, 1);
        return true;
      }
      return false;
    },
    /**
     * @function size
     */
    size: function() {
      return collection.length;
    },
    /**
     * @function union
     * @param {mySet} otherSet
     * @description Returns a new set which is a union between the two sets.
     */
    union: function(otherSet) {
      const result = mySet();

      const thisValues = this.values();
      const otherValues = otherSet.values();

      thisValues.forEach(e => result.add(e));
      otherValues.forEach(e => result.add(e));

      return result;
    },
    /**
     * @function intersection
     * @param {mySet} otherSet
     * @description Returns a new set which is an intersection between the two sets.
     */
    intersection: function(otherSet) {
      const result = mySet();

      this.values().forEach(e => {
        if (otherSet.has(e)) result.add(e);
      });

      return result;
    },
    /**
     * @function difference
     * @param {mySet} otherSet
     */
    difference: function(otherSet) {
      const result = mySet();

      this.values().forEach(e => {
        if (!otherSet.has(e)) result.add(e);
      });

      return result;
    },
    /**
     * @function subset
     * @param {mySet} otherSet
     * @description Test if a set is a subset of another set
     */
    subset: function(otherSet) {
      return this.values().every(e => otherSet.has(e));
    }
  };
};

module.exports = mySet;
