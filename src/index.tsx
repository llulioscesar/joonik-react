import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import store from './redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './comun/css/index.css';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
