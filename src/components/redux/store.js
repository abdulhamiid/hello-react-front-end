import { configureStore } from '@reduxjs/toolkit';
import loadDataReducer from './api';

const store = configureStore({
  reducer: {
    data: loadDataReducer,
  },
});

export default store;
