import React from "react";
import { FaBars } from "react-icons/fa";

import { HamburgerStyled } from "./Hamburger.styles";

type Props = {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

function Hamburger({ display, setDisplay }: Props) {
  return (
    <HamburgerStyled onClick={() => setDisplay(!display)}>
      <FaBars />
    </HamburgerStyled>
  );
}

export default Hamburger;
