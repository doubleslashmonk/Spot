import React from 'react';
import TABLE_LIST from '../data/TABLE_LIST';
import Table from './Table';

const Office = () => {
		return (
			<div className = "office">
				{
					TABLE_LIST.map((table) => <Table {...table}/> )
				}
			</div>
		)
	}

export default Office;