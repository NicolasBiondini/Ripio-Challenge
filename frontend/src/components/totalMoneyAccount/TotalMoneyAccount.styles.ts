import styled from "styled-components";
import { colors } from "../../theme";

export const TotalMoneyAccountStyled = styled.div`
  min-width: 100px;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  gap: 8px;
  max-height: 30px;

  @media (min-width: 1024px) {
    padding: 10px;
    min-width: 350px;
    padding-right: 100px;
  }
`;

export const Price = styled.p`
  margin: 0;
  padding: 0;
  font-size: 22px;
  font-weight: 700;

  span {
    padding-right: 5px;
  }
`;

export const Button = styled.button`
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  font-size: 16px;
  color: ${colors.greyText};
  display: flex;
  cursor: pointer;

  span {
    color: ${colors.purple};
    font-size: 22px;
  }
`;
