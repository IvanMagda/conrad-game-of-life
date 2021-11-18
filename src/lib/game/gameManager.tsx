export const setInitialGrid = (width: number, height: number) =>
  Array.from({ length: height }, () =>
    Array.from({ length: width }, () => Math.floor(Math.random() * 2))
  );

const countNeighbours = (grid: number[][], i: number, j: number) => {
  let count = 0;
  for (let a = -1; a <= 1; a++) {
    for (let b = -1; b <= 1; b++) {
      if (grid[i + a] && Number.isInteger(grid[i + a][j + b])) {
        count += grid[i + a][j + b];
      }
    }
  }
  count -= grid[i][j];
  return count;
};

export const getCellStatus = (val: number, count: number) => {
  if (count === 3) return 1;
  if (count === 2) return val;
  return 0;
};

export const getNextGrid = (grid: number[][]) =>
  grid.map((row, i) =>
    row.map((val, j) => getCellStatus(val, countNeighbours(grid, i, j)))
  );
