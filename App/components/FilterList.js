import React from 'react';
import FilterItem from './FilterItem';
import FILTER_LIST from '../data/FILTER_LIST';

const FilterList = () => {
    return (
        <div className="filter-list">
            <div className="filter-list--keys">
                {
                    FILTER_LIST.map(({key}) => {
                        return (
                            <FilterItem label={key}/>
                        )
                    })
                }
            </div>
            <div className="filter-list--values">
                {
                    FILTER_LIST.map(({values}) => {
                        const valueComponents = values.map((value)=> {
                            return (
                                <FilterItem label={value}/>
                            )
                        });

                        return [
                            ...valueComponents
                        ];
                    })
                }
            </div>
        </div>
    )
};

export default FilterList