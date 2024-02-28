import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    initialState: {},
    name: "userSlice",
    reducers: {
        addUser: (state, action) => {
            state = {
                userName: action.payload.userName,
                email: action.payload.email,
            };
            return state
        },
        clearUser: (state, action) => {
            return {};
        },
    },
});

export const { addUser, clearUser } = userSlice.actions;
export default userSlice.reducer;