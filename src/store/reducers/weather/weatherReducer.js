import {
	FETCH_ERROR,
	FETCH_REQUEST,
	FETCH_SUCCESS,
} from '../../actions/weather/index'

const initialState = {
	temperature: null,
	city: null,
	country: null,
	humidity: null,
	description: null,
	weatherMain: null,
	error: null,
}
export const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SUCCESS:
			console.log(action.payload)
			console.log(state)
			return {
				...state,
				temperature: action.payload.main.temp,
				city: action.payload.name,
				country: action.payload.sys.country,
				humidity: action.payload.main.humidity,
				description: action.payload.weather[0].description,
				weatherMain: action.payload.weather[0].main,
				error: null,
			}
		case FETCH_ERROR:
			return {
				...state,
				temperature: 'Not Found',
				city: 'Not Found',
				country: null,
				humidity: 'Not Found',
				description: 'Not Found',
				weatherMain: 'Not Found',
				error: 'Not Found',
			}
		case FETCH_REQUEST:
			return state
		default:
			return state
	}
}
