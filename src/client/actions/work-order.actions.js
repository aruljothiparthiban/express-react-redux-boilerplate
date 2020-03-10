import request from '../helpers/request.helper';
import { WORK_ORDER } from '../constants/action-types';

export const getWorkOrders = (pageIndex) => dispatch => {
    return new Promise((resolve, reject)=>{
        request({
            method : 'get',
            url : '/work-orders',
            params : {
                pageIndex
            }
        }).then(result => {
            let { data, success } = result.data;
            if(success){
                dispatch({
                    type : WORK_ORDER.GET_WORK_ORDER_SUCCESS,
                    data
                });
            }else{
                dispatch({
                    type : WORK_ORDER.GET_WORK_ORDER_FAILURE
                });
            }
        })
    });
};

export const getOverdueCount = (pageIndex) => dispatch => {
    return new Promise((resolve, reject)=>{
        request({
            method : 'get',
            url : '/work-orders/over-due-count',
            params : {
                pageIndex
            }
        }).then(result => {
            let { data, success } = result.data;
            if(success){
                dispatch({
                    type : WORK_ORDER.GET_WORK_ORDER_OVERDUE_COUNT_SUCCESS,
                    data
                });
            }else{
                dispatch({
                    type : WORK_ORDER.GET_WORK_ORDER_OVERDUE_COUNT_SUCCESS
                });
            }
        })
    });
};