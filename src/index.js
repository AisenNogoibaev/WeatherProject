import React from 'react'
import ReactDOM from 'react-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './store/reducers/rootReducer'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
