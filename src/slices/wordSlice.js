import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";






export const featchWords = createAsyncThunk('words/featchWords', async () => {
    const responce = await axios.get(`https://daily-words.onrender.com`)
    return responce.data.words
})

export const wordSlice = createSlice({
    name: 'words',
    initialState: {
        words: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(featchWords.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(featchWords.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.words = action.payload;
        })
        .addCase(featchWords.rejected,(state,action)=>{
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default wordSlice.reducer;