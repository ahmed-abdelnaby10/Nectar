// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", async ()=>{
//     const res = await fetch(`${process.env.REACT_APP_SERVER}/products`);
//     const data = await res.json();
//     console.log(data);
//     return data;
// })

// export const productsSlice = createSlice({
//     initialState: [],
//     name: "productsSlice",
//     reducers: {},
//     extraReducers: (builder)=>{
//         builder.addCase(fetchProducts.fulfilled, (state, action)=>{
//             return action.payload;
//         })
//     }
// })
// export const {} = productsSlice.actions;
// export default productsSlice.reducer;