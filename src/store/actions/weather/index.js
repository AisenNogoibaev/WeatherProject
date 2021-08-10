import { APP_KEY } from '../../../api/api'

export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

export const fetch_request = (payload) => ({
	type: FETCH_REQUEST,
	payload,
})
export const fetch_success = (payload) => ({
	type: FETCH_SUCCESS,
	payload,
})
export const fetch_error = (payload) => ({
	type: FETCH_ERROR,
	payload,
})
export const fetch_city = ({ city }) => {
	console.log('success')
	return async (dispatch) => {
		dispatch(fetch_request())
		console.log('success request')
		try {
			console.log('success success')
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_KEY}&units=metric`,
			)
			const data = await response.json()
			dispatch(fetch_success(data))
		} catch (e) {
			console.log('success success')
			dispatch(fetch_error(e))
		}
	}
}
