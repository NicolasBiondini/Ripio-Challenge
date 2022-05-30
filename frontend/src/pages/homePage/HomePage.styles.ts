import styled from "styled-components";
import { colors } from "../../theme";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  align-self: center;
`;

export const AccountsLayout = styled.div`
  margin-top: 42px;
  min-height: 330px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  padding: 20px;
  gap: 25px;

  @media (min-width: 1024px) {
    max-width: 700px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 1222px) {
    max-width: 1024px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const TableLayout = styled.div`
  overflow-x: auto;
`;

export const MovementsLayout = styled.div`
  padding: 20px;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
