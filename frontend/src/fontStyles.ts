import { createGlobalStyle } from "styled-components";

import lato from "./fonts/lato-v23-latin-300.woff";
import lato2 from "./fonts/lato-v23-latin-300.woff2";
import latoNormal from "./fonts/lato-v23-latin-regular.woff";
import latoNormal2 from "./fonts/lato-v23-latin-regular.woff2";
import lato700 from "./fonts/lato-v23-latin-700.woff";
import lato7002 from "./fonts/lato-v23-latin-700.woff2";
import latoBig from "./fonts/lato-v23-latin-900.woff";
import latoBig2 from "./fonts/lato-v23-latin-900.woff2";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: url(${lato2}) format('woff2'),
       url(${lato}) format('woff');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url(${latoNormal2}) format('woff2'),
       url(${latoNormal}) format('woff');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: url(${lato7002}) format('woff2'),
       url(${lato700}) format('woff');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  src: url(${latoBig2}) format('woff2'),
       url(${latoBig}) format('woff');
}
`;

export default FontStyles;
