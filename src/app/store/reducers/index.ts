import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as reduceReducers from 'reduce-reducers';



export const rootReducer = combineReducers({
	routing: routerReducer
});



