import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { usePrevLocation } from "../../hooks/usePrevLocation";
import { useLocation } from "react-router-dom";
import { getWalletCoins } from "../../app/slices/walletSlice";
import { locationActions } from "../../app/slices/locationSlice";
import { getAllCoinsArray } from "../../app/slices/coinsSlice";

import * as S from "./HomePage.styles";
import TotalMoneyAccount from "../../components/totalMoneyAccount/TotalMoneyAccount";
import AccountCards from "../../components/accountCards/AccountCards";
import MovementsTable from "../../components/movementsTable/MovementsTable";
import { MessageContainerStyled } from "../../components/messageContainer/MessageContainer";
import LayoutConverter from "../../components/layoutConverter/LayoutConverter";
import Loader from "../../components/loader/Loader";

type Props = {};

function HomePage({}: Props) {
  const dispatch = useAppDispatch();
  const { ok, pesos, availableCoins } = useAppSelector((state) => state.wallet);
  const { ok: okCoins, allCoins } = useAppSelector((state) => state.coins);
  const path = useAppSelector((state) => state.location.path);

  const location = useLocation();
  const prevLocation = usePrevLocation(location);

  useEffect(() => {
    // No reload again if data comes from billetera
    if (path !== "/billetera") {
      dispatch(getWalletCoins());
    }
    dispatch(getAllCoinsArray({ from: false }));
    dispatch(locationActions.setPath(prevLocation?.pathname));
  }, []);

  return (
    <>
      <S.HeaderContainer>
        <MessageContainerStyled>
          <h3>Mi panel</h3>
          <p>
            En tu panel vas a tener acceso rapido a "mis conversiones", "mi
            billetera" y "mis movimientos".
          </p>
        </MessageContainerStyled>
        {ok && <TotalMoneyAccount amount={pesos} coin={"ARS"} symbol={"$"} />}
      </S.HeaderContainer>
      {ok && okCoins ? (
        <>
          <LayoutConverter
            allCoins={allCoins}
            availableCoins={availableCoins}
            operation="Conversión"
          />
          <S.AccountsLayout>
            {availableCoins.map((coinWallet, index) => {
              return (
                index < 5 && (
                  <AccountCards
                    key={coinWallet.symbol}
                    coinName={coinWallet.name || ""}
                    coinSymbol={coinWallet.symbol}
                    coinImage={coinWallet.image || ""}
                    coinAmmount={coinWallet.amount.toString()}
                    coinToARS={coinWallet.conversion || ""}
                    decimals={coinWallet.decimals}
                  />
                )
              );
            })}
            <S.LinkStyled to="/billetera">
              Ver todas tus criptomonedas
            </S.LinkStyled>
          </S.AccountsLayout>
          <S.MovementsLayout>
            <p>Mis Movimientos</p>
            <S.TableLayout>
              <MovementsTable limit={5} />
            </S.TableLayout>
          </S.MovementsLayout>
        </>
      ) : (
        <S.LoaderContainer>
          <Loader />
        </S.LoaderContainer>
      )}
    </>
  );
}

export default HomePage;
