/**
 * @file queue.js
 * @module Queue
 * @description The queue is a FIFO data structure
 */

const Queue = function() {
  const collection = [];

  return {
    /**
     * @function print
     * @description Logs the queue to the console
     */
    print: function() {
      console.log(collection);
    },
    /**
     * @function enqueue
     * @param {*} el
     * @description Add an element to the end of the queue
     */
    enqueue: function(el) {
      collection.push(el);
    },
    /**
     * @function dequeue
     * @description Removes the first element from the queue and returns it
     */
    dequeue: function() {
      return collection.shift();
    },
    /**
     * @function front
     * @description Return the first element in the queue
     */
    front: function() {
      return collection[0];
    },
    /**
     * @function size
     * @description Return the length of the queue
     */
    size: function() {
      return collection.length;
    },
    /**
     * @function isEmpty
     * @description Returns true if there are no elements in the queue, false otherwise
     */
    isEmpty: function() {
      return collection.length === 0;
    }
  };
};

const PriorityQue = function() {
  const collection = [];

  return {
    /**
     * @function print
     * @description Logs the queue to the console
     */
    print: function() {
      console.log(collection);
    },
    /**
     * @function enqueue
     * @param {*} el
     * @description Add an element to the end of the queue
     */
    enque: function(el) {
      if (this.isEmpty()) {
        collection.push(el)
      } else {
        let added = false;
        for (let i = 0; i < collection.length; i++) {
          if (el[1] < collection[i][1]) { // Checking priorities
            collection.splice(i, 0, el)
            added = true
            break
          }
        }
        if (!added) collection.push(el)
      }
    },
    /**
     * @function dequeue
     * @description Removes the first element from the queue and returns it
     */
    dequeue: function() {
      return collection.shift()[0];
    },
    /**
     * @function front
     * @description Return the first element in the queue
     */
    front: function() {
      return collection[0];
    },
    /**
     * @function size
     * @description Return the length of the queue
     */
    size: function() {
      return collection.length;
    },
    /**
     * @function isEmpty
     * @description Returns true if there are no elements in the queue, false otherwise
     */
    isEmpty: function() {
      return collection.length === 0;
    }
  }
}

module.exports = { Queue, PriorityQue };
