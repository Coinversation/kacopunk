import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { RootState } from 'stores';

export interface appState {
  activatingConnector: AbstractConnector;
}

const initialState: appState = {
  activatingConnector: undefined,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActivatingConnector(state, action: PayloadAction<AbstractConnector>) {
      state.activatingConnector = action.payload;
    },
  },
});

export const selectActivatingConnector = (state: RootState) => state.app.activatingConnector;

export const { setActivatingConnector } = appSlice.actions;

export default appSlice.reducer;
