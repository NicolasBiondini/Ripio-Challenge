import styled from "styled-components";
import { colors } from "../../../theme";

export const ConverterStyled = styled.div`
  width: 270px;

  @media (min-width: 1024px) {
    width: 360px;
    gap: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DropContainer = styled.div`
  position: relative;
  max-height: 50px;
  width: 150px;
  max-width: 150px;
`;

export const CoinName = styled.p`
  color: ${colors.text};
  margin: 0;
  cursor: pointer;
  font-size: 48px;
  width: 150px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  span {
    font-size: 24px;
    margin-top: 12px;
    color: ${colors.purple};
    font-weight: lighter;
  }
`;

export const DropMenu = styled.ul`
  position: "absolute";
  border: 0;
  bottom: 0px;
  margin-top: 10px;
  max-height: 100px;
  overflow-y: scroll;
  background-color: ${colors.primary};
  color: ${colors.greyText};
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 20px 20px 10px;

  li {
    transition: all 0.2s ease-in-out;
    font-size: 24px;
    cursor: pointer;
    &:hover {
      color: ${colors.text};
    }
  }
`;

export const Input = styled.input`
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  all: unset;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 100%;
  font-size: 48px;
  font-weight: 300;
  border-bottom: 1px solid ${colors.purple};
`;
