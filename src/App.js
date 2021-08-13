import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import WeatherMain from './components/Weather/WeatherMain'
import Home from './components/HomePage'
import CoronaVirus from './components/CoronaVirus'

import './App.css'
import './assets/styles-adaptive.css/weather.css'

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
