/*
 * Renders the filter list. This is shown/hidden by Filter based on 'showFilter' state.
 */

import React from 'react';
import {connect} from 'react-redux';
import FilterItemKeys from './FilterItemKeys';
import FilterItemValues from './FilterItemValues';
import FILTER_LIST from '../data/FILTER_LIST';

const
    mapStateToProps = (state = {}) => {
        const {filterKey = 'designation', filterValues = []} = state;
        return {
            filterKey,
            filterValues
        }
    },
    FilterList = ({filterKey = 'designation', filterValues= []}) => {
        const {values} = FILTER_LIST.find(({key, values})=>key === filterKey);
        return (
            <div className="filter-list">
                <div className="filter-list--keys">
                    {
                        FILTER_LIST.map(({key}) =><FilterItemKeys key={key} label={key} checked={filterKey === key}/>)
                    }
                </div>
                <div className="filter-list--values">
                    {
                        values.map((value)=> <FilterItemValues key={value} label={value}
                                                               checked={filterValues.find((fValue)=>fValue===value)}/>)
                    }
                </div>
            </div>
        )
    },
    FilterListContainer = connect(mapStateToProps, null)(FilterList);

export default FilterListContainer