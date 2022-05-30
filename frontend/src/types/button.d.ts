import { IconType } from "react-icons";

export type button = {
  Icon: IconType;
  text: string;
  link: string;
  key: string;
  active: boolean;
  isLogout?: boolean;
  setDisplay?: React.Dispatch<React.SetStateAction<boolean>>;
  $display?: boolean;
};

export type buttons = button[];
