'use strict';

let reverse = (int) => {
  let result = 0;

  if (int < 0) {
    console.log('Negative numbers not supported');
    return;
  }

  while(int !== 0) {
    result = result * 10 + int % 10;
    int = Math.floor(int / 10);
  }

  return result;
};

module.exports = reverse;