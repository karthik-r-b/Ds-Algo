"use strict";
const MaximumSubArray = arr => {
  // Linear time complexity - O(n)
  // constant space complexity-O(1)
  if (!arr.length) {
    return arr;
  } else {
    for (let i = 1, n = arr.length; i < n; i++) {
      if (arr[i - 1] > 0) {
        arr[i] += arr[i - 1];
      }
    }
    return Math.max(...arr);
  }
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(MaximumSubArray(arr));
