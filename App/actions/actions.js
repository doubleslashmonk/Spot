import ActionTypes from './actionTypes';

export default {
	searchInput: (input) => {
		return {
			type: ActionTypes.SEARCH,
			input
		}
	}
}