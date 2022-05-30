import styled from "styled-components";
import { colors } from "../../theme";

export const AccountCardsStyled = styled.div`
  text-align: center;
  width: 100%;
  max-width: 300px;
  min-height: 140px;
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  -webkit-box-shadow: -2px 2px 34px 12px rgba(171, 173, 180, 0.14);
  box-shadow: -2px 2px 34px 12px rgba(171, 173, 180, 0.14);
`;

export const AccountNameAndBuy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  p {
    margin: 0;
    padding: 0;
    color: ${colors.greyText};
  }

  a {
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${colors.secondary};
    }
  }
`;

export const CoinLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  gap: 5px;
  p {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
  }
  span {
    color: ${colors.greyText};
  }
`;
