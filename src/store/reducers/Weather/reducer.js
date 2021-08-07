
import { UPDATE } from '../../actions/weather'

const initialState = {
	temperature: null,
	city: null,
	country: null,
	humidity: null,
	description: null,
	error: null,
}

export const WeatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE:
			return {
				...state,
				temperature: action.payload.temperature,
				country: action.payload.country,
				humidity: action.payload.humidity,
				city: action.payload.city,
				description: action.payload.description,
				error: action.payload.error,
			}
		default:
			return state
	}
}
