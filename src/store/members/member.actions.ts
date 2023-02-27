import { createAsyncThunk } from '@reduxjs/toolkit'

import { MemberService } from '../../services/member.service'

import { IMember } from './../../shared/types'
import { IPayload } from './member.types'

export const getMembers = createAsyncThunk<IMember[], IPayload>(
	'get members',
	async (payload, thunkApi) => {
		try {
			const result = await MemberService.getAll()

			result.items.unshift(payload)

			return result.items
		} catch (error: any) {
			return thunkApi.rejectWithValue(error?.message)
		}
	}
)
