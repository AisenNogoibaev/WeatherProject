import React, { useState } from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
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
