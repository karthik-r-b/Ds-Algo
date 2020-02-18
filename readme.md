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

---

###### Search Insert Position

##### Given a sorted list and a value, we need to find the index where it should be inserted or return the index at which it is already present. Searching in a sorted list should always be done using binary search. The steps are listed below

##### Find the middle element of the list

If value matches with target then return the index
If value is greater than target, we need to search the left half
Otherwise we need to search the right half
To code the above logic
Use pointers low and high to define the range of search
Initialize low with 0 and high with length of array
Initialize mid with average of low and high
To search in left half move high pointer to mid and recalculate mid
To search in right half move the left pointer to mid and recalculate mid
Continue till mid equals low at which point further iterations will keep on pointing mid to low
Remarks

##### O(log n) time complexity for using divide and conquer technique

##### O(1) space complexity as only 3 additional variables are used

##### Integer overflow is prevented by using the expression (high-low) instead of (high+low). This is not applicable to python as python converts int to long as per the need.

###### The result of low+(high-low)/2 will never be equal to high, it can at most reach high-1. Hence we initialize high with length of list to reach the last valid index which is one less than the length of list

#### Search Insert Position

##### Given a sorted list and a value, we need to find the index where it should be inserted or return the index at which it is already present. Searching in a sorted list should always be done using binary search. The steps are listed below

#####

.... Find the middle element of the list
.... If value matches with target then return the index
.... If value is greater than target, we need to search the left half
..... Otherwise we need to search the right half
.... To code the above logic
.... Use pointers low and high to define the range of search
.... Initialize low with 0 and high with length of array
.... Initialize mid with average of low and high
.... To search in left half move high pointer to mid and recalculate mid
.... To search in right half move the left pointer to mid and recalculate mid
..... Continue till mid equals low at which point further iterations will keep on pointing .... mid to low

##### Remarks

````O(log n) time complexity for using divide and conquer technique
O(1) space complexity as only 3 additional variables are used ```

###### Integer overflow is prevented by using the expression (high-low) instead of (high+low).
##### This is not applicable to python as python converts int to long as per the need.
##### The result of low+(high-low)/2 will never be equal to high, it can at most reach high-1. Hence we initialize high with length of list to reach the last valid index which is one less than the length of list
````
