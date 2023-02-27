import * as memberActions from './members/member.actions'
import { removeItem } from './members/membersSlice'

export const rootActions = {
	...memberActions,
	removeItem,
}
