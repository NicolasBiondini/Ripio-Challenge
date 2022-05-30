import React, { useState, useEffect } from "react";
import * as S from "./Converter.styles";
import { simpleCoin } from "../../../types/simpleCoin";
import { FaAngleDown } from "react-icons/fa";

type Props = {
  coinName: string;
  coinNumber: number;
  handleChange?: Function;
  setConverter?: Function;
  handleClickMenu: Function;
  setNewCoin: Function;
  listOfCoins: simpleCoin[];
  coinConvertedName: string;
  maxAmount: number | undefined;
};
function Converter({
  coinName,
  coinNumber,
  handleChange,
  setConverter,
  handleClickMenu,
  setNewCoin,
  listOfCoins,
  coinConvertedName,
  maxAmount,
}: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();

    setIsOpened(!isOpened);
  };

  useEffect(() => {
    setIsOpened(false);
  }, [coinName]);

  return (
    <S.ConverterStyled>
      <S.DropContainer>
        <S.CoinName onClick={(e) => handleClick(e)}>
          {coinName}
          <span>
            <FaAngleDown />
          </span>
        </S.CoinName>
        {isOpened && (
          <S.DropMenu>
            {listOfCoins.map((coin, index) => {
              if (
                coin.symbol === coinName ||
                coin.symbol === coinConvertedName ||
                coin.symbol === "ARS"
              )
                return;
              return (
                <li
                  key={coin.symbol + index}
                  onClick={(e) => handleClickMenu(e, listOfCoins, setNewCoin)}
                >
                  {coin.symbol}
                </li>
              );
            })}
          </S.DropMenu>
        )}
      </S.DropContainer>
      <S.Input
        min={0}
        max={maxAmount || 0}
        value={coinNumber}
        disabled={handleChange !== undefined ? false : true}
        type="text"
        onChange={(e) =>
          handleChange !== undefined && handleChange(e, setConverter)
        }
      />
    </S.ConverterStyled>
  );
}

export default Converter;
