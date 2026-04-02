import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null || 'Demo user because real user data is not found',
    error: null,
    loading: false,

}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        registerUser:(state, action) => {
            state.user = action.payload;
        },
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        logoutUser: (state, action) => {
            state.user = null;
        }
    },
})

export const { registerUser, loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

