import { writeTransaction } from "../../app/slices/converterSlice";
import { simpleCoin } from "../../types/simpleCoin";
import { AppDispatch } from "../../app/store";

export const handleClickMenuFirst = (
  e: React.MouseEvent<HTMLLIElement>,
  coins: simpleCoin[],
  setCoin: Function
) => {
  let newSymbol = e.currentTarget.textContent;
  setCoin(newSymbol);

  //dispatch(walletActions.setNewActualConverter(newSymbol));
};
export const handleClickMenuSecond = (
  e: React.MouseEvent<HTMLParagraphElement>,
  coins: simpleCoin[],
  setCoin: Function
) => {
  let newSymbol = e.currentTarget.textContent;
  setCoin(newSymbol);
};

export const handleChangeFirstCoin = (
  e: React.ChangeEvent<HTMLInputElement>,
  setConverter: Function
) => {
  e.preventDefault();

  if (Number(e.target.value).toString() === "NaN") {
    return setConverter(0);
  } else {
    if (e.target.value === "0.") {
      setConverter(e.target.value);
    }
    setConverter(Number(e.target.value));
  }
};

export const handleConvert = async (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  firstCoin: simpleCoin,
  secondCoin: simpleCoin,
  dispatch: AppDispatch,
  operation: string
) => {
  e.preventDefault();
  await dispatch(
    writeTransaction({
      coins: [
        {
          symbol: firstCoin.symbol,
          amount: -Math.abs(Number(firstCoin.amount)),
          decimals: firstCoin.decimals,
        },
        {
          symbol: secondCoin.symbol,
          amount: +Math.abs(Number(secondCoin.amount)),
          decimals: secondCoin.decimals,
        },
      ],
      transaction: {
        operation: `${operation} de ${secondCoin.symbol}`,
        method: `Cuenta ${firstCoin.symbol}`,
        amount: Number(secondCoin.amount),
        symbol: secondCoin.symbol,
      },
    })
  );
};
