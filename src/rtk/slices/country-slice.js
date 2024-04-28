import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
    initialState: {},
    name: "countrySlice",
    reducers: {
        getCountry: (state, action) => {
            return state = action.payload
        },
        removeCountry: (state, action) => {
            return {}
        },
    },
});

export const { getCountry, removeCountry } = countrySlice.actions;
export default countrySlice.reducer;
