import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import { AccountStyled } from "./Account.styles";

type Props = {};

export default function Account({}: Props) {
  return (
    <AccountStyled>
      <li>
        <a href="">
          <FaRegQuestionCircle />
        </a>
      </li>
      <li>
        <a href="">
          <FaRegBell />
        </a>
      </li>
      <li>
        <a href="">
          <FaUserCircle />
        </a>
      </li>
    </AccountStyled>
  );
}
