import styled from "styled-components";
import { colors } from "../../theme";

export const ConverterLayout = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Button = styled.button`
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  cursor: pointer;
  background: rgb(125, 21, 248);
  background: linear-gradient(
    135deg,
    rgba(125, 21, 248, 1) 0%,
    rgba(154, 70, 255, 1) 100%
  );
  color: ${colors.primary};
  font-size: 16px;
  padding: 12px 74px;
  border-radius: 25px;
  align-self: stretch;
  transition: all 1s ease-in-out;

  @media (min-width: 1024px) {
    align-self: flex-end;
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
