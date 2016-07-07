import React from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import Actions from '../actions/actions';

const 
ENTER_KEYCODE = 13,
{searchInput} = Actions,
mapDispatchToProps = (dispatch) => {
	return {
		onKeyPress: ({target, nativeEvent}) => {
			if(nativeEvent.keyCode === ENTER_KEYCODE) {
				dispatch(searchInput(target.value));
			}
		}
	}
},
SearchBar = ({className = '', onKeyPress}) => {
	return (
		<div className = {`${className} search`}>
			<input 
				className = "search--input"  
				placeholder = "Search" 
				type = "text"
				onKeyPress = {onKeyPress}
			/>
			<FontAwesome name="search" className = "search--icon"/>
		</div>
	);
},

SearchBarContainer =  connect(null, mapDispatchToProps)(SearchBar);

export default SearchBarContainer