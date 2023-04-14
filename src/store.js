import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/words';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {
    search: searchReducer,
  }, 
  middleware: [thunkMiddleware],
});

export default store;
