/*
 * Filter Item - Wrapper over keys.
 */

import FilterItem from './FilterItem';
import {connect} from 'react-redux';
import {filterMembers} from '../actions/actions';
import Actions from '../actions/actions';

const
    {addFilter, removeFilter} = Actions,
    mapDispatchToProps = (dispatch, {label}) => {
        return {
            onChange: ({target}) => {
                dispatch(target.checked ? addFilter(label) : removeFilter(label))
            }
        };
    },
    FilterItemContainer = connect(null, mapDispatchToProps)(FilterItem);

export default FilterItemContainer
