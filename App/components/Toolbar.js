/*
 * The Filter Component renders the Filter and SearchBar.
 */


import React from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';

class Toolbar extends React.Component {
	render() {
        return (
        	<div className = "clearfix toolbar">
        		<div className = "toolbar--name">
        			Sprinklr office
        		</div>
        		<Filter className = "filterContainer" />
        		<SearchBar className = "searchContainer"/>
        	</div>
        );
	}
}

export default Toolbar;