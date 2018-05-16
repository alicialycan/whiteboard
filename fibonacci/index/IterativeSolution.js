'use strict';
//Run time: Linear O(n)

function fib(n) {

  let res = [0, 1];

  for (let i = 2; i <= 2; i++) {
    res.push(res[i - 1] + [i - 2]);
  }

  return res[n];
}

module.exports = fib;