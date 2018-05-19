'use strict';

function highestProduct(arr){
  let high1 = 0;
  let high2 = 0;
  let low1 = 0;
  let low2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high1) {
      high2 = high1;
      high1 = arr[i];
    } else if (arr[i] > high2) {
      high2 = arr[i];
    }
    if (arr[i] < low1) {
      low2 = low1;
      low1 = arr[i];
    } else if (arr[i] < low2) {
      low2 = arr[i];
    }
  }
  return Math.max(high1 * high2, low1 * low2);
}
highestProduct();