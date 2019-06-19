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
  // CLONE the array
  const result = [...arr];
  let swap = false;

  do {
    swap = false;
    for (let i = 0; i < result.length; i++) {
      if (result[i] > result[i + 1]) {
        swap = true;
        const temp = result[i + 1];
        result[i + 1] = result[i];
        result[i] = temp;
      }
    }
  } while (swap);

  return result;
}

/**
 * @function insertionSort
 * @param {Array} arr
 */
function insertionSort(arr) {
  // CLONE the array
  const result = [...arr];

  for (let i = 1; i < result.length; i++) {
    // KEY is the element to insert
    let key = result[i];
    let j = i - 1;
    // LIST is already sorted to the left of the key, so find the first element
    // smaller and insert there
    while (j >= 0 && result[j] > key) {
      // COPY the element at index j into result[j+1] - note that this starts at result[i]
      // SHUFFLE all the elements to the right until inserted into the correct spot
      result[j + 1] = result[j];
      j = j - 1;
    }
    // FINALLY copy the key into the spot where it belongs
    result[j + 1] = key;
  }
  return result;
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
    let il = 0,
      ir = 0;

    while (il < left.length || ir < right.length) {
      if (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
          result.push(left[il++]);
        } else {
          result.push(right[ir++]);
        }
      } else if (il < left.length) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
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

/**
 * Quick sort is an efficient sorting algorithm,
 * which utilizes the divide & conquer paradigm
 * @param {Array} arr The input array
 */
function quickSort(arr) {
  if (arr.length < 2) return arr;

  const idx = arr.length - 1;
  const chosen = arr[idx];
  const a = [],
    b = [];

  for (let i = 0; i < idx; i++) {
    const temp = arr[i];
    temp < chosen ? a.push(temp) : b.push(temp);
  }

  return [...quickSort(a), chosen, ...quickSort(b)];
}

module.exports = { bubbleSort, insertionSort, mergeSort, quickSort };
