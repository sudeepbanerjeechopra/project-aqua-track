import { createSlice } from '@reduxjs/toolkit';
import { initialStateConstant } from './constants';
import { refreshUser, registerUser, } from './operation';

const authSlice = createSlice({
    name: 'auth',
    initialState: initialStateConstant,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            state.isLoggedIn = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            });
    }
});
export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
