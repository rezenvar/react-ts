import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';



const doStaff = $action => $action.ofType('APP_ACTION')
	.mapTo({ type: 'APP_ACTION_AFTER_EPIC' });




export const appEpic = combineEpics(
	doStaff
);