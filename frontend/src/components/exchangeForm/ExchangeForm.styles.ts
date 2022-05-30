import styled from "styled-components";
import { colors } from "../../theme";

export const Form = styled.form`
  width: 90%;
  max-width: 700px;
  background-color: ${colors.purple};
  color: ${colors.primary};
  padding: 20px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  height: 400px;
`;

export const Button = styled.input`
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  cursor: pointer;
  background: ${colors.secondary};
  color: ${colors.primary};
  font-size: 16px;
  padding: 12px 74px;
  border-radius: 25px;
  align-self: stretch;
  transition: all 25ms ease-out;

  @media (min-width: 1024px) {
    margin-bottom: 5px;
  }

  :hover {
    background: rgb(142, 21, 248);
    background: linear-gradient(
      135deg,
      rgba(142, 21, 248, 1) 0%,
      rgba(194, 70, 255, 1) 100%
    );
  }
`;

export const DropContainer = styled.div`
  position: relative;
  cursor: pointer;
  max-height: 10px;
  max-width: 400px;
  legend {
    font-weight: 700;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    span {
      font-size: 24px;
      margin-top: 10px;
      font-weight: lighter;
    }
  }
`;

export const DropMenu = styled.ul`
  position: "absolute";
  border: 0;
  bottom: 0px;
  margin-top: 10px;
  max-height: 100px;
  max-width: 150px;
  overflow-y: scroll;
  background-color: ${colors.primary};
  color: ${colors.greyText};
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 20px 20px 10px;

  li {
    transition: all 0.2s ease-in-out;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: ${colors.text};
    }
  }
`;
