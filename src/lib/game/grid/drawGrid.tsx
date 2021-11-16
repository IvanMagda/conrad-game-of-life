import { Cell, Grid } from "./gridComponents";

export const drawGrid = (grid: number[][]) => (
  <Grid id="grid">
    {grid.map((row, i) =>
      row.map((val, j) => <Cell key={i + "" + j} live={val} />)
    )}
  </Grid>
);
