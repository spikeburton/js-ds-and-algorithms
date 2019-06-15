/**
 * @file stack.js
 * @module Stack
 */

const Stack = (function() {
  const store = {};
  let length = 0;
  return {
    /**
     * @function push
     */
    push: function(value) {
      store[length] = value;
      length++;
    },
    /**
     * @function pop
     */
    pop: function() {
      if (length === 0) return undefined;

      length--;
      const result = store[length];
      delete store[length];
      return result;
    },
    /**
     * @function peek
     */
    peek: function() {
      return store[length - 1];
    },
    /**
     * @function length
     */
    length: function() {
      return length;
    }
  }
})();

module.exports = Stack;
