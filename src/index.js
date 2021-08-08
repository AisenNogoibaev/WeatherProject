import React from 'react'
import ReactDOM from 'react-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
)

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)
