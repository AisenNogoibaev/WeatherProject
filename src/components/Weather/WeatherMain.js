import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Form from './WeatherComponent/Form'
import Weather from './WeatherComponent/Weather'
import Titles from './WeatherComponent/Titles'
import rain from './assets/img/lightning-nature.gif'
import cloudes from './assets/img/sky-sun.gif'
import sun from './assets/img/sun.gif'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import rainMusic from './assets/audio/rain.mp3'
import cloudsMusic from './assets/audio/sun.mp3'
import sunMusic from './assets/audio/sunMusic.mp3'

const WeatherMain = () => {
	const state = useSelector((state) => state.weatherReducer)
	const weatherCheck = useSelector((state) => state.weatherReducer.weatherMain)
	console.log(weatherCheck)
	const [rainM] = useState(new Audio(rainMusic))
	const [cloudsM] = useState(new Audio(cloudsMusic))
	const [sunM] = useState(new Audio(sunMusic))
	useEffect(() => {
		if (weatherCheck === 'Rain') {
			rainM.play()
			setTimeout(() => {
				rainM.pause()
			}, 5000)
		}
		if (weatherCheck === 'Clear' || weatherCheck === 'Sun') {
			sunM.play()
			setTimeout(() => {
				sunM.pause()
			}, 5000)
		}
		if (weatherCheck === 'Clouds' || weatherCheck === 'Mist') {
			cloudsM.play()
			setTimeout(() => {
				cloudsM.pause()
			}, 5000)
		}
	}, [weatherCheck])
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
		>
			<div className='wrapper'>
				{' '}
				<div className='main'>
					{' '}
					<Link to='/'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='36'
							fill='currentColor'
							class='bi bi-box-arrow-left btn-prev'
							viewBox='0 0 16 16'
						>
							<path
								fill-rule='evenodd'
								d='M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z'
							/>
							<path
								fill-rule='evenodd'
								d='M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z'
							/>
						</svg>
					</Link>
					<div className='container'>
						<div className='row'>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 1 }}
								style={{
									backgroundImage: `url(${
										weatherCheck === 'Rain'
											? rain
											: weatherCheck === 'Clear'
											? sun
											: cloudes
									})`,
								}}
								className='col-6 title-container'
							>
								<Titles />
							</motion.div>
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
		</motion.div>
	)
}
export default WeatherMain
