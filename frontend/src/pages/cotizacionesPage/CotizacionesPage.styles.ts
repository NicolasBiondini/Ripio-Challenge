import styled from "styled-components";
import { colors } from "../../theme";
import { TableLayout } from "../homePage/HomePage.styles";
import { TableOperationsStyles } from "../../components/movementsTable/TableOperations/TableOperations.styles";
import {
  MovementsTableStyles,
  Tbody,
} from "../../components/movementsTable/MovementsTable.styles";

export const CotizacionesPageStyled = styled.section`
  width: 100%;
  height: 100%;
`;

export const TableContainer = styled.div`
  padding: 20px;
`;

export { TableLayout, MovementsTableStyles, Tbody, TableOperationsStyles };
