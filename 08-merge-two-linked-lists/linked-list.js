'use strict';

class LinkedNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  toString() {
    let result = '';
    let current = this.root;
    while (current) {
      result += current.value + ' -> ';
      current = current.next;
    }
    return result;
  }
}

module.exports = {LinkedList, LinkedNode};