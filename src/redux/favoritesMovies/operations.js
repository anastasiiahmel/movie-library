import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularMovies } from 'api/api';

export const allMovies = createAsyncThunk(
  'popular/movies',
  async (data, thunkAPI) => {
    try {
      return getPopularMovies(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
