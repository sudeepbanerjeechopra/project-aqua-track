import axios from '../../helpers/axiosConfig';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk(
    'users/get',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('/users/happy');
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)