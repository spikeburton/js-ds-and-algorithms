/**
 * @file LinkedList.js
 * @module LinkedList
 */

class Node {
  constructor(el) {
    this.element = el;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._length = 0;
    this._head = null;
  }

  size() {
    return this._length;
  }

  head() {
    return this._head;
  }

  add(el) {
    const node = new Node(el);
    if (!this._head) {
      this._head = node;
    } else {
      let current = this._head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this._length++;
  }

  remove(el) {
    let current = this._head;
    let prev;

    if (current.element === el) {
      this._head = current.next;
    } else {
      while (current.element !== el) {
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
    }

    this._length--;
  }

  isEmpty() {
    return this._length === 0;
  }

  indexOf(el) {
    let current = this._head;
    let index = -1;

    while (current) {
      index++;
      if (current.element === el) return index;
      current = current.next;
    }
    return -1;
  }

  elementAt(index) {
    let current = this._head;
    let count = 0;
    while (count < index) {
      count++;
      current = current.next;
    }
    return current.element;
  }

  addAt(index, el) {
    const node = new Node(el);

    let prev,
      current = this._head;
    let currentIndex = 0;

    if (index < 0 || index > this._length) {
      return false;
    }

    if (index === 0) {
      node.next = current;
      this._head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        prev = current;
        current = current.next;
      }
      node.next = current;
      prev.next = node;
    }
    this._length++;
    return true;
  }

  removeAt(index) {
    let prev,
      current = this._head;
    let currentIndex = 0;
    if (index < 0 || index >= this._length) {
      return null
    }
    if (index === 0) {
      head = current.next
    } else {
      while (currentIndex < index) {
        currentIndex++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next
    }
    this._length--;
    return current.element;
  }
}

module.exports = { LinkedList };
