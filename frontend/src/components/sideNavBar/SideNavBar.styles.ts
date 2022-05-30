import styled from "styled-components";
import { colors } from "../../theme";

interface Props {
  $display: boolean;
}

export const SideNavBarStyled = styled.nav<Props>`
  display: ${(props) => (props.$display ? "flex" : "none")};

  ${(props) =>
    props.$display &&
    `
    max-height: 90vh;
   grid-column: 1/2;
   grid-row: 2/3;
   flex-direction: column;
   justify-items: flex-end;
   row-gap: 15px;
   padding-top: 20px;
   background-color: ${colors.white};
  `}

  @media (min-width: 1024px) {
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    justify-items: flex-end;
    row-gap: 15px;
    padding-top: 20px;
    background-color: ${colors.white};
  }
`;
