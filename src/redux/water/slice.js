import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWaterEtries = async () => {
    const { data } = await axios.get('/water');
    return data;
};

export const addWaterEntry = async (newEntry) => {
    const { data } = await axios.post('/water', newEntry);
    return data;
};

export const editWaterEntry = async ({ waterId, updatedEntry }) => {
    const { data } = await axios.put(`/water/${waterId}`, updatedEntry);
    return data;
};

const handlePending = (state) => {
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

const waterModalSlice = createSlice({
    name: 'water',
    initialState: {
        entries: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWaterEtries.pending, handlePending)
            .addCase(fetchWaterEtries.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.entries = action.payload;
            })
            .addCase(fetchWaterEtries.rejected, handleRejected)
            .addCase(addWaterEntry.pending, handlePending)
            .addCase(addWaterEntry.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.entries.push(action.payload);
            })
            .addCase(addWaterEntry.rejected, handleRejected)
            .addCase(editWaterEntry.pending, handlePending)
            .addCase(editWaterEntry.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const index = state.entries.findIndex(entry => entry.id === action.payload.id);
                if (index !== -1) {
                    state.entries.index = action.payload;
                }      
            })
            .addCase(editWaterEntry.rejected, handleRejected)
    }
})

export default waterModalSlice.reducer;