/*
 * Returns Action Objects for each actionType.
 */

import ActionTypes from './actionTypes';

export default {
    addFilter: (value, filterKey) => {
        return {
            type: ActionTypes.ADD_FILTER,
            value,
            filterKey
        }
    },
    removeFilter: (value, filterKey) => {
        return {
            type: ActionTypes.REMOVE_FILTER,
            value,
            filterKey
        }
    },
    searchInput: (input) => {
        return {
            type: ActionTypes.SEARCH,
            input
        }
    },
    toggleFilter: (showFilter) => {
        return {
            type: ActionTypes.TOGGLE_FILTER,
            showFilter
        }
    },
    toggleFilterValues: (filterKey) => {
        return {
            type: ActionTypes.TOGGLE_FILTER_VALUES,
            filterKey
        }
    }
}