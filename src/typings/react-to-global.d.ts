// global defenition for react wiil be here

import * as _React from 'react';
import * as _ReactDOM from 'react-dom';
declare global {
	const React  : typeof _React;
	const ReactDOM : typeof _ReactDOM;
}