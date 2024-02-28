import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import favSlice from "./slices/fav-slice";
import cartAmountSlice from "./slices/cartAmount-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import paySlice from "./slices/payment-slice";
import themeSlice from "./slices/theme-slice";
import userSlice from "./slices/user-slice";
import clubPointsSlice from "./slices/clubPoints-slice";
import countrySlice from "./slices/country-slice";
// import offersSlice from "./slices/offers-slice";
// import productsSlice from "./slices/products-slice";
// import categoriesSlice from "./slices/categories-slice";
import transactionHistorySlice from "./slices/transactionHistory-slice";
import promoCodesSlice from "./slices/promoCodes-slice";
// import ordersSlice from "./slices/order-slice";

const presistConfig = {
  key: "Nectar",
  storage,
};

const reducers = combineReducers({
  cart: cartSlice,
  pay: paySlice,
  favorite: favSlice,
  cartAmount: cartAmountSlice,
  theme: themeSlice,
  // offers: offersSlice,
  // products: productsSlice,
  // categories: categoriesSlice,
  user: userSlice,
  points: clubPointsSlice,
  country: countrySlice,
  history: transactionHistorySlice,
  // orders: ordersSlice,
  promoCodes: promoCodesSlice,
});

const presistedReducers = persistReducer(presistConfig, reducers);

export const store = configureStore({
  reducer: presistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
