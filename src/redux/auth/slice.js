import { createSlice } from '@reduxjs/toolkit';
import { initialStateConstant } from './constants';
import { registerUser, } from './operation';

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
    }
});
export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
