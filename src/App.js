import React, { useState } from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css'
const APP_KEY = '62d5904a96356d22994c12327163e330'

function App() {
	const [bd, setBd] = useState({
		temperature: null,
		city: null,
		country: null,
		humidity: null,
		description: null,
		error: null,
	})

	const getWeather = async (e) => {
		e.preventDefault()
		const city = e.target.elements.city.value
		const api_call = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_KEY}&units=metric`,
		)
		const data = await api_call.json()
		console.log(data)
		if (city && data.cod != 404) {
			setBd({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: '',
			})
		} else {
			setBd({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: 'Please enter the correct value.',
			})
		}
	}
	return (
		<div>
			<div className='wrapper'>
				<div className='main'>
					<div className='container'>
						<div className='row'>
							<div className='col-6 title-container'>
								<Titles />
							</div>
							<div className='col-6 form-container'>
								<Form getWeather={getWeather} />
								<Weather
									temperature={bd.temperature}
									city={bd.city}
									country={bd.country}
									humidity={bd.humidity}
									description={bd.description}
									error={bd.error}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
