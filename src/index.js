import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import App from './App'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './store/reducers/rootReducer'
import { Provider } from 'react-redux'

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
