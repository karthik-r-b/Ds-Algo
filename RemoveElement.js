"use strict";

const removeElement = (arr, val) => {
  /*
    O(n) - linear time complexity
    O(1)-constant space complexity
    */
  if (arr.length === 1 && arr[i] === val) {
    return 1;
  } else if (arr.length === 1 && arr[i] !== val) {
    return 0;
  } else {
    let j = 0;
    for (let i = 0, n = arr.length; i < n; i++) {
      if (arr[i] !== val) {
        arr[j++] = arr[i];
      }
    }
    return j;
  }
};
const val = 3;
console.log(removeElement([3, 2, 2, 3], val));
