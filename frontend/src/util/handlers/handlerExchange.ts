import { AppDispatch } from "../../app/store";
import { buyCoinsActions } from "../../app/slices/buyCoinsSlice";
import { writeTransaction } from "../../app/slices/converterSlice";
import { simpleCoin } from "../../types/simpleCoin";
import { toast } from "react-toastify";

export const handleClickMenuExchange = (
  e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  allCoins: simpleCoin[],
  dispatch: AppDispatch
) => {
  e.preventDefault();
  let selectedCoin = allCoins.filter(
    (coin) => coin.symbol === e.currentTarget.textContent
  );
  dispatch(
    buyCoinsActions.setBuyCoin({
      coinAmount: 1500 / (selectedCoin[0].buyPrice || 0),
      coinName: selectedCoin[0].name || "",
      coinPrice: selectedCoin[0].buyPrice || 0,
      coinSymbol: selectedCoin[0].symbol,
    })
  );
};

export const handleExchangeCoin = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: AppDispatch
) => {
  e.preventDefault();

  dispatch(
    buyCoinsActions.setNewAmountCoin({
      fromPesos: false,
      amount: Number(e.target.value),
    })
  );
};

export const handleExchangePesos = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: AppDispatch
) => {
  e.preventDefault();
  dispatch(
    buyCoinsActions.setNewAmountCoin({
      fromPesos: true,
      amount: Number(e.target.value),
    })
  );
};

export const handleBuyCoin = async (
  e: React.FormEvent<HTMLFormElement>,
  dispatch: AppDispatch,
  selectedCoin: {
    coinSymbol: string;
    coinName: string;
    coinAmount: number;
    coinPrice: number;
    pesosAmount: number;
  },
  maxARSAmount: number,
  operation: string
) => {
  e.preventDefault();

  if (selectedCoin.pesosAmount < 1500) {
    toast.error("El monto minimo de compra es de $1500 ARS.");
    console.log("Minimo monto de compra es $1500.");
    return dispatch(
      buyCoinsActions.setNewAmountCoin({ fromPesos: true, amount: 1500 })
    );
  }
  if (selectedCoin.pesosAmount > maxARSAmount) {
    toast.error("No dispones de saldo suficiente.");
    console.log("Error, saldos insuficientes.");
    return dispatch(
      buyCoinsActions.setNewAmountCoin({ fromPesos: true, amount: 1500 })
    );
  }

  let data = {
    coins: [
      {
        symbol: "$",
        amount: -Math.abs(Number(selectedCoin.pesosAmount)),
        decimals: 2,
      },
      {
        symbol: selectedCoin.coinSymbol,
        amount: selectedCoin.coinAmount,
        decimals: 2,
      },
    ],
    transaction: {
      operation: `${operation} de ${selectedCoin.coinSymbol}`,
      method: `Cuenta Pesos`,
      amount: Number(selectedCoin.coinAmount),
      symbol: selectedCoin.coinSymbol,
    },
  };

  await dispatch(writeTransaction(data));
};
