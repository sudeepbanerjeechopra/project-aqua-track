import { createSlice } from '@reduxjs/toolkit';
import {
  apiAddWaterMonth,
  apiUpdateWater,
  apiDeleteWater,
  apiGetWaterDay,
  apiGetWaterMonth,
  apiGetWaterStats,
} from './operation';

const initialState = {
  // для дати
  selectedDate: new Date().toISOString().split('T')[0],
  selectedDateData: [],
  errorDay: null,
  isLoadingDay: false,
  // для вибраного місяця
  selectedMonth: {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  },
  monthData: [],
  errorMonth: null,
  isLoadingMonth: false,
  toggleInfo: true,
};

const waterSlice = createSlice({
  name: 'water',
  initialState: initialState,
  reducers: {
    setDate(state, action) {
      state.selectedDate = action.payload;
    },
    increaseMonth(state) {
      const newMonth = state.selectedMonth.month + 1;
      if (newMonth <= 12) {
        state.selectedMonth.month = newMonth;
      } else {
        state.selectedMonth.month = 1;
        state.selectedMonth.year += 1;
      }
    },
    decreaseMonth(state) {
      const newMonth = state.selectedMonth.month - 1;
      if (newMonth >= 1) {
        state.selectedMonth.month = newMonth;
      } else {
        state.selectedMonth.month = 12;
        state.selectedMonth.year -= 1;
      }
    },
    setToggleInfo(state) {
      state.toggleInfo = !state.toggleInfo;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiGetWaterMonth.pending, (state) => {
        state.isLoadingMonth = true;
        state.errorMonth = null;
      })
      .addCase(apiGetWaterMonth.fulfilled, (state, action) => {
        state.isLoadingMonth = false;
        state.monthData = [...action.payload];
      })
      .addCase(apiGetWaterMonth.rejected, (state, action) => {
        state.isLoadingMonth = false;
        state.errorMonth = action.payload;
      }),
});

export const { increaseMonth, decreaseMonth, setToggleInfo, setDate } =
  waterSlice.actions;

export const waterReducer = waterSlice.reducer;
