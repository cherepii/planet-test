import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { membersApi } from '../api/members'

import { rootReducer } from './rootReducer'

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(membersApi.middleware),
})

setupListeners(store.dispatch)

export type TypeRootState = ReturnType<typeof store.getState>
