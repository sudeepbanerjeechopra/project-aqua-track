import { createSelector } from '@reduxjs/toolkit';
// logic for monthInfo
export const selectWaterMonth = (state) => state.water.monthData;
export const selectisLoadingMonth = (state) => state.water.isLoadingMonth;
export const selectMonth = (state) => state.water.selectedMonth;
export const selectMonthError = (state) => state.water.errorMonth;
export const selectToggleInfo = (state) => state.water.toggleInfo;
export const selectDate = (state) => state.water.selectedDate;

//
export const selectEntries = (state) => state.water.entries;

export const selectLoading = (state) => state.water.loading;

export const selectError = (state) => state.water.error;
