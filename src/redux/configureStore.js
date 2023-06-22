import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';
import podcastsSlice from './podcasts/podcastsSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    podcasts: podcastsSlice,
  },
});

export default store;