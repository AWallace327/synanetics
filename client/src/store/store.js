import { configureStore } from '@reduxjs/toolkit';
import basketReducer from 'store/basketSlice';

const store = configureStore({
  reducer: {
    basket: basketReducer
  }
});

export default store;