import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://127.0.0.1:3000/api/v1/podcasts';


export const fetchPodcasts = createAsyncThunk(
  'fetchPodcasts',
  async () => {
    const response = await axios.get(URL);
    return response.data;
  },
);

export const getPodcast = createAsyncThunk(
  'getPodcast',
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

const INITIALPODCASTS = {podcasts: [], loading: 'ideal', podcast: {}}

const podcastSlice = createSlice({
  name: 'books',
  initialState: INITIALPODCASTS,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPodcasts.pending, (state) => {
        state.loading = 'loading'

      })
      .addCase(fetchPodcasts.fulfilled, (state, action) => {
        state.loading = "ideal"
        state.podcasts = action.payload.podcasts
      })
      .addCase(getPodcast.fulfilled, (state, action) => {
        state.loading = "ideal"
        state.podcast = action.payload.podcast
      })
      
      .addDefaultCase((state) => state);
  },
});

export default podcastSlice.reducer;