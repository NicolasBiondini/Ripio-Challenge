import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { simpleCoin } from "../../types/simpleCoin";
import { getAllCoins } from "../../util/getData/getAllCoins";
import { buyCoinsActions } from "./buyCoinsSlice";

export const getAllCoinsArray = createAsyncThunk(
  "coinsSlice/getAllCoinsArray",
  async (
    payload: {
      from: boolean;
    },
    { dispatch }
  ): Promise<simpleCoin[]> => {
    try {
      const allCoins = await getAllCoins();

      if (payload.from) {
        dispatch(
          buyCoinsActions.setBuyCoin({
            coinAmount: 0,
            coinName: allCoins[0].name || "",
            coinPrice: allCoins[0].buyPrice || 0,
            coinSymbol: allCoins[0].symbol,
          })
        );
      }

      return allCoins;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

interface initialState {
  ok: boolean;
  allCoins: simpleCoin[];
}

const initialState: initialState = {
  ok: false,
  allCoins: [],
};

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCoinsArray.pending, (state) => {
      state.ok = false;
    });
    builder.addCase(
      getAllCoinsArray.fulfilled,
      (state, { payload }: PayloadAction<simpleCoin[]>) => {
        state.ok = true;
        state.allCoins = payload;
      }
    );
    builder.addCase(getAllCoinsArray.rejected, (state) => {
      state.ok = false;
    });
  },
});

export const coinsActions = coinsSlice.actions;

export default coinsSlice;
