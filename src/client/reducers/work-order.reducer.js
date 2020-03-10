import produce from 'immer';
import { WORK_ORDER } from '../constants/action-types';

const initialState = {
    items : [],
    count : 0,
    pageIndex : 1,
    pageSize : 10,
    overdueCount : 0
};

export default (state = initialState, action) => {
    switch(action.type){
        case WORK_ORDER.GET_WORK_ORDER_SUCCESS:
            state = produce(state, draft => {
                draft.items = action.data.items;
                draft.count = action.data.count;
            });
            break;
        case WORK_ORDER.GET_WORK_ORDER_OVERDUE_COUNT_SUCCESS:
            state = produce(state, draft => {
                draft.overdueCount = action.data;
            });
            break;
    }
    return state;
};