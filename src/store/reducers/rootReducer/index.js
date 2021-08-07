import { combineReducers } from 'redux'
// import { CoronaWeather } from '../Corona/reducer'
import { WeatherReducer } from '../Weather/reducer'

export default combineReducers({
	WeatherReducer,
	// CoronaWeather,
})
