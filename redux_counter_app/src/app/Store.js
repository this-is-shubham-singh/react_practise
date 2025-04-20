import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counterslice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
