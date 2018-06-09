'use strict';

// write a function that sums up a binary tree
// check left then check right; run function and add to accumulator

function sumTree (node) {
  if (!node) {
    return 0;
  }
  let accum = node.data;
  if (node.left) {
    accum += sumTree(node.left);
  }
  if (node.right) {
    accum += sumTree(node.right);
  }
  return accum;
}