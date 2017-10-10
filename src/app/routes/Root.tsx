import { Component } from '../lib/react-bem-component';


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



class Test extends Component {

	static defaultProps = {
		namespace: 'namespace'
	}

	render() {
		return (
			<div className={[this.block(), this.modifier('mod')].join(' ')} >
				<div className={[this.element('element'), this.elementModifier('element', 'mod') ].join(' ')} ></div>
				<div className={this.element('element2')} ></div>
			</div>
		)
	}
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




