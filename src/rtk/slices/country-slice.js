import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
    initialState: "",
    name: "countrySlice",
    reducers: {
        getCountry: (state, action) => {
            return state = action.payload
        },
    },
});

export const { getCountry } = countrySlice.actions;
export default countrySlice.reducer;
