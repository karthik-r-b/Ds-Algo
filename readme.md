###### We need to remove the given element and shift the rest of the elements.

###### Initialize index at 0

###### Fill all the elements except the input number while increasing the index

###### Remarks:

`O(1) space complexity`
`O(n) time complexity`
[leetcode]: (https://leetcode.com/problems/remove-element/)

---

###### We have a sorted array as input and we need to search for occurrences of an element. Search in a sorted array can be easily done using binary search. We need to modify the search slightly to fit our purpose.Implement a search which would give the last index of element being searched Call the above method twice for given target and target-1

###### Handle case where target is not present and cases where target is at either end of the array

###### Remarks:

#### O(log n) time complexity for using the binary search

#### O(n) space complexity as 2 copies of arrays are created for each call to the binary search function
