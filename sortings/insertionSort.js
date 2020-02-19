"use strict";
"use strict";
const insertionSort = arr => {
  /*
    Time complexity-O(n)
    Space complexity - constant
    */
  for (let i = 1, n = arr.length; i < n; i++) {
    let temp = arr[i];
    let j = i;
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
};

const arr = [3, 1, 5, 10, 7, 22, 2];
console.log(insertionSort(arr));
