'use strict';

class ListNode {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.root = null; // points to first item(head)
    }
    // O(1)
    isEmpty() {
        return this.root === null;
    }
    // 0(1)
    prepend(value) {
        let node = new ListNode(value);
        node.next = this.root;
        this.root = node; // the root is now pointed at this new node
    }

    size() {
        let counter = 0;
        let current = this.root;
        while (current !== null) {
            counter++;
            current = current.next;
        }
        return counter;
    }

    get(index) {
        let counter = 0;
        let current = this.root;
        while (current !== null) {
            if (counter === index) {
                return current.data;
            }
            counter++;
            current = current.next;
        }
        return counter;
    }

    insertAtEnd(value) {
        let current = this.root;
        while (current.next !== null) { // while loop will continue until your at a node that points to current (stays on node instead of stepping off it)
            current.next = new ListNode(value);
            }
            console.log(current);
            current = current.next;
        }
    }

    toString() {
        let result = ''; // creating an empty list
        // traverse the linked list and append data values to str.
        let current = this.root;
        while (current !==null) {
            result += current.data + ' -> ';
            current = current.next;
        }
    }
}

let list = new LinkedList();
list.prepend(12);
list.prepend(40);
list.prepend(80);
list.prepend(99);
console.log(list.toString());
console.log('Size:', list.size());


// let n12 = new ListNode(12);
// let n24 = new ListNode(24);
// let n87 = new ListNode(87);
// let n99 = new ListNode(99);

// let aa  = [12, 24, 87, 99];
// aa[0]; // gives us the first item in the list

// list -> 12 -> 24 -> 87 -> 99 -> null
// let list = n12;
// n12.next = n24;
// n24.next = n87;
// n87.next = n99;

console.log('first', list.get(0));
console.log('second', list.get(1));
console.log('third', list.get(2));
console.log('four', list.get(3));

// list -> 12 -> 24 -> 87 -> 99
// list -> 24 -> 87 -> 99
// list.next = list.next.next;

// how to traverse a linked list
let current = list;
while (current !== null) {
    // console.log('traversing', current.data);
    current = current.next;
}

list.insertAtEnd(112);