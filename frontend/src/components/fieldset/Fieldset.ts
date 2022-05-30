import styled from "styled-components";
import { colors } from "../../theme";
export const FieldsetStyled = styled.fieldset`
  border: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 60%;

  input {
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
    border-bottom: 1px solid ${colors.green};
  }
`;
