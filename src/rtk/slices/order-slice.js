// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchOrders = createAsyncThunk("ordersSlice/fetchOrders", async ()=>{
//     const res = await fetch(`${process.env.REACT_APP_SERVER}/orders`);
//     const data = await res.json();
//     console.log(data);
//     return data;
// })

// export const ordersSlice = createSlice({
//     initialState: [],
//     name: "ordersSlice",
//     reducers: {},
//     extraReducers: (builder)=>{
//         builder.addCase(fetchOrders.fulfilled, (state, action)=>{
//             return action.payload;
//         })
//     }
// })
// export const {} = ordersSlice.actions;
// export default ordersSlice.reducer;