import React from "react";

import Logo from "./logo/Logo";
import { NavBarStyled } from "./NavBar.styles";
import Hamburger from "./hamburger/Hamburger";
import Account from "./account/Account";

type Props = {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBar({ display, setDisplay }: Props): JSX.Element {
  return (
    <NavBarStyled>
      <Logo />
      <Hamburger setDisplay={setDisplay} display={display} />
      <Account />
    </NavBarStyled>
  );
}

export default NavBar;
