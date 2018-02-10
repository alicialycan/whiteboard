'use strict';

// Write a for loop that knows you removed something and need to shift the values over in array.
// Goal: to manipulate arr without relying on methods aka. understand how the code behind the method works.

let arr = [23, 45, 75, 76]

function remove(arr, index) {
    arr[index] = null;
    for (let i = index; i <= arr.length - 1; i++) { // the for loop that shifts all other values over to fill the now null space 
        arr[i] = arr[i + 1];
    }

    arr.length = arr.length -1;

    return arr;
}

console.log("Expected:", [23, 75, 76]);
console.log("Actual:", remove([23, 45, 75, 76], 1)); 
