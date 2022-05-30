import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getWalletCoins } from "../../app/slices/walletSlice";
import { usePrevLocation } from "../../hooks/usePrevLocation";
import { useLocation } from "react-router-dom";
import { locationActions } from "../../app/slices/locationSlice";
import * as S from "./BilleteraPage.styles";
import { MessageContainerStyled } from "../../components/messageContainer/MessageContainer";
import {
  AccountsLayout,
  HeaderContainer,
  LoaderContainer,
} from "../homePage/HomePage.styles";
import { useAppSelector } from "../../hooks/useAppSelector";
import AccountCards from "../../components/accountCards/AccountCards";
import TotalMoneyAccount from "../../components/totalMoneyAccount/TotalMoneyAccount";
import Loader from "../../components/loader/Loader";

type Props = {};

function BilleteraPage({}: Props) {
  const dispatch = useAppDispatch();
  const { ok, availableCoins, pesos } = useAppSelector((state) => state.wallet);
  const path = useAppSelector((state) => state.location.path);

  const location = useLocation();
  const prevLocation = usePrevLocation(location);

  useEffect(() => {
    // No reload again if data comes from home
    if (path !== "/") {
      dispatch(getWalletCoins());
    }
    dispatch(locationActions.setPath(prevLocation?.pathname));
  }, []);

  return (
    <S.BilleteraPageStyled>
      <HeaderContainer>
        <MessageContainerStyled>
          <h3>Mi billetera</h3>
          <p>
            En tu billetera vas a poder almacenar todas las criptomonedas que
            compres en Ripio.
          </p>
        </MessageContainerStyled>
        <TotalMoneyAccount amount={pesos} coin={"ARS"} symbol={"$"} />
      </HeaderContainer>
      {ok ? (
        <AccountsLayout>
          {availableCoins.map((coinWallet) => {
            return (
              <AccountCards
                key={coinWallet.symbol}
                coinName={coinWallet.name || ""}
                coinSymbol={coinWallet.symbol}
                coinImage={coinWallet.image || ""}
                coinAmmount={coinWallet.amount.toString()}
                coinToARS={coinWallet.conversion || ""}
                decimals={coinWallet.decimals}
              />
            );
          })}
        </AccountsLayout>
      ) : (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
    </S.BilleteraPageStyled>
  );
}

export default BilleteraPage;
