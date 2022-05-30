import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { combinedCoin } from "../../types/combinedCoin";
import { toPesos } from "../../util/toPesos";
import { simpleCoin } from "../../types/simpleCoin";
import { getAvailableCoins } from "../../util/getData/getAvailableCoins";

export const getWalletCoins = createAsyncThunk(
  "walletSlice/getWalletCoins",
  async (): Promise<simpleCoin[]> => {
    try {
      const coins = await getAvailableCoins();
      return coins;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

interface initialState {
  ok: boolean;
  pesos: string;
  arsWallet: simpleCoin;
  availableCoins: simpleCoin[];
}

const initialState: initialState = {
  ok: false,
  pesos: "0",
  arsWallet: { symbol: "$", amount: 0, decimals: 2 },
  availableCoins: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState: initialState,
  reducers: {
    setNewPesos(state, { payload }) {
      state.arsWallet.amount = (
        Number(state.arsWallet.amount) + payload
      ).toString();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWalletCoins.pending, (state) => {
      state.ok = false;
    });
    builder.addCase(
      getWalletCoins.fulfilled,
      (state, { payload }: PayloadAction<simpleCoin[]>) => {
        console.log(payload);
        if (payload !== []) {
          state.ok = true;
          state.availableCoins = payload;
          let pesos = 0;
          payload.forEach((coin: simpleCoin) => {
            if (coin.symbol === "$") {
              state.arsWallet = coin;
              state.arsWallet.symbol = "ARS";
            }
            pesos = pesos + Number(coin.conversion);
          });
          state.pesos = toPesos(pesos);
        }
      }
    );
    builder.addCase(getWalletCoins.rejected, (state) => {
      state.ok = false;
    });
  },
});

export const walletActions = walletSlice.actions;

export default walletSlice;
