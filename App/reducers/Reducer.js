/*
 * This is the entire reducer for the app. Reducers are functions which convert older state to newer state based on actions.
 * This uses combineReducers from redux plugin to convert a list of functions to a single reducer using a map between
 * each state and corresponding reducer.
 */

import TABLE_LIST from '../data/TABLE_LIST';
import {combineReducers} from 'redux';
import ActionTypes from '../actions/actionTypes';

const
    FilterValues = (state = [], action) => {
        const {value} = action;
        switch (action.type) {
            case ActionTypes.ADD_FILTER:
                return [
                    ...state,
                    value
                ];
            case ActionTypes.REMOVE_FILTER:
                state.splice(state.indexOf(value), 1);
                return [
                    ...state
                ]
            default:
                return state;
        }

    },
/*
 * Reducer for 'results' state. It finds all the members from the TABLE_LIST that match with the givern input from
 * search.
 */
    Search = (state = '', action) => {
        switch (action.type) {
            case ActionTypes.SEARCH:
                return action.input;
            default:
                return state;
        }

    },
/*
 * Reducer for 'showFilter' state. computes 'showFilter' state based on action.
 */
    ToggleFilter = (state = false, action) => {
        switch (action.type) {
            case ActionTypes.TOGGLE_FILTER:
                const {showFilter} = action;
                return showFilter;
            default:
                return state;
        }
    },

    ToggleFilterValues = (state = 'designation', action) => {
        switch (action.type) {
            case ActionTypes.TOGGLE_FILTER_VALUES:
                const {filterKey} = action;
                return filterKey;
            default:
                return state;
        }
    };

export default combineReducers({
    filterKey: ToggleFilterValues,
    filterValues: FilterValues,
    searchInput: Search,
    showFilter: ToggleFilter
})