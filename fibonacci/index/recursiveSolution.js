'use strict';

//Run time: Exponential O(n^2) => use memoization
function fib(n) {
  if (n<2) {
    return n;
  }
  return fib(n-1) + fib(n-2);
}

module.exports = fib;