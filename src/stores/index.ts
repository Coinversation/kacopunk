import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import appReducer from '../containers/appSlice';
import homepageReducer from '../containers/Homepage/slice';

const store = configureStore({
  reducer: {
    app: appReducer,
    homepage: homepageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
