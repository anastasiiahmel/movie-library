import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteMovie(state, action) {
      const exists = state.favorites.find(
        movie => movie.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavoriteMovie(state, action) {
      state.favorites = state.favorites.filter(
        movie => movie.id !== action.payload
      );
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavoriteMovie, removeFavoriteMovie } = favoriteSlice.actions;
