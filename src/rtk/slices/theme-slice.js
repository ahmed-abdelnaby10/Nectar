import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    initialState: "light",
    name: "themeSlice",
    reducers: {
        changeTheme: (state, action)=>{
            return state = action.payload
        },
    }
})
export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;