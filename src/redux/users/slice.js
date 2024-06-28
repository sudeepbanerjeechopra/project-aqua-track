import { createSlice } from '@reduxjs/toolkit';
import { initialStateConstant } from './constats.js';
import { getUsers } from './operation.js';

const usersSlice = createSlice({
  name: 'users',
  initialState: initialStateConstant,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })

      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
