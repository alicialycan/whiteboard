'use strict';
// wrap in parseInt()
let convertInches = (str) => {
  if(str.includes('feet')) {
    let feet = str.split('')[0] * 1;
    let inches = (feet * 12) + str.split('')[2] * 1;
    return inches;
  }
  return str.split('')[0] * 1;
};

let Block = ([seat], row, col) => {
  let seat = seat;
  let row = row;
  let col = col;
  let block = 0;
  for(i = row; i < seat.length; i++) {
    let person = convertInches(seat[row][col]);
    let other = convertInches(seat[i][column]);
    if(person > other) {
      block = block + 1;
    }
  }
  return block;
};