import { useLocation, Link } from "react-router-dom";
import { formatCurrency } from "@coingecko/cryptoformat";
import * as S from "./AccountCards.styles";
import { toThousands } from "../../util/toPesos";

type Props = {
  coinName: string;
  coinSymbol: string;
  coinImage: string;
  coinAmmount: string;
  coinToARS: string;
  decimals: number;
};

function AccountCards({
  coinName,
  coinSymbol,
  coinImage,
  coinAmmount,
  coinToARS,
  decimals,
}: Props) {
  const convertCoinValue = (
    symbol: string,
    amount: string,
    decimals: number
  ) => {
    if (symbol === "$" || symbol === "ARS") return toThousands(amount);
    let simpleDecimals = decimals;
    if (decimals >= 4) {
      simpleDecimals = 4;
    }
    return formatCurrency(Number(amount), symbol, "en", true, {
      decimalPlaces: simpleDecimals,
      significantFigures: 6,
    });
  };

  const location = useLocation();

  return (
    <S.AccountCardsStyled>
      <S.AccountNameAndBuy>
        <p>Cuenta {coinName}</p>
        {coinSymbol !== "$" &&
          coinSymbol !== "ARS" &&
          location.pathname !== "/exchange" && (
            <Link to={"/exchange"}>Comprar</Link>
          )}
      </S.AccountNameAndBuy>
      <S.CoinLayout>
        <p>
          <img src={coinImage} />
          {convertCoinValue(coinSymbol, coinAmmount, decimals)} {coinSymbol}
        </p>
        <span>= AR$ {toThousands(coinToARS)}</span>
      </S.CoinLayout>
    </S.AccountCardsStyled>
  );
}

export default AccountCards;
