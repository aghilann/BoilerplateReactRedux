import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getLegacy: builder.query({
      // TODO !!!!
      query: (userID: any) => `api/legacy/${userID}`,
    }),
  }),
});

export const { useGetLegacyQuery } = apiSlice;
