import { createSlice } from '@reduxjs/toolkit';

const modalInitialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
