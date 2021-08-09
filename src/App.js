import React, { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import WeatherMain from './components/Weather/WeatherMain'
import Home from './layouts/HomePage'
import CoronaVirus from './components/CoronaVirus'

function App() {
	const state = useSelector((state) => state)

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
