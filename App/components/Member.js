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
		className = `member ${vacant? 'vacant': ''} ${highlighted? 'highlighted': ''}`,
		dialogContent = vacant?
			<div className = "dialog-vacant">This seat is vacant</div>:
			<MemberDialog {...props} />;
	return (
		<OverlayTrigger 
				
				placement = 'right'
				overlay = {<Popover>{dialogContent}</Popover>}
				delayShow = {100}
				delayHide = {50}
				container = {this}
				show = {highlighted}
				>
					<div className = {className} style = {POSITION_LIST[seat-1]}  />
        </OverlayTrigger>
	);
},

MemberContainer = connect(mapStateToProps,null)(Member);

export default MemberContainer;