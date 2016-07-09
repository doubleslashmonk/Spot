import React from 'react';
import FilterTrigger from './FilterTrigger';
import FilterList from './FilterList';
import {connect} from 'react-redux';


const
    mapStateToProps = ({showFilter}={}) => {
        return {
            showFilter
        };
    },
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
    FilterContainer = connect(mapStateToProps, null)(Filter);

export default FilterContainer;
