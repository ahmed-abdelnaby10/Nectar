import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk("countriesSlice/fetchCountries", async ()=>{
    const res = await fetch("https://countriesnow.space/api/v0.1/countries/flag/images");
    const data = await res.json();
    return data;
})

export const countriesSlice = createSlice({
    initialState: [],
    name: "countriesSlice",
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchCountries.fulfilled, (state, action)=>{
            return action.payload;
        })
    }
})
export const {} = countriesSlice.actions;
export default countriesSlice.reducer;