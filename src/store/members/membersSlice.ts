import { createSlice } from '@reduxjs/toolkit'

import { IMember } from '../../shared/types'

import { getMembers } from './member.actions'

interface IInitialState {
	isLoading: boolean
	error: any
	members: IMember[] | null
}

const initialState: IInitialState = {
	error: null,
	isLoading: false,
	members: null,
}

const membersSlice = createSlice({
	name: 'members',
	initialState,
	reducers: {
		removeItem: (state) => {
			state.members?.shift()
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getMembers.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getMembers.rejected, (state, { payload }) => {
			state.isLoading = false
			state.error = payload
		})
		builder.addCase(getMembers.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.error = null
			state.members = payload
		})
	},
})

export const { removeItem } = membersSlice.actions
export default membersSlice.reducer
