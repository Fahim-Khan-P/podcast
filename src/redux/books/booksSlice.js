import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://127.0.0.1:3000/api/v1/books';


export const fetchBooks = createAsyncThunk(
  'fetchBooks',
  async () => {
    const response = await axios.get(URL);
    return response.data;
  },
);

export const getBook = createAsyncThunk(
  'getBook',
  async (id) => {
    console.log(id)
    try {
      const response = await axios.get(`${URL}/${id}`);
      return response.data;
      
    } catch (error) {
      console.log(error)
    }
  },
);

const INITIALBOOKS = {books: [], loading: 'ideal', showBook: {}}

const bookSlice = createSlice({
  name: 'books',
  initialState: INITIALBOOKS,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = 'loading'

      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = "ideal"
        state.books = action.payload.books
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.loading = "ideal"
        state.showBook = action.payload.book
      })
      
      .addDefaultCase((state) => state);
  },
});

export default bookSlice.reducer;