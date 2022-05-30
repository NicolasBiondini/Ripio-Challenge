import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getWalletCoins } from "../../app/slices/walletSlice";
import { getAllCoinsArray } from "../../app/slices/coinsSlice";
import * as S from "./ExchangePage.styles";
import { HeaderContainer, LoaderContainer } from "../homePage/HomePage.styles";
import { MessageContainerStyled } from "../../components/messageContainer/MessageContainer";
import TotalMoneyAccount from "../../components/totalMoneyAccount/TotalMoneyAccount";
import AccountCards from "../../components/accountCards/AccountCards";
import ExchangeForm from "../../components/exchangeForm/ExchangeForm";
import Loader from "../../components/loader/Loader";

type Props = {};

function ExchangePage({}: Props) {
  const dispatch = useAppDispatch();

  const { pesos, ok, arsWallet } = useAppSelector((state) => state.wallet);

  const { ok: okCoins, allCoins } = useAppSelector((state) => state.coins);

  useEffect(() => {
    dispatch(getWalletCoins());
    dispatch(getAllCoinsArray({ from: true }));
  }, []);

  return (
    <S.ExchangePageStyled>
      <HeaderContainer>
        <MessageContainerStyled>
          <h3>Exchange</h3>
          <p>
            En la seccion exchange podrás comprar criptomonedas con tu cuenta
            pesos.
          </p>
          <p>
            El monto mínimo de compra son $1500 ARS. Por cada compra se debitara
            1% de comisión.
          </p>
        </MessageContainerStyled>
        {ok && <TotalMoneyAccount amount={pesos} coin="ARS" symbol="$" />}
      </HeaderContainer>
      {okCoins ? (
        <S.Container>
          <ExchangeForm allCoins={allCoins} arsWallet={arsWallet} />
          <AccountCards
            coinName={arsWallet.name || ""}
            coinSymbol={arsWallet.symbol}
            coinImage={arsWallet.image || ""}
            decimals={arsWallet.decimals}
            coinAmmount={arsWallet.amount.toString()}
            coinToARS={arsWallet.conversion || ""}
          />
        </S.Container>
      ) : (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
    </S.ExchangePageStyled>
  );
}

export default ExchangePage;
