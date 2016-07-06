import React from 'react';
import Member from './Member';

const 
	NUM_SEATS = 4,
	getMembersList = (oldMembersList = []) => {
		let 
			occupiedSeats = oldMembersList.map( ({seat}) => seat),
			newMembersList = [...oldMembersList];

		for(let i=1; i<=4; i++) {
			if(occupiedSeats.indexOf(i) < 0) {
				newMembersList.push( {
					seat: i,
					vacant: true
				} );
			}
		}

		return newMembersList;
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