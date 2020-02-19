"use strict";
const rotatedSortArray = (arr, target) => {
  let result = binarySearch(arr, 0, arr.length - 1, target);
  return result;
};

const binarySearch = (arr, low, high, target) => {
  let mid = Math.floor((low + high) / 2);
  if (high >= low) {
    if (arr[mid] === target) {
      return mid;
    }
    //   sort the left side of the array
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && arr[mid] >= target) {
        return binarySearch(arr, low, mid - 1, target);
      } else {
        return binarySearch(arr, mid + 1, high, target);
      }
    }
    //   sort the right side of the array
    else {
      if (arr[mid + 1] <= target && arr[high] >= target) {
        return binarySearch(arr, mid + 1, high, target);
      } else {
        return binarySearch(arr, low, mid - 1, target);
      }
    }
  } else {
    return -1;
  }
};

const arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
const target = 2;
console.log(rotatedSortArray(arr, target));
