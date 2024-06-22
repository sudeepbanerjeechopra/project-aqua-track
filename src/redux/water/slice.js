import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWaterEtries = createAsyncThunk('water/fetchEntries', async () => {
    const response = await axios.get('api/water-entries');
    return response.data;
});

export const addWaterEntry = createAsyncThunk('water/addEntry', async (newEntry) => {
    const response = await axios.post('api/water-entries', newEntry);
    return response.data;
});

export const editWaterEntry = createAsyncThunk('water/editEntry', async ({ id, updatedEntry }) => {
    const response = await axios.put(`api/water-entries${id}`, updatedEntry);
    return response.data;
});

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