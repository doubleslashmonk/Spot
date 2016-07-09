import ActionTypes from './actionTypes';

export default {
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
    }
}