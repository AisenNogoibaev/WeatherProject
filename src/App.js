import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import WeatherMain from './components/Weather/WeatherMain'
import Home from './layouts/HomePage'
import CoronaVirus from './components/CoronaVirus'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={'/corona'} component={CoronaVirus} />
				<Route path={'/weather'} component={WeatherMain} />
				<Route path={'/'} component={Home} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
