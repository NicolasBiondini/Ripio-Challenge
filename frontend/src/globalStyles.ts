import { createGlobalStyle } from "styled-components";

import { colors } from "./theme";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: "Lato";
    font-style: "normal";
    background-color: ${colors.primary};
  }

  h1{
   font-size: 50px;
   line-height: 58px;
   color: ${colors.secondary};
  }

  h2{
    font-size: 36px;
    line-height: 43px;
    color: ${colors.secondary};
  }

  h3{
    font-size: 22px;
    line-height: 4px;
    font-weight: 900;
    color: ${colors.text};
    margin: 0;
    padding: 0;
  }

  p{
    font-size: 16px;
    color: ${colors.text};
  }

  a{
    font-size: 16px;
    line-height: 18px;
    color: ${colors.purple};
  }
`;
