"use strict";
// recursive approach for binarysearch
const searchRangeFirstOccurence = (arr, low, high, target) => {
  // finding out mid value
  let mid = Math.floor((low + high) / 2);
  if (high >= low) {
    if ((mid === 0 || target > arr[mid - 1]) && arr[mid] === target) {
      return mid;
    } else if (arr[mid] >= target) {
      return searchRangeFirstOccurence(arr, low, mid - 1, target);
    } else {
      return searchRangeFirstOccurence(arr, mid + 1, high, target);
    }
  } else {
    return -1;
  }
};

const searchRangeSecondOccurence = (arr, low, high, target) => {
  if (high >= low) {
    let mid = Math.floor(low + high / 2);
    if ((mid === high || arr[mid + 1] > target) && arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      return searchRangeSecondOccurence(arr, low, mid - 1, target);
    } else {
      return searchRangeSecondOccurence(arr, mid + 1, high, target);
    }
  } else {
    return -1;
  }
};
const arr = [2, 3, 3, 3, 6, 6, 6, 6, 6, 6, 9, 9, 9, 9, 15, 15, 15, 17, 17, 18];
const target = 6;
console.log(searchRangeFirstOccurence(arr, 0, arr.length - 1, target));
console.log(searchRangeSecondOccurence(arr, 0, arr.length - 1, target));
