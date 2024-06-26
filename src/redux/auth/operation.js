import axios from '../../helpers/axiosConfig';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken } from './slice';

export const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const setupAxiosInterceptors = (store) => {
    axios.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    const { refreshToken } = store.getState().auth;
                    console.log("Trying to refresh tokens with refresh token:", refreshToken);
                    const { data } = await axios.post('/users/refresh-tokens', { refreshToken });

                    setAuthHeader(data.token);
                    store.dispatch(setToken({ token: data.token, refreshToken: data.refreshToken }));
                    originalRequest.headers.Authorization = `Bearer ${data.token}`;
                    return axios(originalRequest);
                } catch (err) {
                    return Promise.reject(err);
                }
            }
            return Promise.reject(error);
        }
    );
};

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

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/profile');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getRefreshToken = async (dispatch, token, refreshToken) => {
    try {
        const response = await axios.post('/users/refresh-tokens', { refreshToken }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        const { token: newToken, refreshToken: newRefreshToken } = response.data;
        dispatch(setToken({ token: newToken, refreshToken: newRefreshToken }));
    } catch (error) {
        console.error('Error fetching refresh token:', error);
    }
};
