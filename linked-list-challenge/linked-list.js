'use strict';

function isSorted(linkedList) {
    let current = this.root;
    if (current = null || current.next === null) {
        return true;
    }
    while (current && current.next) {
        if (current.data > current.next.data) {
            return false;
        }
        current = current.next;
    }
    return true;
};