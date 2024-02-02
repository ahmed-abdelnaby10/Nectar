import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  initialState: [],
  name: "favSlice",
  reducers: {
    addToFav: (state, action) => {
      const clonedProduct = { ...action.payload };
      state.push(clonedProduct);
    },
    removeFromFav: (state, action) => {
      return state.filter((product) => product.title !== action.payload.title);
    },
    clearFav: (state, action) => {
      return [];
    },
  },
});
export const { addToFav, removeFromFav, clearFav } = favSlice.actions;
export default favSlice.reducer;
