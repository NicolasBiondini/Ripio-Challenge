import fs from "fs";
import { getDB } from "./getDB.js";

export const writeDBWallet = async (symbol, amount) => {
  const newData = { symbol, amount };

  const oldFile = await getDB();
  if (oldFile === null) return;

  let existingCoin = oldFile.wallet.find(
    (currency) => currency.symbol === symbol
  );

  if (existingCoin !== undefined) {
    existingCoin.amount = existingCoin.amount + amount;
    if (existingCoin.amount === 0) {
      let newFile;
      let newWallet = oldFile.wallet.filter(
        (currency) => currency.amount !== 0
      );
      newFile = {
        wallet: newWallet,
        transactions: oldFile.transactions,
      };
      fs.writeFileSync("database/DB.json", JSON.stringify(newFile));
      return;
    }
  } else {
    await oldFile.wallet.push(newData);
  }

  fs.writeFileSync("database/DB.json", JSON.stringify(oldFile));

  return;
};

export const writeDBTransaction = async (
  date,
  operation,
  method,
  state,
  comision,
  amount,
  symbol
) => {
  const newData = { date, operation, method, state, comision, amount, symbol };

  const oldFile = await getDB();

  if (oldFile === null) return null;

  await oldFile.transactions.unshift(newData);

  fs.writeFileSync("database/DB.json", JSON.stringify(oldFile));

  return;
};
