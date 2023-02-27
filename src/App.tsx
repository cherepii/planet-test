import { Route, Routes } from 'react-router-dom'

import { ROUTES } from './config/constants'

const App = () => {
	return (
		<Routes>
			{ROUTES.map((route) => (
				<Route key={route.path} path={route.path} element={<route.element />} />
			))}
		</Routes>
	)
}

export default App
