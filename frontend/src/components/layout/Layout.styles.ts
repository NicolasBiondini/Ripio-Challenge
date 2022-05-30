import styled from "styled-components";

import { colors } from "../../theme";

export const LayoutStyled = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 80px auto;
  grid-template-columns: 100%;
  background-color: red;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(100px, 18%) auto;
  }
`;

export const LayoutContent = styled.section`
  grid-template-columns: 2/3;
  grid-template-rows: 1/2;
  color: ${colors.text};
  background-color: ${colors.primary};
  overflow-y: auto;

  @media (min-width: 1024px) {
    grid-template-columns: 2/3;
  }
`;
