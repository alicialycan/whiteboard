'use strict';

const {LinkedList, LinkedNode} = require('./linked-list.js');
// accetpts two sorted linked lists
// returns a sorted linked list
// of the two merged together
// 8 -> 12 -> 14
// 9 -> 13
// check to see if lists are empty (root is null)
// result.root: c1, c2, c3

function merge(l1, l2) {
  let result = new LinkedList();

  // deal with empty lists
  let c1 = l1.root;
  let c2 = l2.root;
  if (c1 === null) {
    result.root = c2;
    return result;
  }
  if (c2 === null) {
    result.root = c1;
    return result;
  }

  // get the root started pointing at the smaller
  // first node of the two lists
  // pointing at our 3rd list (called result), but need to step it forward (so we don't have a duplicate value)!
  if (c1.value <= c2.value) {
    result.root = c1;
    c1 = c1.next;
  } else {
    result.root = c2;
    c2 = c2.next;
  }

  let last = result.root; // placeholder where we left off creating our new Linked List
  while (c1 !== null && c2 !== null) {
    if (c1.value < c2.value) {
      last.next = c1;
      c1 = c1.next; // stepping forward
    } else {
      last.next = c2;
      c2 = c2.next;
    }
    last = last.next;
  }

  // if there's one list left over with lots of stuff
  // then step through that list and attach each node
  if (c1 !== null) {
    last.next = c1;
  }

  if (c2 !== null) {
    last.next = c2;
  }
  return result;
};

module.exports = merge;