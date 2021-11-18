import React, { useEffect, useState } from "react";
import { getNextGrid, setInitialGrid } from "../game/gameManager";
import { drawGrid } from "../game/grid/drawGrid";
import { WIDTH, HEIGHT } from "../../appVariables";

function App() {
  const [grid, setGrid] = useState<number[][]>(setInitialGrid(WIDTH, HEIGHT));
  useEffect(() => {
    setTimeout(() => setGrid(getNextGrid(grid)), 400);
  });

  return <div className="App">{drawGrid(grid)}</div>;
}

export default App;
