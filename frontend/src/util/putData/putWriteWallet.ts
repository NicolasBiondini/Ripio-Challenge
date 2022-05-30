import axios from "../../api/axios";
import config from "../../api/config";

export const putWriteWallet = async (
  symbol: string,
  amount: number,
  buy: boolean
) => {
  try {
    let amountMinusTransaction;
    if (buy) {
      amountMinusTransaction = amount - (amount * 1) / 100;
    } else {
      amountMinusTransaction = amount;
    }
    const response = await axios.put(
      config.REACT_APP_URL_WRITE_WALLET,
      JSON.stringify({ symbol: symbol, amount: amountMinusTransaction }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const { data } = response;

    if (data.ok !== "ok") return false;

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
