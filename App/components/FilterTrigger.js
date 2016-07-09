import React from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import Actions from '../actions/actions';

const
    mapDispatchToProps = (dispatch, {showFilter}) => {
        return {
            onClick: ({target, nativeEvent}) => dispatch(Actions.toggleFilter(!showFilter))
        }
    },
    FilterTrigger = ({showFilter = false, onClick}) => {
        const className = `${showFilter ? 'showFilter' : ''} filter-trigger`;
        return (
            <div className={className} onClick={onClick}>
                <FontAwesome name="filter" className="filter-trigger--icon"/>
            </div>
        )
    },
    FilterTriggerContainer = connect(null, mapDispatchToProps)(FilterTrigger);

export default FilterTriggerContainer;