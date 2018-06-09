'use strict';
// wrap in parseInt()
let numBlock= (seats, row, col) => {
  let myHeight = getHeightAt(seats, row, col);
  let total = 0;

  for (let i = row + 1; i < seats.length; i++) {
    if (getHeightAt(seats, i, col) < myHeight) {
      total++;
    }
  }

  return total;
};

function getHeightAt(seats, row, col) {
  let str = seats[row][col];
  let cells = str.split(' ');

  let feet = 0;
  if (str.includes('feet')) {
    feet = parseInt(cells[0], 10);
  }

  // inches are always the second to last thing in the split array
  let index = cells.length - 2;
  let inches = parseInt(cells[index], 10);
  
  return inches + 12 * feet;
}