import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './redux/booksSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;