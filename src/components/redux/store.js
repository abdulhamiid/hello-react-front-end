import { configureStore } from '@reduxjs/toolkit';
import loadDataReducer from './api.js';

const store = configureStore({
  reducer: {
    data: loadDataReducer,
  },
});

export default store;
