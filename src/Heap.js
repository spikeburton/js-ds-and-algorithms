/**
 * @file Heap.js
 * @module Heap
 */

// LEFT CHILD: i * 2
// RIGHT CHILD: (i * 2) + 1
// PARENT: i / 2

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(num) {
    this.heap.push(num);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      // IF item at idx is smaller than parent node, move it up in the heap
      // CONTINUE until node is not smaller than parent
      while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
        // IF not the root node
        if (idx >= 1) {
          // SWAP: [PARENT, INSERTED] = [INSERTED, PARENT]
          [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
            this.heap[idx],
            this.heap[Math.floor(idx / 2)]
          ];
          // IF parent is not the root node
          if (Math.floor(idx / 2) > 1) {
            // SET the index to index of the parent node
            idx = Math.floor(idx / 2);
          } else {
            // NOT smaller than parent; break
            break;
          }
        }
      }
    }
  }

  remove() {
    let smallest = this.heap[1];
    // IF more than one node in the tree
    if (this.heap.length > 2) {
      // SET first node to the last node
      this.heap[1] = this.heap[this.heap.length - 1];
      // REMOVE last node with splice
      this.heap.splice(this.heap.length - 1);
      // IF length is 3, there are only 2 numbers in the tree
      if (this.heap.length == 3) {
        // IF one is bigger than the other ...
        if (this.heap[1] > this.heap[2]) {
          // SWAP them
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      // SEE equations sbove
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      // WHILE node is greater than left child OR right child, move it down
      while (
        this.heap[i] >= this.heap[left] ||
        this.heap[i] >= this.heap[right]
      ) {
        // IF right child is larger than left
        if (this.heap[left] < this.heap[right]) {
          // SWAP node with left child
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          // SET index to left node
          i = 2 * i;
        } else {
          // ELSE swap node with right child
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          // SET index to right node
          i = 2 * i + 1;
        }
        // SET left and right child nodes based upon new index from above
        left = 2 * i;
        right = 2 * i + 1;
        // IF at bottom of the tree, break the loop
        if (this.heap[left] == undefined || this.heap[right] == undefined)
          break;
      }
    } else if (this.heap.length == 2) {
      this.heap.splice(1, 1)
    } else {
      return null;
    }
    return smallest;
  }

  /**
   * @method sort
   * @description An efficient sorting algorithm; heap sort has complexity of worst case O(n log n)
   */
  sort() {
    let result = []
    while (this.heap.length > 1) {
      result.push(this.remove())
    }
    return result;
  }
}

module.exports = { MinHeap }
