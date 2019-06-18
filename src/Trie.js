/**
 * @file Trie.js
 * @module Trie
 */

/**
 * @class Node
 */
class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }

  /**
   * @method setEnd
   * @description Signifies current node is an endpoint
   */
  setEnd() {
    this.end = true;
  }

  /**
   * @method isEnd
   * @description Returns true if current node is an endpoint
   */
  isEnd() {
    return this.end;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  /**
   * @method add
   * @param {string} input
   * @param {Node} node
   * @description Add a new word to the trie
   */
  add(input, node = this.root) {
    if (input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
    }
    return this.add(input.substr(1), node.keys.get(input[0]));
  }

  /**
   * @method isWord
   * @param {string} word
   */
  isWord(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) return false;
      else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd();
  }

  /**
   * @method print
   * @description Prints the trie to the console
   */
  print() {
    let words = [];
    let search = (node, string) => {
      if (node.keys.size != 0) {
        for (let i of node.keys.keys()) {
          search(node.keys.get(i), string.concat(i));
        }
        if (node.isEnd()) words.push(string);
      } else {
        if (string.length > 0) words.push(string);
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  }
}

module.exports = { Trie };
