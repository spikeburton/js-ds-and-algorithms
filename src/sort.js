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
    // KEY is the element to insert
    let key = arr[i];
    let j = i - 1;
    // LIST is already sorted to the left of the key, so find the first element
    // smaller and insert there
    while (j >= 0 && arr[j] > key) {
      // COPY the element at index j into arr[j+1] - note that this starts at arr[i]
      // SHUFFLE all the elements to the right until inserted into the correct spot
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // FINALLY copy the key into the spot where it belongs
    arr[j + 1] = key;
  }
  return arr;
}

module.exports = { bubbleSort, insertionSort };
