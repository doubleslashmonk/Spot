import React from 'react';
import Member from './Member';

const 
		getMembersList = (members) => {
		return members;

	},
	
	Table = ({
		name = '', 
		members = []
		}) => {
		return (
			<div className = "table">
				{getMembersList(members).map((member, index) => <Member key={index} {...member}/>)}
				<div className = "table--inner">
					{name}
				</div>			
			</div>
		);
	}

export default Table