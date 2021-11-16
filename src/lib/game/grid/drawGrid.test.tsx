import { render } from "@testing-library/react";
import { drawGrid } from "./drawGrid";

test("Draw grid function, returns grid with correct number of nested items", () => {
  const testGrid = [
    [1, 1, 1],
    [0, 1, 1],
    [1, 0, 0],
  ];
  const result = render(drawGrid(testGrid));
  const linkElement = result.container.querySelector("#grid");
  expect(linkElement!.childElementCount).toBe(9);
});
