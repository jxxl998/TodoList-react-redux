import { FilterTypes } from '../constants';
import { SET_FILTER } from './actionTypes';
export default (state = FilterTypes.ALL, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.filter
        }
        default:
            return state;
    }
}