"use strict";
const bubbleSort = arr => {
  /*
   Time Complexity- O(n^2)
  Bubbling the largest element to the end of the array
  */
  for (let i = 0, n = arr.length; i < n; i++) {
    for (let j = i; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //   swapping the elements
        arr = swap(arr, j, j + 1);
        console.log(arr);
      }
    }
  }
  return arr;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

const arr = [3, 1, 5, 10, 7, 22, 2];
console.log(bubbleSort(arr));
