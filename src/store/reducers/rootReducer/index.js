import { combineReducers } from "redux";
import {weatherReducer} from "../weather/weatherReducer";
import {coronaReducer} from "../corona/coronaReducer";


export default combineReducers({
    weatherReducer,
    coronaReducer
})