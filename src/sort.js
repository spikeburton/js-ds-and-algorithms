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
    swap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap = true;
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  } while (swap);

  return arr;
}

/**
 * @function insertionSort
 * @param {Array} arr
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

module.exports = { bubbleSort, insertionSort };
