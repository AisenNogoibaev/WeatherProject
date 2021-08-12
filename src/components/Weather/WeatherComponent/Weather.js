import React from 'react'
import { useSelector } from 'react-redux'

const Weather = (props) => {
	const weatherCheck = useSelector((state) => state.weatherMain)
	return (
		<div className='weather__info'>
			{props.city && (
				<p className='weather__key'>
					Location:{' '}
					<span className='weather__value'>
						{props.city !== ' Not Found'
							? props.city + ',' + props.country
							: ' ' + props.error}
					</span>
				</p>
			)}
			{props.temperature && (
				<p className='weather__key'>
					Temperature:
					{weatherCheck === 'Not Found' ? (
						<span className='weather__value'> {props.error}</span>
					) : (
						<>
							<span className='weather__value'> {props.temperature}</span>
						</>
					)}
				</p>
			)}
			{props.humidity && (
				<p className='weather__key'>
					Humidity:
					<span className='weather__value'> {props.humidity}</span>
				</p>
			)}
			{props.description && (
				<p className='weather__key'>
					Conditions:
					<span className='weather__value'> {props.description}</span>
				</p>
			)}
		</div>
	)
}

export default Weather
