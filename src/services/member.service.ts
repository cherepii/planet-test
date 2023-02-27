import instance from '../api/api'
import { IMemberResponse } from '../shared/types'

export const MemberService = {
	async getAll() {
		const res = await instance.get<IMemberResponse>('/data')

		return res.data
	},
}
