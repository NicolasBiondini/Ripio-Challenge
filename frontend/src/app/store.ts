import { configureStore } from "@reduxjs/toolkit";
import coinsSlice from "./slices/coinsSlice";
import converterSlice from "./slices/converterSlice";
import walletSlice from "./slices/walletSlice";
import locationSlice from "./slices/locationSlice";
import buyCoinsSlice from "./slices/buyCoinsSlice";

const store = configureStore({
  reducer: {
    location: locationSlice.reducer,
    wallet: walletSlice.reducer,
    converter: converterSlice.reducer,
    coins: coinsSlice.reducer,
    buyCoins: buyCoinsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
