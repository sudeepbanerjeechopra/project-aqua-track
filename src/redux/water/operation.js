import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const addWater = createAsyncThunk(
  'water/addWater',
  async (newEntry, thunkAPI) => {
    try {
      const response = await axios.post('https://aqua-track-api.onrender.com/water', newEntry);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWaterAmount = createAsyncThunk(
  'water/updateWaterAmount',
  async ({ waterId, updatedAmount }, thunkAPI) => {
    try {
      const response = await axios.patch(`https://aqua-track-api.onrender.com/water/${waterId}/amount`, {
        amount: updatedAmount
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);