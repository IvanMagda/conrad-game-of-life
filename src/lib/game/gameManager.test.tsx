import { getCellStatus, getNextGrid, setInitialGrid } from "./gameManager";

describe("Grid generation", () => {
  test("creates a two-dimensional array with the given parameters of width and height", () => {
    const width = 10;
    const height = 15;
    const grid = setInitialGrid(width, height);
    expect(grid.length).toBe(height);
    expect(grid[1].length).toBe(width);
  });
});

describe("Next grid calc", () => {
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
});

describe("Get Cell Status", () => {
  test("should return 1 if count 3", () => {
    expect(getCellStatus(1, 3)).toBe(1);
  });

  test("should return passed value if count 2", () => {
    expect(getCellStatus(0, 2)).toBe(0);
  });

  test("should return 0 if count not 2 or 3", () => {
    expect(getCellStatus(0, 4)).toBe(0);
  });
});
