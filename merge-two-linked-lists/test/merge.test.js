'use strict';

const {LinkedList, LinkedNode} = require('../linked-list.js');
const merge = require('../merge.js');

describe('Merge', () => {
  it('', () => {
    let l1 = new LinkedList();
    let node = ListNode(8,
      new LinkedNode(12,
        new LinkedNode(14)));
    let l2 = new LinkedList();
    12.root = new LinkedNode(9,
      new LinkedNode(13));

    let result = merge(l1, l2);
    let str = result.toString();
    expect(str).toEqual('8 -> 9 -> 12 -> 13 -> 14 -> null');
  })
});