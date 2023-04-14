import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchQuery: '',
    searchResults: {},
    isLoading: false,
  },
  reducers: {
    search: (state, action) => {
      state.searchQuery = action.payload;
      state.isLoading = true;
    },
    searchSuccess: (state, action) => {
      state.searchResults = action.payload;
      state.isLoading = false;
    },
    searchError: (state) => {
      state.searchResults = {};
      state.isLoading = false;
    },
    clearSearch: (state) => {
      state.searchQuery = '';
      state.searchResults = {};
    },
  },
});

export const { search, searchSuccess, searchError, clearSearch } = searchSlice.actions;

export const searchAsync = (query) => async (dispatch) => {
  try {
    dispatch(search(query));
    const response = await axios.post(`http://127.0.0.1:8000/word?input_word=${query}`);
    dispatch(searchSuccess(response.data));
  } catch (error) {
    dispatch(searchError());
  }
};

export default searchSlice.reducer;
