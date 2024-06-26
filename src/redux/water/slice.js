import { createSlice } from '@reduxjs/toolkit';
import { addWater, updateWaterAmount } from "./operation";

const handlePending = (state) => {
    state.loading = true;
     state.error = null; 
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
            .addCase(addWater.pending, handlePending)
            .addCase(addWater.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.entries.push(action.payload);
            })
            .addCase(addWater.rejected, handleRejected)
            .addCase(updateWaterAmount.pending, handlePending)
            .addCase(updateWaterAmount.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const updatedEntry = action.payload;
                const index = state.entries.findIndex(entry => entry.id === updatedEntry.id);
                if (index !== -1) {
                    state.entries[index] = updatedEntry;
                }
            })
            .addCase(updateWaterAmount.rejected, handleRejected);
    },
});
export const { loading, error, entries} = waterModalSlice.actions
export default waterModalSlice.reducer;