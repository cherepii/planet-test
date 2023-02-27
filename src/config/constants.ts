import Home from '../pages/Home/Home'
import SingleMember from '../pages/SingleMember/SingleMember'

export const ROUTES = [
	{ path: '/', element: Home },
	{ path: '/members/:id', element: SingleMember },
]
