import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: { path: "" },
  reducers: {
    setPath(state, { payload }) {
      state.path = payload;
    },
  },
});

export const locationActions = locationSlice.actions;

export default locationSlice;
