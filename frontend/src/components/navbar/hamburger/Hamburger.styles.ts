import styled from "styled-components";

import { colors } from "../../../theme";

export const HamburgerStyled = styled.div`
  padding: 15px;
  margin: 0;
  font-size: 26px;
  color: ${colors.secondary};

  @media (min-width: 1024px) {
    display: none;
  }
`;
