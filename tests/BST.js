const { BST } = require('../src/BST');

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
console.log(`Tree: `, bst);
console.log('Remove: 4');
bst.remove(4);
console.log(`4 is present: `, bst.isPresent(4));
console.log(`Tree now: `, bst);
console.log(`Min: `, bst.findMin());
console.log(`Max: `, bst.findMax());
console.log('Remove: 7');
bst.remove(7);
console.log(`Max: `, bst.findMax());
console.log(`Tree now: `, bst);

console.log(`Tree min height: ${bst.findMinHeight()}`)
