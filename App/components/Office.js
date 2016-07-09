/*
 * This takes TABLE_LIST as data and renders each Table.
 */


import React from 'react';
import TABLE_LIST from '../data/TABLE_LIST';
import Table from './Table';

const Office = () => {
		return (
			<div className = "office">
				{
					TABLE_LIST.map((table, index) => <Table key={index} {...table}/> )
				}
			</div>
		)
	};



export default Office;