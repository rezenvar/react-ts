import 'babel-polyfill';
import './../styles/main.scss';
import { render } from 'react-dom';
import * as React from 'react';



import * as reduceReducers from 'reduce-reducers';
import { configureStore } from './store/store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory, createHashHistory } from 'history';
import { Root } from './containers/Root';



const createHistory = () => __DEV__ ? createHashHistory() : createBrowserHistory();
const history = createHistory();
const store = configureStore(history);

const renderApp = (RootComponent) => {
	render(
		<Provider store={store}  >
			<RootComponent history={history} />
		</ Provider>,
		document.getElementById('root')
	)
};

renderApp(Root);


if (module.hot) {
	module.hot.accept('./containers/Root.tsx', () => {
		renderApp(require('./containers/Root').Root);
	});
}






