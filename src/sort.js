/**
 * @file sort.js
 * @module sort
 */

/**
 * @function bubbleSort
 * @param {Array} arr
 * @description Sort an array using the bubble sort algorithm
 */
function bubbleSort(arr) {
  let swap = false;

  do {
    swap = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap = true
        const temp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = temp
      }
    }
  } while (swap)

  return arr;
}

module.exports = { bubbleSort }
