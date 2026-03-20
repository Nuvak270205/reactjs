import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice.js';

export const storeRTK = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
