import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import { routesData } from './routes-data'

const Routs = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routesData.map(route => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
                <Route path='*' element={''} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routs
