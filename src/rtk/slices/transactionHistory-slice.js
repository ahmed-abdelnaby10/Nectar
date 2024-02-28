import { createSlice } from "@reduxjs/toolkit";

export const transactionHistory = createSlice({
    initialState: [],
    name: "transactionHistory",
    reducers: {
        addToOrdersHistory: (state, action) => {
            const order = {...action.payload}
            state.push(order)
        },
        clearOrdersHistory: (state, action) => {
            return [];
        },
    },
});
export const { addToOrdersHistory, clearOrdersHistory } = transactionHistory.actions;
export default transactionHistory.reducer;
