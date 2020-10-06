import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import photoReducer from 'features/photo/PhotoSlice';

export const store = configureStore({
  reducer: {
    photos: photoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
