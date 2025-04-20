import React from "react";
import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increement: (state) => {
      state.value += 1;
    },
    decreement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increement, decreement } = counterSlice.actions;
export default counterSlice.reducer;
