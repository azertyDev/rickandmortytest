import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../components/api/api";
import { ICharacters } from "../../models/ICharacter";

export const fetchCharacters = createAsyncThunk(
  "user/fetchCharacters",
  async (_, thunkApi) => {
    try {
      const response = await api.get<ICharacters>("/character");
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue("Error while fetching the data!");
    }
  }
);
