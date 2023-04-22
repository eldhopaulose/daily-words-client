import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import wordReducer from './slices/wordSlice'
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {
    search: searchReducer,
    words: wordReducer,
  }, 
  middleware: [thunkMiddleware],
});

export default store;
