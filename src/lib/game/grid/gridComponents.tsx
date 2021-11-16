import styled from "styled-components";
import { WIDTH, HEIGHT } from "../../../appVariables";

export const Grid = styled.div`
  display: grid;
  width: calc(${WIDTH}* (1vh + 2px));
  margin: auto;
  grid-template-rows: repeat(${HEIGHT}, 1fr);
  grid-template-columns: repeat(${WIDTH}, 1fr);
`;

interface CellProps {
  live: number;
}

export const Cell = styled.div<CellProps>`
  width: 1vh;
  height: 1vh;
  background: ${(props) => (props.live ? "#000" : "#fff")};
  text-align: center;
  border: #000 1px solid;
`;
