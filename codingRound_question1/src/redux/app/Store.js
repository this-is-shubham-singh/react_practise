import { configureStore } from "@reduxjs/toolkit";
import datareducer from "../features/DataSlice";

const Store = configureStore({
  reducer: {
    dataApp: datareducer,
  },
});

export default Store;
