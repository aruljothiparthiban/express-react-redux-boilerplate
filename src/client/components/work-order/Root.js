import React, { Component } from "react";
import WorkOrderTable from '../work-order/Table';

export default class Root extends Component {

    render() {
        return (
            <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">WORK ORDERS</li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Work Orders</h4>
                    </div>
                    <div className="d-none d-md-block">
                        <a href="http://localhost:3000/api/work-orders/export" className="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-upload wd-10 mg-r-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                            Export
                        </a>
                    </div>
                </div>
                <div className="row row-xs">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card card-body">
                            <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">
                                OVERDUE WORK ORDERS
                            </h6>
                            <div className="d-flex d-lg-block d-xl-flex align-items-end">
                                <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">{this.props.workOrder.overdueCount}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-xs">
                    <div className="col-lg-12 mg-t-10">
                        <WorkOrderTable {...this.props} />
                    </div>
                </div>
            </div>
        );
    }
}
