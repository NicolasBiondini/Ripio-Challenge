import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getAllCoinsArray } from "../../app/slices/coinsSlice";
import { toThousands } from "../../util/toPesos";
import * as S from "./CotizacionesPage.styles";
import { MessageContainerStyled } from "../../components/messageContainer/MessageContainer";
import { LoaderContainer } from "../homePage/HomePage.styles";
import Loader from "../../components/loader/Loader";

type Props = {};

function CotizacionesPage({}: Props) {
  const dispatch = useAppDispatch();
  const { ok, allCoins } = useAppSelector((state) => state.coins);

  useEffect(() => {
    dispatch(getAllCoinsArray({ from: false }));
  }, []);

  return (
    <S.CotizacionesPageStyled>
      <MessageContainerStyled>
        <h3>Cotizaciones</h3>
        <p>
          En cotizaciones podrás ver los precios de todas las criptomonedas
          disponibles en Ripio.
        </p>
      </MessageContainerStyled>
      {ok ? (
        <S.TableContainer>
          <S.TableLayout>
            <S.MovementsTableStyles>
              <S.Tbody>
                <tr>
                  <th>Número</th>
                  <th>Logo</th>
                  <th>Nombre</th>
                  <th>Symbol</th>
                  <th>Precio de Compra</th>
                  <th>Precio de Venta</th>
                </tr>
                {allCoins.map((coin, index) => {
                  return (
                    <S.TableOperationsStyles
                      key={`${coin.name}+index+${index}`}
                    >
                      <td>{index + 1}</td>
                      <td>
                        <img src={coin.image} />
                      </td>
                      <td>{coin.name}</td>
                      <td>{coin.symbol}</td>
                      {coin.buyPrice && (
                        <td>$ {toThousands(coin.buyPrice?.toString())}</td>
                      )}
                      {coin.sellPrice && (
                        <td>$ {toThousands(coin.sellPrice?.toString())}</td>
                      )}
                    </S.TableOperationsStyles>
                  );
                })}
              </S.Tbody>
            </S.MovementsTableStyles>
          </S.TableLayout>
        </S.TableContainer>
      ) : (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
    </S.CotizacionesPageStyled>
  );
}

export default CotizacionesPage;
