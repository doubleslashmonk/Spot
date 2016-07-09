/*
 * Filter Item Keys - Wrapper over Filter Item for Keys.
 */

import FilterItem from './FilterItem';
import {connect} from 'react-redux';
import Actions from '../actions/actions';

const
    {toggleFilterValues} = Actions,
    mapDispatchToProps = (dispatch, {label}) => {
        return {
            onChange: () => {
                dispatch(toggleFilterValues(label));
            }
        };
    },
    FilterItemContainer = connect(null, mapDispatchToProps)(FilterItem);

export default FilterItemContainer