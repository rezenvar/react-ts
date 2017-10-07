import { Field } from '../components/field/Field';
import * as React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';


export interface IRootProps {
	/**
	 * Объект истории для роутера
	 * @type {*}
	 * @memberof IRootProps
	 */
	history : any;
}




export class Root extends React.Component<IRootProps, any> {



	componentDidMount() {
		
	}
	
	render() {

		const { history } = this.props;

		return (
			<div>
				<ConnectedRouter history={history} >
					<div>
						<Field />
					</div>
				</ConnectedRouter>
			</div>
		)
	}
}




