import styled from "styled-components";
import { colors } from "../../../theme";
import { Link } from "react-router-dom";

interface Props {
  $active: boolean;
  $isLogout?: boolean;
}

export const ButtonStyled = styled(Link)<Props>`
  text-decoration: none;
  height: 50px;
  color: ${(props) => (props.$active ? colors.text : colors.greyText)};
  font-weight: 700;
  font-size: 18px;
  background-color: ${colors.white};
  transition: all 120ms ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 14px;
  border-left: 4px solid transparent;
  padding-left: 20px;
  border-color: ${(props) =>
    props.$active ? colors.secondary : "transparent"};
  margin-top: ${(props) => (props.$isLogout ? "20%" : "0")};
  margin-bottom: ${(props) => (props.$isLogout ? "20px" : "0")};
  span {
    font-weight: 400;
    font-size: 20px;
    color: ${(props) => (props.$active ? colors.secondary : colors.greyText)};
    transition: all 120ms ease-in-out;
  }
  &:hover {
    cursor: pointer;
    color: ${colors.text};
    border-color: ${colors.secondary};

    span {
      color: ${colors.secondary};
    }
  }

  @media (min-width: 1024px) {
    margin-top: ${(props) => (props.$isLogout ? "90%" : "0")};
  }
`;
