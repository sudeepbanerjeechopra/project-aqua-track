import { createSlice } from '@reduxjs/toolkit';
import { initialStateConstant } from './constants';
import { forgetPassword, logIn, logInWithGoogle, logOut, refreshUser, registerUser, resetPassword } from './operation';

const authSlice = createSlice({
    name: 'auth',
    initialState: initialStateConstant,
    reducers: {
        setToken(state, action) {
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
            state.isLoggedIn = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.refreshToken = action.payload.refreshToken;
                state.isLoggedIn = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.refreshToken = action.payload.refreshToken;
                state.isLoggedIn = true;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(logInWithGoogle.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.refreshToken = action.payload.refreshToken;
                state.isLoggedIn = true;
            })
            .addCase(logInWithGoogle.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
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
            })

            .addCase(forgetPassword.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(forgetPassword.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isRefreshing = false;
            })
            .addCase(forgetPassword.rejected, (state) => {
                state.isRefreshing = false;
            })

            .addCase(resetPassword.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isRefreshing = false;
            })
            .addCase(resetPassword.rejected, (state) => {
                state.isRefreshing = false;
            });
    },
});

export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
