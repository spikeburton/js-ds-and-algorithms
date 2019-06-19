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

const mergeSort = (function() {
  /**
   * Merge two sub-lists back together.
   *
   * @param {Array} left
   * @param {Array} right
   */
  const merge = (left, right) => {
    const result = [];
    let il = 0, ir = 0;

    while (il < left.length || ir < right.length) {
      if (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
          result.push(left[il++]);
        } else {
          result.push(right[ir++]);
        }
      } else if (il < left.length) result.push(left[il++]);
      else result.push(right[ir++]);
    }

    return result;
  };

  /**
   * Sort the array by breaking it into smaller sub-lists. Divide & Conquer
   * @param {Array} arr
   */
  const divide = arr => {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(divide(left), divide(right));
  };

  return divide;
})();

module.exports = { bubbleSort, insertionSort, mergeSort };
