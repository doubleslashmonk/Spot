import React from 'react';
import FontAwesome from 'react-fontawesome';

const Filter = ({className = ''}) => {
	return (
		<div className = {`${className} filter`}>
			<FontAwesome name="filter" className = "filter--icon"/>
		</div>
	)
}

export default Filter;