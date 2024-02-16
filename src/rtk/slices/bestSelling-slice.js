// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchBestSelling = createAsyncThunk("bestSellingSlice/fetchProducts", async ()=>{
//     const res = await fetch(`${process.env.REACT_APP_SERVER}/best-selling`);
//     const data = await res.json();
//     console.log(data);
//     return data;
// })

// export const bestSellingSlice = createSlice({
//     initialState: [],
//     name: "bestSellingSlice",
//     reducers: {},
//     extraReducers: (builder)=>{
//         builder.addCase(fetchBestSelling.fulfilled, (state, action)=>{
//             return action.payload;
//         })
//     }
// })
// export const {} = bestSellingSlice.actions;
// export default bestSellingSlice.reducer;