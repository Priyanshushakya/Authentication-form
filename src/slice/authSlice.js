import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { POST } from "../config/api";
import pathConfig from "../config/pathConfig";

 export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await POST(pathConfig.REGISTER, payload);
            return response.data;
        } catch (error) {
            return rejectWithValue(
  error.response?.data?.message || 'Registration failed'
);
        }
    }
 )


 export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (payload, {rejectWithValue}) => {
        try {
            const response = await POST(pathConfig.LOGIN, payload);
            return response.data;
        } catch (error) {
            return rejectWithValue(
  error.response?.data?.message || 'Login failed'
);
        }
    }
 )


const initialState = {
    user: null || 'Demo user because real user data is not found',
    isAuthenticated: false,
    error: null,
    loading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser: (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }

})
export const {logoutUser } = authSlice.actions;
export default authSlice.reducer;

