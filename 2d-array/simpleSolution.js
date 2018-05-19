'use strict';

function randVal() {
  return Math.floor(100 * Math.random());
}

let minesweeper = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
];

for (let row = 0; row < minesweeper.length; row ++) {
  for (let col = 0; col < minesweeper[row].length; col ++) {
    minesweeper[row][col] = `${row}, ${col}`
  }
}

console.log(minesweeper);