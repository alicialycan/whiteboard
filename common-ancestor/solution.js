'use strict';
// Write helper functions
// Traverse through tree to find values
// Push 'good' values into accumulator array

class BinaryNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  commonAncestor(val1, val2) {
    let accum = [];
    this._commonAncestor(this.root, val1, val2, accum);
    return accum[accum.length - 1];
  }

  _commonAncestor(node, val1, val2, accum) {
    if (!node) {
      return;
    }

    let currentHasBoth = this._contains(node, val1) && this._contains(node, val2);
    if (currentHasBoth) {
      accum.push(node);
    }

    this._commonAncestor(node.left, val1, val2, accum);
    this._commonAncestor(node.right, val1, val2, accum);
  }

  _contains(node, val) {
    if (!node) {
      return false;
    } else if (node.value === val) {
      return true;
    } else {
      return this._contains(node.left, val) || this._contains(node.right, val);
    }
  }
}

let root = new BinaryNode(10,
  new BinaryNode(5,
    new BinaryNode(11),
    new BinaryNode(13,
      new BinaryNode(2),
      new BinaryNode(15)
    )
  ),
  new BinaryNode(17)
)

let tree = new BinaryTree();
tree.root = root;
let result = tree.commonAncestor(11, 15);
console.log(result.value);
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);
let six = new BinaryTree(6);
let seven = new BinaryTree(7);
let eight = new BinaryTree(8);
let nine = new BinaryTree(9);
let ten = new BinaryTree(10);
let eleven = new BinaryTree(11);


one.left = two;
one.right = three;

three.left = four;
three.right = five;

five.left = six;
five.right = seven;

seven.left = eight;
seven.right = nine;

nine.left = ten;
nine.right = eleven;


const commonAncestor = (node, valOne, valTwo) => {
  let returnNode = null;
  node.left !== null && returnNode === null ?
    returnNode = !(node.left.value === valOne && node.right.value === valTwo) ?
      commonAncestor(node.left, valOne, valTwo) :
      node : returnNode;

  node.right !== null && returnNode === null ?
    returnNode = !(node.left.value === valOne && node.right.value === valTwo) ?
      commonAncestor(node.right, valOne, valTwo) :
      node : returnNode;

  return returnNode;
};

commonAncestor(one, 6, 7);