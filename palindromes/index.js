'use strict';

// Take a string and turn into array
// Access element on otherside of the array

// function palindrome(str) {
//   const reversed = str.split('').reverse().join();
  
//   return str === reversed;
// }

// Solution #2
// every() does a boolean check on every element in the array

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length -i -1];
  });
}

module.exports = palindrome;