import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null || 'Demo user because real user data is not found',
    error: null,
    loading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.user = action.payload;
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logoutUser: (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    },
})
export const { registerUser, loginSuccess, logoutUser } = authSlice.actions;
export default authSlice.reducer;

