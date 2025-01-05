import { genHexColor } from "@/utils/gen";
import styled from "styled-components";

export const RandomColorDiv = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${() => genHexColor()};
  cursor: pointer;
`;
