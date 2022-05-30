import { button, buttons } from "../../types/button";
import Button from "./button/Button";
import {
  FaHome,
  FaWallet,
  FaBitcoin,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import { SideNavBarStyled } from "./SideNavBar.styles";

type Props = {
  $display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

function SideNavBar({ $display, setDisplay }: Props) {
  const buttons: buttons = [
    { Icon: FaHome, text: "Panel", link: "/", key: "1", active: false },
    {
      Icon: FaWallet,
      text: "Billetera",
      link: "/billetera",
      key: "2",
      active: false,
    },
    {
      Icon: FaBitcoin,
      text: "Cotizaciones",
      link: "/cotizaciones",
      key: "3",
      active: false,
    },
    {
      Icon: FaMoneyBillWave,
      text: "Movimientos",
      link: "/movimientos",
      key: "4",
      active: false,
    },
    {
      Icon: FaExchangeAlt,
      text: "Exchange",
      link: "/exchange",
      key: "5",
      active: false,
    },
  ];

  const logOut: button = {
    Icon: FaSignOutAlt,
    text: "Salir",
    link: "",
    key: "7",
    active: false,
    isLogout: true,
  };

  return (
    <SideNavBarStyled $display={$display}>
      {buttons.map((button, index) => {
        return (
          <Button
            Icon={button.Icon}
            text={button.text}
            link={button.link}
            key={`${button.key}+${button.link}`}
            active={button.active}
            setDisplay={setDisplay}
            $display={$display}
          />
        );
      })}
      <Button
        Icon={logOut.Icon}
        text={logOut.text}
        link={logOut.link}
        key={`${logOut.key}+${logOut.link}`}
        active={logOut.active}
        isLogout={logOut.isLogout}
      />
    </SideNavBarStyled>
  );
}

export default SideNavBar;
