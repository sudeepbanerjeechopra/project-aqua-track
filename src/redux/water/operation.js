import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestAddWater,
  requestUpdateWater,
  requestDeleteWater,
  requestGetWaterDay,
  requestGetWaterMonth,
  requestGetWaterStats,
} from './services';

export const apiAddWaterMonth = createAsyncThunk(
  'water/addWater',
  async (_, thunkAPI) => {
    try {
      //some logic const res  = await requestAddWater()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiUpdateWater = createAsyncThunk(
  'water/updateWater',
  async (_, thunkAPI) => {
    try {
      //some logic const res  = await requestUpdateWater()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
