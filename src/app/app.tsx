

import './../styles/main.scss';


import * as reduceReducers from 'reduce-reducers';
import { configureStore } from './store/store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory, createHashHistory } from 'history';
import { Root } from './routes/Root';


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

renderApp(Root);


if (module.hot) {
	module.hot.accept('./routes/Root.tsx', () => {
		renderApp(require('./routes/Root').Root);
	});
}






