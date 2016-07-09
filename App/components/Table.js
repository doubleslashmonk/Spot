/*
 * The Table component renders a table. It uses the 'name' and the 'members' passed to it. It also renders each Member
 * on the table.
 */

import React from 'react';
import Member from './Member';

const 
	NUM_SEATS = 4,

/*
 * Converts an array of 0/1/2/3/4 elements to an array of 4 elements.
 * It introduces vacant seat wherever a member is not present.
 */
	getMembersList = (oldMembersList = []) => {
		let 
			occupiedSeats = oldMembersList.map( ({seat}) => seat),
			newMembersList = [...oldMembersList];

		for(let i=1; i<=4; i++) {
			if(occupiedSeats.indexOf(i) < 0) {
				newMembersList.push( {
					seat: i,
					vacant: true,
					key: i+100
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
			<div className = "oTable">
				{getMembersList(members).map((member) => <Member key={member.id} {...member}/>)}
				<div className = "oTable--inner">
					{name}
				</div>			
			</div>
		);
	};

export default Table