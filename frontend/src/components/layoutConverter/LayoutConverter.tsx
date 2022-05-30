import * as S from "./LayoutConverter.styles";
import { formatCurrency } from "@coingecko/cryptoformat";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Converter from "./converter/Converter";
import { FaArrowRight } from "react-icons/fa";
import { toThousands } from "../../util/toPesos";
import { useConverter } from "../../hooks/useConverter";
import { simpleCoin } from "../../types/simpleCoin";
import { useSetCoins } from "../../hooks/useSetCoins";
import {
  handleChangeFirstCoin,
  handleClickMenuFirst,
  handleClickMenuSecond,
  handleConvert,
} from "../../util/handlers/handlerConverter";

type Props = {
  availableCoins: simpleCoin[];
  allCoins: simpleCoin[];
  operation: string;
};

function LayoutConverter({ availableCoins, allCoins, operation }: Props) {
  const dispatch = useAppDispatch();

  let initialCoins = {
    firstCoin: availableCoins[0],
    secondCoin: allCoins[0],
  };
  if (allCoins[0].symbol === availableCoins[0].symbol) {
    initialCoins = {
      firstCoin: availableCoins[0],
      secondCoin: allCoins[1],
    };
  }

  const { setNewFirstCoin, setNewSecondCoin, coins } = useSetCoins(
    initialCoins,
    availableCoins,
    allCoins
  );

  const { actualConverter, setConverter } = useConverter(
    coins.firstCoin,
    coins.secondCoin
  );

  const { firstCoin, secondCoin } = actualConverter;

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
    });
  };

  return (
    <S.ConverterLayout>
      <Converter
        coinName={firstCoin.symbol}
        coinNumber={firstCoin.amount}
        key={"sell"}
        handleChange={handleChangeFirstCoin}
        setConverter={setConverter}
        handleClickMenu={handleClickMenuFirst}
        setNewCoin={setNewFirstCoin}
        listOfCoins={availableCoins}
        coinConvertedName={secondCoin.symbol}
        maxAmount={firstCoin.maxAmount}
      />
      <FaArrowRight />
      <Converter
        coinName={secondCoin.symbol}
        coinNumber={secondCoin.amount}
        key={"buy"}
        handleClickMenu={handleClickMenuSecond}
        setNewCoin={setNewSecondCoin}
        listOfCoins={allCoins}
        coinConvertedName={firstCoin.symbol}
        maxAmount={secondCoin.maxAmount}
      />
      <S.Button
        onClick={(e) =>
          handleConvert(e, firstCoin, secondCoin, dispatch, operation)
        }
      >
        Convertir
      </S.Button>
    </S.ConverterLayout>
  );
}

export default LayoutConverter;
