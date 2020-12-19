import React from 'react';
import './InputField.css';

const InputField = ({
	fieldTitle="Title",
	placeholder="placeholder",
	type="text",
	value,
	onChangeValue,
	autoFocus=false,
	required=false,
}) => {

	return (
		<div className='input-field-container'>
			<h5 className='field-title'>{fieldTitle}</h5>
			<input
				className='input-field'
				type={type}
				placeholder={placeholder}
				autoFocus={autoFocus}
				value={value}
				onChange={onChangeValue}
				required={required}
			/>
		</div>
	);
}

export default InputField;