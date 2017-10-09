import thunk from 'redux-thunk';
import { rootEpic } from './epics';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { rootReducer } from './reducers';
import { createEpicMiddleware } from 'redux-observable';

export const configureStore = (history) => {
	const store = createStore(rootReducer, composeWithDevTools(
		applyMiddleware(
			thunk, 
			createEpicMiddleware(rootEpic),
			routerMiddleware(history),
		)
	));
	return store;
}


