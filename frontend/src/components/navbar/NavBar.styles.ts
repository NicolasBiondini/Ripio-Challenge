import styled from "styled-components";

import { colors } from "../../theme";

export const NavBarStyled = styled.nav`
  width: 100%;
  grid-row: 1/2;
  grid-column: 1/3;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;
