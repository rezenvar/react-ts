import { appEpic } from './app.epic';
import { combineEpics } from "redux-observable";


export const rootEpic = combineEpics(
	appEpic
);