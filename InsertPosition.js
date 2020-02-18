"use strict";

const insertPosition = (arr, low, high, target) => {
  let mid = Math.floor((low + high) / 2);
  if (high >= low) {
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      return insertPosition(arr, low, mid - 1, target);
    } else {
      return insertPosition(arr, mid + 1, high, target);
    }
  } else {
    return mid + 1;
  }
};

const arr = [2, 6, 10, 14, 15, 19, 29, 30, 32, 35, 40];
const target = 13;
console.log(insertPosition(arr, 0, arr.length - 1, target));
