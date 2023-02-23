import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { showApiUrl } from "../../consts/ApiConsts";
import { ScheduledItem } from "../../models/schedule/ScheduledItem";
import { SearchModel } from "../../models/search/SearchModel";
import { Show } from "../../models/show/ShowModel";

export const ShowService = createApi({
  reducerPath: "showApi",
  baseQuery: fetchBaseQuery({
    baseUrl: showApiUrl,
    mode: "cors",
  }),
  endpoints: (builder) => ({
    getShows: builder.query<Show[], void>({
      query: () => `/shows`,
      keepUnusedDataFor: 12 * 60 * 60,
    }),
    getScheduleByDate: builder.query<
      ScheduledItem[],
      { date: string; countryCode?: string }
    >({
      query: ({ date, countryCode = "US" }) =>
        `schedule/web?date=${date}&country=${countryCode}`,
    }),
    searchShow: builder.query<SearchModel[], { term: string }>({
      query: ({ term }) => `search/shows?q=${term}`,
    }),
  }),
});

export const {
  useGetShowsQuery,
  useGetScheduleByDateQuery,
  useSearchShowQuery,
} = ShowService;
