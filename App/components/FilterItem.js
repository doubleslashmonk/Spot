/*
 * Filter Item - Renders a checkbox and label.
 */

import React from 'react';

const FilterItem = ({label}) => {
    return (
        <div className="filter-item">
            <input className="filter-item--checkbox" type="checkbox"/>
			<div className="filter-item--label">
				{label}
			</div>
        </div>
    )
};

export default FilterItem