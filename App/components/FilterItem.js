/*
 * Filter Item - Renders a checkbox and label.
 */

import React from 'react';

const FilterItem = ({label, checked, onChange}) => {
    return (
        <div className="filter-item">
            <input className="filter-item--checkbox" type="checkbox" checked={checked} onChange={onChange}/>
            <div className="filter-item--label">
                {label}
            </div>
        </div>
    )
};

export default FilterItem