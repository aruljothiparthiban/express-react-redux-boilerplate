import React, { Component } from "react";
import Pagination from '../shared/Pagination';

export default class Header extends Component {

    getStartIndex() {
        let { workOrder } = this.props;
        let { pageIndex, pageSize } = workOrder;
        return ((pageIndex - 1) * pageSize) + 1;
    }

    getEndIndex(){
        let { workOrder } = this.props;
        let { pageIndex, pageSize, count } = workOrder;
        let index = (pageIndex * pageSize);
        if (index < count) {
            return index;
        }
        return count;
    }

    renderPageSummary() {
        let { workOrder } = this.props;
        let { count } = workOrder;
        if(count>0) {
            return (
                <span>
                Showing {this.getStartIndex()} - {this.getEndIndex()} of {count} items
            </span>
            );
        }
        return null;
    }
    
    render() {
        let { workOrder } = this.props;
        return (
            <div className="card">
                <div className="card-header d-sm-flex align-items-start justify-content-between">
                    <h6 className="lh-5 mg-b-0">Browser Used By Users</h6>
                    <a href="" className="tx-13 link-03">Mar 01 - Mar 20, 2019 <i className="icon ion-ios-arrow-down"></i></a>
                </div>
                <div className="card-body pd-y-0 pd-x-0">

                    <div className="table-responsive">
                        <table className="table table-dashboard mg-b-0">
                            <thead>
                                <tr>
                                    <th>Wo No</th>
                                    <th>WO Name</th>
                                    <th>Position Key</th>
                                    <th>MO Key</th>
                                    <th>MO Name</th>
                                    <th>Start Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {workOrder.items.map(p => {
                                    return (
                                        <tr key={p._id}>
                                            <td>{p.WO_key}</td>
                                            <td>{p.WO_name}</td>
                                            <td>{p.Pos_key}</td>
                                            <td>{p.MO_key}</td>
                                            <td>{p.MO_name}</td>
                                            <td className="tx-color-03 tx-normal">{p.Start_date}</td>
                                        </tr>
                                    );
                                })}

                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="3">
                                        <p className=" mg-b-10 mg-t-10">
                                            {this.renderPageSummary()}
                                        </p>
                                    </td>
                                    <td colSpan="3">
                                        <Pagination 
                                            count={workOrder.count}
                                            pageSize={workOrder.pageSize}
                                            onPageChange={this.props.onPageChange}
                                        />
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}
