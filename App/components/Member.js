import React from 'react';
import {connect} from 'react-redux';
import ActionTypes from '../actions/actionTypes';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import MemberDialog from './MemberDialog';

const 

mapStateToProps = (state = {}, {id}) => {
	const {results = []} = state;
	return {
		highlighted: results.find( 
			(member) => member.id === id
		)
	}
},

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
		{name, id, seat, highlighted, vacant, dispatch} = props,
		className = `member ${vacant? 'vacant': ''} ${highlighted? 'highlighted': ''}`;
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
},

MemberContainer = connect(mapStateToProps,null)(Member);

export default MemberContainer;