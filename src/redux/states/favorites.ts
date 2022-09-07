import { LocalStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string) : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload)
      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredFavorites = state.filter((favorite: Person) => favorite.id !== action.payload.id);
      setLocalStorage(LocalStorageTypes.FAVORITES, filteredFavorites);
      return filteredFavorites;
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;