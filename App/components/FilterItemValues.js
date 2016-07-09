/*
 * Filter Item - Wrapper over keys.
 */

import FilterItem from './FilterItem';
import {connect} from 'react-redux';
import {filterMembers} from '../actions/actions';

const
    mapDispatchToProps = (dispatch, {key}) => {
        return {
            onClick: () => {

            }
        };
    },
    FilterItemContainer = connect(null, mapDispatchToProps)(FilterItem);

export default FilterItemContainer