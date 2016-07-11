/*
 * This is the Seat Component. This renders each member sitting on the table or a vacant seat if none present.
 * This listens to the 'results' state change and re-renders itself based on whether it is occurring in the 'results' or not.
 * 'results' state changes when search/filter is executed.
 */

import React from 'react';
import {connect} from 'react-redux';
import ActionTypes from '../actions/actionTypes';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import MemberDialog from './MemberDialog';

const
/*
 * Maps state change in 'results' to the prop 'highlighted'. Hence Member gets the 'results' state change as a prop 'highlighted'.
 */
    mapStateToProps = (state = {}, member) => {
        if (member.vacant) {
            return {
                highlighted: false
            }
        }

        const {searchInput, filterValues, filterKey} = state,
            isSearchDone = !!searchInput,
            isFilteringDone = filterKey && filterValues.length > 0,
            matchesSearchCriteria = member.name.toLowerCase() === searchInput.toLowerCase() ||
                member.name.split(' ')
                    .map(name=> name.toLowerCase()).indexOf(searchInput.toLowerCase()) > -1,
            matchesFilterCriteria = filterValues.find((value)=>member[filterKey] === value);

        let highlighted = false;

        if (isSearchDone && isFilteringDone) {
            highlighted = matchesSearchCriteria && matchesFilterCriteria;
        }
        else if (isSearchDone) {
            highlighted = matchesSearchCriteria;
        }
        else if (isFilteringDone) {
            highlighted = matchesFilterCriteria;
        }

        return {
            highlighted
        }
    },

/*
 * A list of 'style' attributes for each member based on its seat position.
 * The mapping of seat number is done according to the index in array.
 */
    POSITION_LIST = [
        {
            top: "-25px",
            left: "50px"
        },
        {
            top: "-25px",
            right: "50px"
        },
        {
            bottom: "-25px",
            right: "50px"
        },
        {
            bottom: "-25px",
            left: "50px"
        }
    ],

/*
 * Presentational, stateless component Member. This also renders the Member Dialog on hovering.
 * Bootstrap OverlayTrigger has been used as a container for hovering and the MemberDialog component simply renders
 * in it.
 */
    Member = (props) => {
        const
            {seat, highlighted, vacant} = props,
            className = `member ${vacant ? 'vacant' : ''} ${highlighted ? 'highlighted' : ''}`,
            dialogContent = vacant ?
                <div className="dialog-vacant">This seat is vacant</div> :
                <MemberDialog {...props} />;
        return (
            <OverlayTrigger
                placement='right'
                overlay={<Popover>{dialogContent}</Popover>}
                delayShow={100}
                delayHide={50}
                container={this}
                show={highlighted}
            >
                <div className={className} style={POSITION_LIST[seat-1]}/>
            </OverlayTrigger>
        );
    },

/*
 * Container Component: Get the Container Component by applying state to Presentational Component (Filter)
 */
    MemberContainer = connect(mapStateToProps, null)(Member);

export default MemberContainer;