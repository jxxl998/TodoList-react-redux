import reducer from './Reducer';
import { createStore } from 'redux';

const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
};

const store = createStore(reducer, initValues);

export default store;

