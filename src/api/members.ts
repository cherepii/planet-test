import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IMember } from '../shared/types'

export const membersApi = createApi({
	reducerPath: 'memberApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://new-backend.unistory.app/api',
	}),
	endpoints: (builder) => ({
		getMemberById: builder.query<IMember, string>({
			query: (id) => `/data/id/${id}`,
		}),
	}),
})

export const { useGetMemberByIdQuery } = membersApi
