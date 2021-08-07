export const UPDATE = 'UPDATE'
export const ERROR = 'ERROR'

// const APP_KEY = '62d5904a96356d22994c12327163e330'

export const getWeather = (e) => async (dispatch) => {
	const APP_KEY = '62d5904a96356d22994c12327163e330'
	e.preventDefault()
	const city = e.target.elements.city.value
	const api_call = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_KEY}&units=metric`,
	)
	const data = await api_call.json()

	if (city && data.cod != 404) {
		dispatch(up_date)({
			temperature: data.main.temp,
			city: data.name,
			country: data.sys.country,
			humidity: data.main.humidity,
			description: data.weather[0].description,
			error: '',
		})
	} else {
		dispatch(error)({
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			error: 'Please enter the correct value.',
		})
	}
}

export const up_date = (payload) => ({
	type: UPDATE,
	payload,
})

export const error = (payload) => ({
	type: ERROR,
	payload,
})
