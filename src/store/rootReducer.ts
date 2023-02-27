import { membersApi } from '../api/members'

import membersSlice from './members/membersSlice'

export const rootReducer = {
	members: membersSlice,
	[membersApi.reducerPath]: membersApi.reducer,
}
