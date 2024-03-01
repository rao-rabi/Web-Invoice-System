import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../Features/Products";

const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export default store;
