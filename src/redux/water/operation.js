import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from 'axios';

export const addWater = createAsyncThunk(
  'water/addWater',
  async (newEntry, thunkAPI) => {
    try {
      const response = await axios.post('/water', newEntry);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWaterAmount = createAsyncThunk(
  'water/updateWaterAmount',
  async ({ waterId, updatedAmount }, thunkAPI) => {
    try {
      const response = await axios.patch(`/water/${waterId}/amount`, {
        amount: updatedAmount
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);