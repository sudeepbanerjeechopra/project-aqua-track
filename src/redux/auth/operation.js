import axios from '../../helpers/axiosConfig';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';
// };

export const registerUser = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/signup', credentials);
            setAuthHeader(res.data.token);
            toast.success(res.data.message);
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// export const verifyEmail = createAsyncThunk(
//     'auth/verifyEmail',
//     async (token, thunkAPI) => {
//         try {
//             const res = await axios.get(`/users/verify/${token}`);
//             console.log(res);
//             setAuthHeader(res.data.token);
//             toast.success('Email verified successfully');
//             return res.data;
//         } catch (error) {
//             toast.error('Email verification failed');
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );