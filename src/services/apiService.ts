import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICharacters } from "../models/ICharacter";
import { IEpisode } from "../models/IEpisode";

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    fetchAllCharacter: builder.query<
      ICharacters,
      { page: number; species?: string; status?: string; gender?: string }
    >({
      query: (arg) => {
        const { page, species, status, gender } = arg;
        return {
          url: "/character",
          params: { page, species, status, gender },
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

export const { useFetchAllCharacterQuery, useFetchAllEpisodesQuery } =
  apiService;
