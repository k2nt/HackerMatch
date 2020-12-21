import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--secondary', 'btn--transparent'];

const SIZES = ['btn--medium', 'btn--large', 'btn--wrap'];

const Button = ({
	type,
	btnStyle,
	btnSize,
	children,
	onClick,
}) => {

	btnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
	btnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

	return (
		<button
			className={`btn ${btnStyle} ${btnSize}`}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
}

export default Button;