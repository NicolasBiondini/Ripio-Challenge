import styled from "styled-components";

import { colors } from "../../../theme";

export const AccountStyled = styled.ul`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-decoration: none;
    list-style: none;
    width: 150px;
    padding: 0;
    padding-right: 25px;
    height: 100%;

    a {
      color: ${colors.text};
      font-size: 32px;
    }
  }
`;
