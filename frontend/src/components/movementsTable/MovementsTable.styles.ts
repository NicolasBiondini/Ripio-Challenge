import styled from "styled-components";
import { colors } from "../../theme";

export const MovementsTableStyles = styled.table`
  color: ${colors.greyText};
  width: 100%;
`;

export const Tbody = styled.tbody`
  width: 100%;
  display: table-header-group;
  table-layout: fixed;
  height: 50px;
`;
