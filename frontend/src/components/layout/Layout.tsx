import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./Layout.styles";
import SideNavBar from "../sideNavBar/SideNavBar";
import NavBar from "../navbar/NavBar";

type Props = {};

function Layout({}: Props) {
  const [displaySideBar, setDisplaySideBar] = useState(true);

  return (
    <S.LayoutStyled>
      <NavBar setDisplay={setDisplaySideBar} display={displaySideBar} />
      <SideNavBar setDisplay={setDisplaySideBar} $display={displaySideBar} />
      <S.LayoutContent>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Outlet />
      </S.LayoutContent>
    </S.LayoutStyled>
  );
}

export default Layout;
