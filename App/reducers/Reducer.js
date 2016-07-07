import {combineReducers} from 'redux';
import ActionTypes from '../actions/actionTypes';

const 
	MemberReducer = (state = {}, action) => {
		console.log('action received', action.type);
		switch(action.type) {
			case ActionTypes.SHOW_MEMBER_INFO: 
				const {props} = action;
				return Object.assign( 
					{},
					props,
					{
        				showDialog: true
      				});
				break;
			case ActionTypes.HIDE_MEMBER_INFO: 
				return {
        			showDialog: false
      			}
				break;
			default: {
				return {
        			showDialog: false
      			}
			}
		}
	}

export default MemberReducer