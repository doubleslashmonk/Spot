import React from 'react';
import {connect} from 'react-redux';
import ActionTypes from '../actions/actionTypes';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import MemberDialog from './MemberDialog';

const 

POSITION_LIST = [
	{
		top: "-25px",
		left: "50px"
	},
	{
		top: "-25px",
		right: "50px"
	},
	{
		bottom: "-25px",
		right: "50px"
	},
	{
		bottom: "-25px",
		left: "50px"
	}
],

Member = (props) => {
	const 
		{name, id, seat, vacant, dispatch} = props,
		className = `member ${vacant?'vacant':''}`;
	return (
		<OverlayTrigger 
				trigger='click'
				placement='right'
				overlay={<Popover><MemberDialog {...props} /></Popover>}
				delayShow={100}
				delayHide={50}
				container = {this}>
					<div className = {className} style = {POSITION_LIST[seat-1]}  />
        </OverlayTrigger>
	);
};


export default Member;