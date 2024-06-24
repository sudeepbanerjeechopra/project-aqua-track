// import { createSlice } from '@reduxjs/toolkit';
// import { fetchWater, addWater, editWater } from "../../redux/water/operation";

// export const fetchWaterEntries = async () => {
//     const { data } = await axios.get('/water');
//     return data;
// };

// export const addWaterEntry = async (newEntry) => {
//     const { data } = await axios.post('/water', newEntry);
//     return data;
// };

// export const editWaterEntry = async ({ waterId, updatedEntry }) => {
//     const { data } = await axios.put(`/water/${waterId}`, updatedEntry);
//     return data;
// };

// const handlePending = (state) => {
//     state.loading = true;
// };

// const handleRejected = (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
// }

// const waterModalSlice = createSlice({
//     name: 'water',
//     initialState: {
//         entries: [],
//         loading: false,
//         error: null,
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchWater.pending, handlePending)
//             .addCase(fetchWater.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.entries = action.payload;
//             })
//             .addCase(fetchWater.rejected, handleRejected)
//             .addCase(addWater.pending, handlePending)
//             .addCase(addWater.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.entries.push(action.payload);
//             })
//             .addCase(addWater.rejected, handleRejected)
//             .addCase(editWater.pending, handlePending)
//             .addCase(editWater.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 const updatedEntry = action.payload;
//                 const index = state.entries.findIndex(entry => entry.id === updatedEntry.id);
//                 if (index !== -1) {
//                     state.entries[index] = updatedEntry;
//                 }
//             })
//             .addCase(editWater.rejected, handleRejected);
//     },
// });

// export default waterModalSlice.reducer;