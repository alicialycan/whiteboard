'use strict';

function findLargestAdjacentNeighboringProduct(grid) {
  let max = 0;
  for (let row = 0; row < minesweeper.length; row ++) {
    for (let col = 0; col < minesweeper[row].length; col ++) {
      localProduct = computeProduct(grid, row, col)
      max = Math.max(max, currentVal);
    }
  }
  return max;
}

function getCell(grid, row, col) {
  if (row < 0 || col < 0) {
    return 0;
  }
  if (row >= grid.length) {
    return 0;
  }
  if (col >= grid[row].length) {
    return 0;
  }

  return grid[row][col];
}

function computeProduct(grid, row, col) {
  let center = getCell(grid, row, col);
  let right = getCell(grid, row, col + 1);
  let down = getCell(grid, row + 1, col);
  return Math.max(center * right, center * down);
}
