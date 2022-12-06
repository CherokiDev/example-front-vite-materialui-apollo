import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/main/MainPage'

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
		</Routes>
	)
}
