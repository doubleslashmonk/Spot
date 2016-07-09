/*
 * The Searchbar component. Dispatches SEARCH action.
 */

import React from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import Actions from '../actions/actions';


const
    ENTER_KEYCODE = 13,
    {searchInput} = Actions,

/*
 * Maps dispatch to props based on older props. The onClick onKeyPress is sent as a prop to the SearchBar which
 * simply dispatches an action.
 */
    mapDispatchToProps = (dispatch) => {
        return {
            onKeyPress: ({target, nativeEvent}) => {
                if (nativeEvent.keyCode === ENTER_KEYCODE) {
                    dispatch(searchInput(target.value));
                }
            }
        }
    },

/*
 * Presentational, stateless component SearchBar. Calls onKeyPress function on key press.
 */

    SearchBar = ({className = '', onKeyPress}) => {
        return (
            <div className={`${className} search`}>
                <input
                    className="search--input"
                    placeholder="Search"
                    type="text"
                    onKeyPress={onKeyPress}
                />
                <FontAwesome name="search" className="search--icon"/>
            </div>
        );
    },

/*
 * Container Component: Gets the Container Component by applying dispatch->props map to the Presentational Component (SearchBar)
 * An alternative is to use 'dispatch' function passed as props. But it is better to keep action/state (logic) and presentation separate
 */
    SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBarContainer