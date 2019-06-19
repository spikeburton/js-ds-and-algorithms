const { bubbleSort, insertionSort, mergeSort, quickSort } = require('../src');

const nums = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6];

console.log('Nums: ', nums);
console.log('Bubble sort: ', bubbleSort(nums));
console.log('Nums: ', nums);
console.log('Insertion sort: ', insertionSort(nums));
console.log('Nums: ', nums);
console.log('Merge sort: ', mergeSort(nums));
console.log('Nums: ', nums);
console.log('Quick sort: ', quickSort(nums));
