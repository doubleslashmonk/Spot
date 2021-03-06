/*
 * Returns a store for the entire app.
 */
import {createStore} from 'redux';
import Reducer from '../reducers/Reducer';

export default (
	createStore( Reducer )
);