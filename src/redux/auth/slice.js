import { createSlice } from '@reduxjs/toolkit';
import { initialStateConstant } from './constants';
import { registerUser } from './operation';

const authSlice = createSlice({
    name: 'auth',
    initialState: initialStateConstant,
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload;
            });
    }
});

export const authReducer = authSlice.reducer;