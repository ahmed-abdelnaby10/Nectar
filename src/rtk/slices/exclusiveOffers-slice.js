// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchExclusiveOffers = createAsyncThunk("exclusiveOffersSlice/fetchProducts", async ()=>{
//     const res = await fetch(`${process.env.REACT_APP_SERVER}/exclusive-offers`);
//     const data = await res.json();
//     console.log(data);
//     return data;
// })

// export const exclusiveOffersSlice = createSlice({
//     initialState: [],
//     name: "exclusiveOffersSlice",
//     reducers: {},
//     extraReducers: (builder)=>{
//         builder.addCase(fetchExclusiveOffers.fulfilled, (state, action)=>{
//             return action.payload;
//         })
//     }
// })
// export const {} = exclusiveOffersSlice.actions;
// export default exclusiveOffersSlice.reducer;