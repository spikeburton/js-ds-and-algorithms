const Stack = require('../src/stack');

const str = 'hello world';
let result = '';

for (let i = 0; i < str.length; i++) {
  Stack.push(str.charAt(i));
}

for (let i = 0; i < str.length; i++) {
  result += Stack.pop();
}

console.log(`Original string: ${str}`);
console.log(`Reversed string: ${result}`);
