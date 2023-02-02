import { createStore,combineReducers } from 'redux';
import updateStatus from '../reducer/reducer';

const combineReducer = combineReducers(
    {
        reducerUpdatestatus: updateStatus
    }
)

let store = createStore(combineReducer)
export default store;