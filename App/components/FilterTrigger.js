/*
 * This is the Filter Trigger. It toggles the Filter List component on click.
 * It dispatched 'toggleFilter' action on click.
 * It uses the 'filter' font from react-fontawesome plugin.
 */

import React from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import Actions from '../actions/actions';

const
/*
 * Maps dispatch to props based on older props. The onClick function is sent as a prop to the Filter Trigger which
 * simply dispatches an action.
 */
    mapDispatchToProps = (dispatch, {showFilter}) => {
        return {
            onClick: ({target, nativeEvent}) => dispatch(Actions.toggleFilter(!showFilter))
        }
    },
/*
 * Presentational, stateless component FilterTrigger.
 */
    FilterTrigger = ({showFilter = false, onClick}) => {
        const className = `${showFilter ? 'showFilter' : ''} filter-trigger`;
        return (
            <div className={className} onClick={onClick}>
                <FontAwesome name="filter" className="filter-trigger--icon"/>
            </div>
        )
    },
/*
 * Container Component: Get the Container Component by applying dispatch->props map to the Presentational Component (Filter)
 * An alternative is to use 'dispatch' function passed as props. But it is better to keep action/state (logic) and presentation separate
 */
    FilterTriggerContainer = connect(null, mapDispatchToProps)(FilterTrigger);

export default FilterTriggerContainer;