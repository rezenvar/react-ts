

import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route, Link } from 'react-router-dom';

export interface IRootProps {
	/**
	 * Объект истории для роутера
	 * @type {*}
	 * @memberof IRootProps
	 */
	history: any;
}


export class Root extends React.Component<IRootProps, any> {


	render() {
		const { history } = this.props;

		return (
			<div>
				<ConnectedRouter history={history} >
					<div>
					</div>
				</ConnectedRouter>
			</div>
		)
	}
}




