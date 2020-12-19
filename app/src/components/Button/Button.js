import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--secondary'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
	type,
	btnStyle,
	btnSize,
	children,
	onClick,
	link,
}) => {

	btnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
	btnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

	return (
		<Link to={link} >
			<button
				className={`btn ${btnStyle} ${btnSize}`}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		</Link>
	);
}

export default Button;