'use strict';

class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

}

class LinkedList { 
    constructor () {
        this.root = null;
    }

    addVal(val) {
        let current = this.root;
        if(!current) {
            this.root = new ListNode(val);
            return this.root;
        }

        while(current) {
            if(!current.next) {
                current.next = new ListNode(val);
                return current.next;
            }
            current = current.next;
        }
    }

    // contains(val) {
    //     let current = this.root;
    //     if(!current) throw new Error("List is empty.");

    //     while(current) {
    //         if(current.value == val) return true;
    //         current = current.next;
    //     }
    //     return false
    // }
}

const contains = (list, val) => {
    let current = list.root //send current thing to the beginning of the list
    if(!current) throw new Error("List is empty.");

    while (current) {
        if (current.val === val) return true;
        current = current.next;
    }
    return false;
} 

let arr = [2, 3, 4, 5, 6];
let newList = new LinkedList();
    for (let i = 0; i < arr.length; i++) {
        newList.addVal(arr[i]);
};

console.log(newList);
console.log(newList, 1);
console.log(newList, 3);
// console.log(newList.contains(3));