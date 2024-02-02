import { createSlice } from "@reduxjs/toolkit";

export const paySlice = createSlice({
    initialState: false,
    name: "paySlice",
    reducers: {
        reversePay: (state, action)=>{
            return state = action.payload
        },
    }
})
export const {reversePay} = paySlice.actions;
export default paySlice.reducer;