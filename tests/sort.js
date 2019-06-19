const { bubbleSort, insertionSort, mergeSort } = require('../src')

const nums = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6]
let result;
console.log('Nums: ', nums)

// result = bubbleSort(nums)
// console.log('Bubble sort: ', result)
// result = insertionSort(nums)
// console.log('Insertion sort: ', result)
result = mergeSort(nums)
console.log('Merge sort: ', result)
