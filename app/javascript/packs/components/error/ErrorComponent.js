import React from 'react';
// import { error } from './errorcomponent.css';

const ErrorComponent = (props) => {
	const { errorMessage } = props;
	return (
		<div>
			<h2>{errorMessage}</h2>
		</div>
	)
}

export default ErrorComponent;