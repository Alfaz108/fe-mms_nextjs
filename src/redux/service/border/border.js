import { apiService } from '../../api/apiService';

export const borderService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    borderList: builder.query({
      query: () => ({
        url: `/border`,
        method: 'GET',
      }),
      transformResponse: (data) => data || [],
    }),

    borderDelete: builder.mutation({
      query: ({ id }) => ({
        url: `border/${id}`,
        method: 'DELETE',
      }),
      onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        queryFulfilled;
        queryFulfilled
          .then(({ data: { data, message } }) => {})
          .catch(({ error }) => {});
      },
    }),
  }),
});

export const { useBorderListQuery, useBorderDeleteMutation } = borderService;
