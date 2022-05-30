import { formatCurrency } from "@coingecko/cryptoformat";
import axios from "../../api/axios";
import config from "../../api/config";

export const putWriteTransaction = async (
  operation: string,
  method: string,
  amount: number,
  symbol: string
) => {
  try {
    let newDate = new Date();
    let date: string = `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
    let state: string = "Completado";
    let comision: string = `- ${formatCurrency((amount * 1) / 100, symbol)}`;
    // let amountMinusComision = amount - (amount * 1) / 100;

    const response = await axios.put(
      config.REACT_APP_URL_WRITE_TRANSACTIONS,
      JSON.stringify({
        date,
        operation,
        method,
        state,
        comision,
        amount,
        symbol,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const { data } = response;

    if (data.ok !== "ok") return data;

    return data;
  } catch (err) {
    console.log(err);
    return { ok: "error", message: "error." };
  }
};
