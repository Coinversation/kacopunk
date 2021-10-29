import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from 'stores';

export interface homepageState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: homepageState = {
  value: 0,
  status: 'idle',
};

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = homepageSlice.actions;

export const selectCount = (state: RootState) => state.homepage.value;

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

export default homepageSlice.reducer;
