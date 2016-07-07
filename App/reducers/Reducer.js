import TABLE_LIST from '../data/TABLE_LIST';
import {combineReducers} from 'redux';
import ActionTypes from '../actions/actionTypes';

const 
	Search = (state = {}, action) => {
		switch(action.type) {
			case ActionTypes.SEARCH: 
				const {input} = action,
					membersList = TABLE_LIST.reduce( 
						(allMembers,{members}) => {
							return [
								...allMembers,
								...members
							];
						}, []);
				return {
					results: membersList.filter( 
						({name}) => 
						name.split(' ')
						.map((part) => part.toLowerCase())
						.indexOf(input.toLowerCase()) > -1 ||
						name.toLowerCase() === input.toLowerCase()
					)
				}
				break;
			default: {
				return {
        			
      			}
			}
		}
	}

export default Search