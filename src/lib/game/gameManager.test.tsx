import { getNextGrid, setInitialGrid } from "./gameManager";

test("creates a two-dimensional array with the given parameters of width and height", () => {
  const width = 10;
  const height = 15;
  const grid = setInitialGrid(width, height);
  expect(grid.length).toBe(height);
  expect(grid[1].length).toBe(width);
});

test("Any live cell with fewer than two live neighbours dies", () => {
  const testGrid = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  expect(getNextGrid(testGrid)[1][1]).toBe(0);
});

test("Any live cell with two live neighbours lives on to the next generation", () => {
  const testGrid = [
    [0, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ];
  expect(getNextGrid(testGrid)[1][1]).toBe(1);
});

test("Any live cell with three live neighbours lives on to the next generation", () => {
  const testGrid = [
    [0, 1, 1],
    [0, 1, 0],
    [1, 0, 0],
  ];
  expect(getNextGrid(testGrid)[1][1]).toBe(1);
});

test("Any live cell with more than three live neighbours dies", () => {
  const testGrid = [
    [1, 1, 1],
    [0, 1, 1],
    [1, 0, 0],
  ];
  expect(getNextGrid(testGrid)[1][1]).toBe(0);
});

test("Any dead cell with exactly three live neighbours becomes a live cell", () => {
  const testGrid = [
    [1, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
  ];
  expect(getNextGrid(testGrid)[1][1]).toBe(1);
});
