import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  coinSymbol: string;
  coinName: string;
  coinAmount: number;
  coinPrice: number;
  pesosAmount: number;
}

let initialState: initialState = {
  coinSymbol: "",
  coinName: "",
  coinAmount: 0,
  coinPrice: 0,
  pesosAmount: 1500,
};

const buyCoinsSlice = createSlice({
  name: "buyCoins",
  initialState: initialState,
  reducers: {
    setBuyCoin(
      state,
      {
        payload,
      }: PayloadAction<{
        coinPrice: number;
        coinAmount: number;
        coinSymbol: string;
        coinName: string;
      }>
    ) {
      if (payload.coinPrice * payload.coinAmount >= 1500) {
        state.coinSymbol = payload.coinSymbol;
        state.coinName = payload.coinName;
        state.coinAmount = payload.coinAmount;
        state.coinPrice = payload.coinPrice;
        state.pesosAmount = payload.coinPrice * payload.coinAmount;
      } else {
        state.coinSymbol = payload.coinSymbol;
        state.coinName = payload.coinName;
        state.coinAmount = 1500 / payload.coinPrice;
        state.coinPrice = payload.coinPrice;
        state.pesosAmount = 1500;
      }
    },
    setNewAmountCoin(state, { payload }) {
      if (payload.fromPesos) {
        state.pesosAmount = payload.amount;
        state.coinAmount = payload.amount / state.coinPrice;
      } else {
        state.coinAmount = payload.amount;
        state.pesosAmount = payload.amount * state.coinPrice;
      }
    },
  },
  extraReducers: {},
});

export const buyCoinsActions = buyCoinsSlice.actions;

export default buyCoinsSlice;
