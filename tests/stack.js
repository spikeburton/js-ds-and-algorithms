const Stack = require('../src/stack');

const stack = Stack();
const str = 'hello world';
let result = '';

for (let i = 0; i < str.length; i++) {
  stack.push(str.charAt(i));
}

for (let i = 0; i < str.length; i++) {
  result += stack.pop();
}

console.log(`Original string: ${str}`);
console.log(`Reversed string: ${result}`);
