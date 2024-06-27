import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axios from 'axios';
import {
  requestAddWater,
  requestUpdateWater,
  requestDeleteWater,
  requestGetWaterDay,
  requestGetWaterMonth,
  requestGetWaterStats,
} from './services';

export const apiDeleteWater = createAsyncThunk(
  'water/deleteWater',
  async (_, thunkAPI) => {
    try {
      //some logic const res  = await requestDeleteWater()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiGetWaterDay = createAsyncThunk(
  'water/getWaterDay',
  async (_, thunkAPI) => {
    try {
      //some logic const res  = await requestGetWaterDay();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiGetWaterMonth = createAsyncThunk(
  'water/getWaterMonth',
  async (date, thunkAPI) => {
    try {
      const response = await requestGetWaterMonth(date);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const apiGetWaterStats = createAsyncThunk(
  'water/getWaterStats',
  async (_, thunkAPI) => {
    try {
      const response = await requestGetWaterStats();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (newEntry, thunkAPI) => {
    try {
      const response = await axios.post('/water', newEntry);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWaterAmount = createAsyncThunk(
  'water/updateWaterAmount',
  async ({ waterId, updatedAmount }, thunkAPI) => {
    try {
      const response = await axios.patch(`/water/${waterId}/amount`, {
        amount: updatedAmount,
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
