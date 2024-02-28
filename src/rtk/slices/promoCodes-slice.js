import { createSlice } from "@reduxjs/toolkit";

export const promoCodesSlice = createSlice({
    initialState: [],
    name: "promoCodesSlice",
    reducers: {
        addPromoCode: (state, action) => {
            state.push(action.payload)
        },
        removePromoCode: (state, action) => {
            return state.filter((code)=> code === action.payload)
        },
    },
});
export const { addPromoCode, removePromoCode } = promoCodesSlice.actions;
export default promoCodesSlice.reducer;
