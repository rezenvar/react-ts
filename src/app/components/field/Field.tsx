import * as React from 'react';
import * as CSS from 'react-css-modules';
import './Field.module.scss';

export interface IFieldProps {
	label ?: string | JSX.Element;
	value ?: any;
	type ?: string;
	className ?: string;
}

export interface IFieldState {
	isFocused : boolean;
}

export class Field extends React.Component<IFieldProps, IFieldState> {

	static defaultProps : IFieldProps = {
		type: 'text',
		className: ''
	}

	render() {
		const { label, value, type, className } = this.props;

		return (
			<div styleName={`field ${className}`} className={className} >
				{label && <label styleName='field__label' >{label}</label>}
				<input styleName='field__input' type={type} value={value}  />
			</div>
		)
	}
}