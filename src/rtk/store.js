import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import favSlice from "./slices/fav-slice";
import cartAmountSlice from "./slices/cartAmount-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import paySlice from "./slices/payment-slice";
import themeSlice from "./slices/theme-slice";

const presistConfig = {
  key: "Quick-Bite",
  storage,
};

const reducers = combineReducers({
  cart: cartSlice,
  pay: paySlice,
  favorite: favSlice,
  cartAmount: cartAmountSlice,
  theme: themeSlice,
});

const presistedReducers = persistReducer(presistConfig, reducers);

export const store = configureStore({
  reducer: presistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
