"use strict";
// main function
/*
size indicates the size of the array list
input contains the number of size elements
*/
function main(size, input) {
  let result = addList(input);
  console.log(result.join(" "));
}
/*
Making node as object
as it contains data and next pointers
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// Defining the linked list data structure

class LinkedList {
  constructor() {
    // Invoked when we instantiate the linked list object
    this.head = null;
  }
  add(val) {
    let node = new Node(val);
    // adding the elements to the list
    if (!this.head) {
      this.head = node;
      return this.head;
    }
    let tail = this.head;
    while (!!tail.next) {
      tail = tail.next;
    }
    tail.next = node;
    return this.head;
  }
  //   reverse the list
  reverse(list, prev) {
    //   return null if the linked list is Empty
    if (!list) {
      return list;
    }
    /*
    taking temp, prev,current as variables
    */
    let temp = null;
    let current = list;
    // checking the node data whether it is even or not
    while (!!current && current.data % 2 === 0) {
      temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    // If the elements are even then change the head pointer of the list
    if (current != list) {
      list.next = current;
      //   recursive function applied for remaining part of the list
      current = this.reverse(current, null);
      return prev;
    }
    // recursive to the odd data
    else {
      list.next = this.reverse(list.next, list);
      return list;
    }
  }

  //   printing the list
  printList(list) {
    //   printing the list and storing into the array
    let temp = list;
    let arr = [];
    while (!!temp.next) {
      arr.push(temp.data);
      temp = temp.next;
    }
    arr.push(temp.data);
    return arr;
  }
}

let list = new LinkedList();

function addList(arr) {
  // traversing the array to add the elements to the list

  for (let i = 0, n = arr.length; i < n; i++) {
    list.add(arr[i]);
  }
  //   Initializing prev variable as null
  let reverseList = list.reverse(list.head, null);
  let resultList = list.printList(reverseList);
  return resultList;
}

let input = [2, 18, 24, 3, 5, 7, 9, 6, 12];
main(input.length, input);
