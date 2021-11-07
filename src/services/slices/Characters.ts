import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCharacters } from "../actions/actionCreators";
import { ICharacters } from "../../models/ICharacter";

interface CharactersState {
  characters: ICharacters[];
  isLoading: boolean;
  error: string;
}

const initialState: CharactersState = {
  characters: [],
  isLoading: false,
  error: "",
};

export const characters = createSlice({
  name: "charactersSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.characters = action.payload;
    },
    [fetchCharacters.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacters.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default characters.reducer;
