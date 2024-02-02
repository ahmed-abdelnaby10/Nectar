import { createSlice } from "@reduxjs/toolkit";

export const cartAmountSlice = createSlice({
    initialState: [],
    name: "cartAmountSlice",
    reducers: {
        updateCardAmount: (state, action) => {
            const repeatedProduct = state.find((product)=>{
                return product.title === action.payload.title
            })
            if (repeatedProduct) {
                repeatedProduct.price = action.payload.price;
                repeatedProduct.quan = action.payload.quan;
            }else {
                state.push(action.payload);
            }
        },
        clearProdAmount: (state, action) => {
            return state.filter(
                (product) => product.title !== action.payload.title
            );
        },
    }
})
export const {updateCardAmount, clearProdAmount} = cartAmountSlice.actions;
export default cartAmountSlice.reducer;