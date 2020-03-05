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
                                <li className="breadcrumb-item active" aria-current="page">Website Analytics</li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Welcome to Dashboard</h4>
                    </div>
                    <div className="d-none d-md-block">
                        <button className="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-upload wd-10 mg-r-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Export</button>
                    </div>
                </div>
                <div className="row row-xs">
                    <div className="col-lg-12 mg-t-10">
                        <WorkOrderTable />
                    </div>
                </div>
            </div>
        );
    }
}
