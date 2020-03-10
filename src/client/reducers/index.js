import { combineReducers } from 'redux';
import workOrderReducer from './work-order.reducer';

const allReducers = combineReducers({
    workOrder : workOrderReducer
});

export default allReducers;