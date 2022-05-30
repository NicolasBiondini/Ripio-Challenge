import { button } from "../../../types/button";
import { ButtonStyled } from "./Button.styles";
import { useLocation } from "react-router-dom";

function Button({ Icon, text, link, isLogout, setDisplay, $display }: button) {
  const location = useLocation();

  return (
    <ButtonStyled
      to={link}
      $active={location.pathname === link}
      $isLogout={isLogout}
      onClick={() => setDisplay && setDisplay(!$display)}
    >
      <span>
        <Icon />
      </span>
      {text}
    </ButtonStyled>
  );
}

export default Button;
