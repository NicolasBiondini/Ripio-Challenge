import { useState } from "react";
import { amounts } from "../types/amounts";
import { simpleCoin } from "../types/simpleCoin";

export const useSetCoins = (
  initialCoins: amounts,
  availableCoins: simpleCoin[],
  allCoins: simpleCoin[]
) => {
  const [coins, setCoins] = useState(initialCoins);

  const setNewFirstCoin = (symbol: string) => {
    let newFirstCoin = availableCoins.find((coin) => coin.symbol === symbol);

    if (newFirstCoin !== undefined) {
      const { symbol, amount, decimals, sellPrice } = newFirstCoin;
      setCoins({
        ...coins,
        firstCoin: {
          symbol,
          amount,
          maxAmount: amount,
          decimals,
          sellPrice,
        },
      });
    }
  };

  const setNewSecondCoin = (symbol: string) => {
    let newSecondCoin = allCoins.find((coin) => coin.symbol === symbol);

    if (newSecondCoin !== undefined) {
      const { symbol, amount, decimals, sellPrice } = newSecondCoin;
      setCoins({
        ...coins,
        secondCoin: {
          symbol,
          amount,
          decimals,
          sellPrice,
        },
      });
    }
  };

  return { setNewFirstCoin, setNewSecondCoin, coins };
};
