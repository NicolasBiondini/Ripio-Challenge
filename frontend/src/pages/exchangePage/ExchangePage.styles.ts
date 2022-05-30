import styled from "styled-components";
import { colors } from "../../theme";

export const ExchangePageStyled = styled.section`
  height: 100%;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column-reverse;
  gap: 45px;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
