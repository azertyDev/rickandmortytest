import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICharacters } from "../models/ICharacter";

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    fetchAllCharacter: builder.query<ICharacters, { page: number }>({
      query: (arg) => {
        const { page } = arg;
        return {
          url: "/character",
          params: { page },
        };
      },
    }),
    fetchAllEpisodes: builder.query({
      query: (arg) => {
        const { page } = arg;
        return {
          url: "/episode",
          params: { page },
        };
      },
    }),
  }),
});

export const { useFetchAllCharacterQuery,useFetchAllEpisodesQuery } = apiService;
