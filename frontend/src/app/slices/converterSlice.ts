import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { simpleCoin } from "../../types/simpleCoin";
import { putWriteWallet } from "../../util/putData/putWriteWallet";
import { putWriteTransaction } from "../../util/putData/putWriteTransaction";
import { getWalletCoins, walletActions } from "./walletSlice";
import { transaction } from "../../types/transactions";
import { getTransactions } from "../../util/getData/getTransactions";
import { toast } from "react-toastify";

export const writeTransaction = createAsyncThunk(
  "convertSlice/writeTransaction",
  async (
    payload: {
      coins: simpleCoin[];
      transaction: {
        operation: string;
        method: string;
        amount: number;
        symbol: string;
      };
    },
    { dispatch }
  ) => {
    try {
      const { coins, transaction } = payload;
      const { operation, method, amount, symbol } = transaction;

      const [firstCoin, secondCoin, finalTransaction] = await Promise.all([
        putWriteWallet(coins[0].symbol, coins[0].amount, false),
        putWriteWallet(coins[1].symbol, coins[1].amount, true),
        putWriteTransaction(operation, method, amount, symbol),
      ]);

      if (coins[0].symbol === "$") {
        dispatch(walletActions.setNewPesos(coins[0].amount));
      }

      await dispatch(getWalletCoins());
      toast.success(`${operation} realizada correctamente`);
    } catch (err) {
      console.log(err);
      toast.error(`Ha ocurrido un error, intente más tarde.`);
    }
  }
);

export const getListTransactions = createAsyncThunk(
  "convert/Slice/getListTransactions",
  async (payload: { limit: number }) => {
    try {
      const transactions = await getTransactions(payload.limit);
      return transactions;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

interface initialState {
  ok: boolean;
  transactions: transaction[];
}

const initialState: initialState = {
  ok: false,
  transactions: [],
};
const converterSlice = createSlice({
  name: "converter",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(writeTransaction.pending, (state) => {
      state.ok = false;
    });
    builder.addCase(writeTransaction.fulfilled, (state) => {
      state.ok = true;
    });
    builder.addCase(writeTransaction.rejected, (state) => {
      state.ok = false;
    });
    builder.addCase(getListTransactions.pending, (state) => {
      state.ok = false;
    });
    builder.addCase(getListTransactions.fulfilled, (state, { payload }) => {
      state.ok = true;
      state.transactions = payload;
    });
    builder.addCase(getListTransactions.rejected, (state) => {
      state.ok = false;
    });
  },
});

export const converterActions = converterSlice.actions;

export default converterSlice;
