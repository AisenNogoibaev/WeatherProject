import React from 'react'
import { useSelector } from 'react-redux'
import Form from './WeatherComponent/Form'
import Weather from './WeatherComponent/Weather'
import Titles from './WeatherComponent/Titles'

const WeatherMain = () => {
	const state = useSelector((state) => state)

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
								<Form />
								<Weather
									temperature={state.temperature}
									city={state.city}
									country={state.country}
									humidity={state.humidity}
									description={state.description}
									error={state.error}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default WeatherMain
