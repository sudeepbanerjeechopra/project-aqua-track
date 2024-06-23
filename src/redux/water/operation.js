import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWaterEntries, addWaterEntry, editWaterEntry } from '../../redux/water/slice';

export const fetchWater = createAsyncThunk(
    "water/fetchWater",
    async (_, thunkAPI) => {
        try {
            const response = fetchWaterEntries();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addWater = createAsyncThunk(
    "water/addWater",
    async (newWater, thunkAPI) => {
        try {
            const response = addWaterEntry(newWater);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const editWater = createAsyncThunk(
    "water/editWater",
    async ({ waterId, updatedEntry }, thunkAPI) => {
        try {
            const response = editWaterEntry({ waterId, updatedEntry });
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); 
        }
    }
)