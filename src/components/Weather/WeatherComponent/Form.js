import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetch_city } from '../../../store/actions'

const Form = () => {
	const dispatch = useDispatch()
	const [city, setCity] = useState('')
	const sendCityName = () => {
		dispatch(fetch_city({ city }))
	}
	return (
		<div className='form'>
			<input
				value={city}
				onChange={(e) => setCity(e.target.value)}
				type='text'
				name='city'
				placeholder='City...'
			/>
			<div>
				<button className='form__button__weather' onClick={sendCityName}>Get Weather</button>
			</div>
		</div>
	)
}

export default Form
