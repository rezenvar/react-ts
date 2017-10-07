
import 'babel-polyfill';
import 'reflect-metadata';
import 'rxjs';
import './../styles/main.scss';

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { configureStore } from './store/store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory, createHashHistory } from 'history';
import { Root } from './containers/Root';
import * as reduceReducers from 'reduce-reducers';

const createHistory = () => __DEV__ ? createHashHistory() : createBrowserHistory();
const history = createHistory();
const store = configureStore(history);

const renderApp = (RootComponent) => {
	ReactDOM.render(
		<Provider store={store}  >
			<RootComponent history={history} />
		</ Provider>,
		document.getElementById('root')
	)
};

// TODO: Прикрутить hot reload

renderApp(Root);



