'use strict';

// write a function called isSorted that accepts a linked list as a parameter and returns true if the linked list is sorted in ascending order
// an empty or single item list should be considered sorted.becuase it's not sorted.
// stretch goal: return true if it's either ascending or descending 
// Big O of n is O(n) = because it scales linearly (doesn't matter how many for loops there are; not as steep of a curve). A for loop in a for loop steepens the curve.

function isSorted(arr) {
    if (arr.length <= 1) {
        return true;
    }
    for (let i = 0; i < arr.length -1; i++) {
       if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    return true;
};