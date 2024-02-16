import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import favSlice from "./slices/fav-slice";
import cartAmountSlice from "./slices/cartAmount-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import paySlice from "./slices/payment-slice";
import themeSlice from "./slices/theme-slice";
import userSlice from "./slices/user-slice";
// import bestSellingSlice from "./slices/bestSelling-slice";
// import exclusiveOffersSlice from "./slices/exclusiveOffers-slice";
// import offersSlice from "./slices/offers-slice";
// import productsSlice from "./slices/products-slice";

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
  // offers: offersSlice,
  // products: productsSlice,
  // bestSelling: bestSellingSlice,
  // exclusiveOffers: exclusiveOffersSlice,
  user: userSlice,
});

const presistedReducers = persistReducer(presistConfig, reducers);

export const store = configureStore({
  reducer: presistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
