import styled from "styled-components";
import { colors } from "../../../theme";

export const TableOperationsStyles = styled.tr`
  background-color: ${colors.white};
  text-align: center;
  border-bottom: 1px solid ${colors.greyText};
  color: ${colors.text};

  td {
    height: 80px;
  }
`;

export const FinalTd = styled.td`
  color: ${colors.green};
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 70%;
  justify-content: center;
  text-align: end;

  span {
    font-size: 12px;
    color: ${colors.greyText};
  }
`;
