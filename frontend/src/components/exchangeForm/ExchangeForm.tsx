import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import * as S from "./ExchangeForm.styles";
import FieldsetStyle from "../fieldset/FieldsetStyle";
import { simpleCoin } from "../../types/simpleCoin";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { handleClickMenuExchange } from "../../util/handlers/handlerExchange";
import {
  handleBuyCoin,
  handleExchangeCoin,
  handleExchangePesos,
} from "../../util/handlers/handlerExchange";

type Props = {
  allCoins: simpleCoin[];
  arsWallet: simpleCoin;
};

function ExchangeForm({ allCoins, arsWallet }: Props) {
  const selectedCoin = useAppSelector((state) => state.buyCoins);
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLLegendElement>) => {
    e.preventDefault();

    setIsOpened(!isOpened);
  };

  useEffect(() => {
    setIsOpened(false);
  }, [selectedCoin]);

  let operation = "Compra";

  return (
    <S.Form
      onSubmit={(e) =>
        handleBuyCoin(e, dispatch, selectedCoin, arsWallet.amount, operation)
      }
    >
      <S.DropContainer>
        <legend onClick={(e) => handleClick(e)}>
          Comprar {selectedCoin.coinName}
          <span>
            <FaAngleDown />
          </span>
        </legend>
        {isOpened && (
          <S.DropMenu>
            {allCoins.map((coin, index) => {
              if (
                coin.symbol === selectedCoin.coinName ||
                coin.symbol === "$" ||
                coin.symbol === "ARS"
              )
                return null;
              return (
                <li
                  key={coin.symbol + index}
                  onClick={(e) =>
                    handleClickMenuExchange(e, allCoins, dispatch)
                  }
                >
                  {coin.symbol}
                </li>
              );
            })}
          </S.DropMenu>
        )}
      </S.DropContainer>
      <FieldsetStyle
        labelText={`Cantidad de ${selectedCoin.coinName}`}
        labelId={"coin"}
        coinAmount={selectedCoin.coinAmount}
        handleChange={handleExchangeCoin}
      />
      <FieldsetStyle
        labelText={`Cantidad de $ARS`}
        labelId={"pesos"}
        min={1500}
        coinAmount={selectedCoin.pesosAmount}
        handleChange={handleExchangePesos}
      />
      <S.Button type={"submit"} value={"Comprar"} />
    </S.Form>
  );
}

export default ExchangeForm;
