// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchOffers = createAsyncThunk("offersSlice/fetchProducts", async ()=>{
//     const res = await fetch(`${process.env.REACT_APP_SERVER}/offers`);
//     const data = await res.json();
//     console.log(data);
//     return data;
// })

// export const offersSlice = createSlice({
//     initialState: [],
//     name: "offersSlice",
//     reducers: {},
//     extraReducers: (builder)=>{
//         builder.addCase(fetchOffers.fulfilled, (state, action)=>{
//             return action.payload;
//         })
//     }
// })
// export const {} = offersSlice.actions;
// export default offersSlice.reducer;