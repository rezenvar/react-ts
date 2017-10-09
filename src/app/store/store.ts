import thunk from 'redux-thunk';
import { rootEpic } from './epics';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { rootReducer } from './reducers';
import { createEpicMiddleware } from 'redux-observable';

export const configureStore = (history) => {
	const epicMiddleware =  createEpicMiddleware(rootEpic);
	const store = createStore(rootReducer, composeWithDevTools(
		applyMiddleware(
			thunk, 
			epicMiddleware,
			routerMiddleware(history),
		)
	));

	if (module.hot) {
		module.hot.accept('./reducers', () => {
			store.replaceReducer(require('./reducers').rootReducer);
		});
		module.hot.accept('./epics', () => {
			epicMiddleware.replaceEpic(require('./epics').rootEpic);
		});
	}

	return store;
}


