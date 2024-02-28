import { createSlice } from "@reduxjs/toolkit";

export const clubPointsSlice = createSlice({
    initialState: 0,
    name: "clubPointsSlice",
    reducers: {
        addPoints: (state, action) => {
            return state += action.payload
        },
        removePoints: (state, action) => {
            return state -= action.payload
        },
        clearClubPoints: (state, action) => {
            return 0;
        },
    },
});
export const { addPoints, removePoints, clearClubPoints } = clubPointsSlice.actions;
export default clubPointsSlice.reducer;
