'use strict';

// Solution #1
// turn string into array
// reverse
// turn back into string
// return result

// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

// Solution #2
// create an empty string
// itterate through string and put into a new string
// return

// function reverse(str) {
//   let reversed = '';
//   for (let char of str) { // object to itterate through
//     reversed = char + reversed; // add onto front of str reversed
//   }
//   return reversed;
// }

// Solution #3
// take all values and condense down to a single string value so function runs one time for every element

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev);
}

module.exports = reverse;