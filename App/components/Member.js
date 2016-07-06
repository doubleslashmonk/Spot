import React from 'react';

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

Member = ({seat, vacant}) => {
	const className = `member ${vacant?'vacant':''}`;
	return (
		<div className = {className} style = {POSITION_LIST[seat-1]}/>
	);
};

export default Member;