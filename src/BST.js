/**
 * @file BST.js
 * @module BST
 * @description Binary Search Tree
 */

/**
 * @class Node
 */
class Node {
  /**
   *
   * @param {*} data
   * @param {Node} left
   * @param {Node} right
   */
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /**
   * @method add
   * @param {*} data
   */
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = node => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        } else return null;
      };
      return searchTree(node);
    }
  }

  /**
   * @method findMin
   */
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  /**
   * @method findMax
   */
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  /**
   * @method find
   * @param {*} data
   * @description Returns the node if found, return null otherwise
   */
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  /**
   * @method isPresent
   * @param {*} data
   * @description Returns true if data is present in the tree, false otherwise
   */
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  /**
   * @method remove
   * @param {*} data
   */
  remove(data) {
    /**
     * @function removeNode
     * @param {Node} node
     * @param {*} data
     */
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        // Node has no children
        if (node.left === null && node.right === null) return null;
        // Node has no left child
        if (node.left === null) return node.right;
        // Node has no right child
        if (node.right === null) return node.left;

        // Node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  /**
   * @method findMinHeight
   * @param {Node} node
   * @description Find the minimum height of the tree
   */
  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) return left + 1;
    else return right + 1;
  }

  /**
   * @method findmaxHeight
   * @param {Node} node
   * @description Find the maximum height of the tree
   */
  findmaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findmaxHeight(node.left);
    let right = this.findmaxHeight(node.right);
    if (left > right) return left + 1;
    else return right + 1;
  }

  /**
   * @method isBalanced
   * @description Returns true if the tree is balanced, false otherwise
   */
  isBalanced() {
    return this.findMinHeight() >= this.findmaxHeight() - 1;
  }

  /**
   * @method inOrder
   * @description Traverse the tree in order
   */
  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      const result = [];
      /**
       * @function traverse
       * @param {Node} node
       */
      function traverse(node) {
        node.left && traverse(node.left);
        result.push(node.data);
        node.right && traverse(node.right);
      }
      traverse(this.root);
      return result;
    }
  }

  /**
   * @method preOrder
   */
  preOrder() {
    if (this.root === null) {
      return null;
    } else {
      const result = [];
      /**
       * @function traverse
       * @param {Node} node
       */
      function traverse(node) {
        result.push(node.data);
        node.left && traverse(node.left);
        node.right && traverse(node.right);
      }
      traverse(this.root);
      return result;
    }
  }

  /**
   * @method postOrder
   */
  postOrder() {
    if (this.root === null) {
      return null;
    } else {
      const result = [];
      /**
       * @function traverse
       * @param {Node} node
       */
      function traverse(node) {
        node.left && traverse(node.left);
        node.right && traverse(node.right);
        result.push(node.data);
      }
      traverse(this.root);
      return result;
    }
  }

  /**
   * @method levelOrder
   */
  levelOrder() {
    const result = [];
    const Q = [];
    if (this.root !== null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(Q.data);
        if (node.left !== null) Q.push(node.left);
        if (node.right !== null) Q.push(node.right);
      }
      return result;
    } else return null;
  }
}

module.exports = { Node, BST };
