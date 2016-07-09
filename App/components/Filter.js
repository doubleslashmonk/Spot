/*
 * This is the whole Filter component. It renders the Filter Trigger and Filter List.
 * Also, listens to 'showFilter' state change triggered by Filter Trigger and accordingly renders/un-renders Filter List.
 */


import React from 'react';
import {connect} from 'react-redux';
import FilterTrigger from './FilterTrigger';
import FilterList from './FilterList';

const
/*
 * Maps state change in 'showFilter' to the prop 'showFilter'. Hence Filter gets the showFilter state change as a prop.
 */
    mapStateToProps = ({showFilter}={}) => {
        return {
            showFilter
        };
    },
/*
 * Presentational, stateless component Filter.
 */
    Filter = ({className, showFilter}) => {
        return (
            <div className={className}>
                <FilterTrigger showFilter={showFilter}/>
                {
                    showFilter ? <FilterList /> : ''
                }
            </div>
        )
    },
/*
 * Container Component: Get the Container Component by applying state to Presentational Component (Filter)
 */
    FilterContainer = connect(mapStateToProps, null)(Filter);

export default FilterContainer;