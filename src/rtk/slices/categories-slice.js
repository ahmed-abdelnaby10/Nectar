// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchCategories = createAsyncThunk("categoriesSlice/fetchCategories", async ()=>{
//     const res = await fetch(`${process.env.REACT_APP_SERVER}/categories`);
//     const data = await res.json();
//     console.log(data);
//     return data;
// })

// export const categoriesSlice = createSlice({
//     initialState: [],
//     name: "categoriesSlice",
//     reducers: {},
//     extraReducers: (builder)=>{
//         builder.addCase(fetchCategories.fulfilled, (state, action)=>{
//             return action.payload;
//         })
//     }
// })
// export const {} = categoriesSlice.actions;
// export default categoriesSlice.reducer;