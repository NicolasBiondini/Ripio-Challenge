import { useEffect, useState } from "react";
import { amounts } from "../types/amounts";
import { simpleCoin } from "../types/simpleCoin";
import { toSellPrice } from "../util/toConverter";

export const useConverter = (first: simpleCoin, second: simpleCoin) => {
  // Calculate maxAmount for the second coin
  let maxAmount = 0;
  if (first.sellPrice && second.sellPrice && first.maxAmount) {
    let price = toSellPrice(first.sellPrice, second.sellPrice);
    maxAmount = price * first.maxAmount;
  }

  // Initial set of coins, one from availableCoins / cuenta pesos, other from list of coins
  let initialFirst: amounts = {
    firstCoin: {
      symbol: first.symbol,
      amount: first.amount,
      sellPrice: first.sellPrice,
      decimals: first.decimals,
      maxAmount: first.amount,
    },
    secondCoin: {
      symbol: second.symbol,
      amount: maxAmount,
      sellPrice: second.sellPrice,
      decimals: second.decimals,
      maxAmount: maxAmount,
    },
  };

  // Save the state
  const [actualConverter, setActualConverter] = useState(initialFirst);

  // Converter funtionality
  // Just take the new input, and check if it is mayor than the maxAmount
  const setConverter = (amount: number) => {
    if (
      actualConverter.firstCoin.maxAmount &&
      amount > actualConverter.firstCoin.maxAmount
    ) {
      return setActualConverter({
        ...actualConverter,
        firstCoin: {
          ...actualConverter.firstCoin,
          amount: actualConverter.firstCoin.maxAmount,
        },
      });
    } else {
      setActualConverter({
        ...actualConverter,
        firstCoin: {
          ...actualConverter.firstCoin,
          amount: amount,
        },
      });
    }
  };

  // Initial with 2 coins when the first or the second coin change
  useEffect(() => {
    // Calculate maxAmount for the second coin
    let maxAmount = 0;
    if (first.sellPrice && second.sellPrice && first.maxAmount) {
      let price = toSellPrice(first.sellPrice, second.sellPrice);
      maxAmount = price * first.maxAmount;
    }

    let initialFirst: amounts = {
      firstCoin: {
        symbol: first.symbol,
        amount: first.amount,
        sellPrice: first.sellPrice,
        decimals: first.decimals,
        maxAmount: first.amount,
      },
      secondCoin: {
        symbol: second.symbol,
        amount: maxAmount,
        sellPrice: second.sellPrice,
        decimals: second.decimals,
        maxAmount: maxAmount,
      },
    };
    setActualConverter(initialFirst);
  }, [first, second]);

  // On firstCoin amount change, change the second one
  useEffect(() => {
    if (
      actualConverter.firstCoin.maxAmount &&
      actualConverter.firstCoin.amount > actualConverter.firstCoin.maxAmount
    ) {
      return;
    }
    // Calculate second price
    let amount = 0;
    if (
      actualConverter.firstCoin.sellPrice &&
      actualConverter.secondCoin.sellPrice &&
      actualConverter.firstCoin.maxAmount
    ) {
      let price = toSellPrice(
        actualConverter.firstCoin.sellPrice,
        actualConverter.secondCoin.sellPrice
      );
      amount = price * actualConverter.firstCoin.amount;
    }

    setActualConverter({
      ...actualConverter,
      secondCoin: {
        ...actualConverter.secondCoin,
        amount: amount,
      },
    });
  }, [actualConverter.firstCoin.amount, actualConverter.secondCoin.symbol]);

  return { actualConverter, setConverter };
};
