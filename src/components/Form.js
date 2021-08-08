import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetch_city, fetch_request } from '../store/actions'

const Form = (props) => {
	const dispatch = useDispatch()
	const [city, setCity] = useState()
	const sendCityName = () => {
		dispatch(fetch_city({ city }))
	}
	return (
		<>
			<input
				value={city}
				onChange={(e) => setCity(e.target.value)}
				type='text'
				name='city'
				placeholder='City...'
			/>
			{/* <input type='text' name='country' placeholder='Country...' /> */}
			<button onClick={sendCityName}>Get Weather</button>
		</>
	)
}

export default Form
