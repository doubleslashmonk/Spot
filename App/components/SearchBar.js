import React from 'react';
import FontAwesome from 'react-fontawesome';

const SearchBar = ({className = ''}) => {
	return (
		<div className = {`${className} search`}>
			<input className = "search--input" type = "text" placeholder = "Search"/>
			<FontAwesome name="search" className = "search--icon"/>
		</div>
	);
}

export default SearchBar