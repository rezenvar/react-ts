import * as classNames from 'classnames';


export interface IBemComponentProps {
	namespace?: string;
	namespaces?: string | string[];
}



export class Component<P = any, S = any> extends React.Component<P & IBemComponentProps, S> {
	/**
	 * Default props to prevent error throw if no props passed
	 * @static
	 * @type {IBemComponentProps}
	 * @memberof Component
	 */
	static defaultProps: IBemComponentProps = {
		namespace: '',
		namespaces: []
	}

	/**
	 * Get all namespaces from props 
	 * @readonly
	 * @protected
	 * @memberof Component
	 */
	protected get namespaces() {
		const { namespaces, namespace } = this.props;
		const _namespaces = [namespace];
		if (Array.isArray(namespaces)) {
			_namespaces.push(...namespaces);
		} else if (namespaces) {
			_namespaces.push(namespaces as string);
		}
		return _namespaces;
	}
	/**
	 * Get block classNames
	 * @memberof Component
	 */
	public block = () => this.namespaces.join(' ');
	/**
	 * Get block-modifier classNames
	 * @memberof Component
	 */
	public modifier = (modifier) => this.namespaces
		.map(namespace => `${namespace}--${modifier}`)
		.join(' ');
	/**
	 * Get elementModifier classnames
	 * @memberof Component
	 */
	public elementModifier = (element, modifier) => this.namespaces
		.map(namespace => `${namespace}__${element}--${modifier}`)
		.join(' ')
	/**
	 * Get element classNames
	 * @memberof Component
	 */
	public element = (element) => this.namespaces
		.map(namespace => `${namespace}__${element}`)
		.join(' ');


}
