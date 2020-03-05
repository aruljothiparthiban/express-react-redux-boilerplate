import React, { Component } from "react";

export default class Header extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header d-sm-flex align-items-start justify-content-between">
                    <h6 className="lh-5 mg-b-0">Browser Used By Users</h6>
                    <a href="" className="tx-13 link-03">Mar 01 - Mar 20, 2019 <i className="icon ion-ios-arrow-down"></i></a>
                </div>
                <div className="card-body pd-y-15 pd-x-10">
                    <div className="table-responsive">
                        <table className="table table-borderless table-sm tx-13 tx-nowrap mg-b-0">
                            <thead>
                                <tr className="tx-10 tx-spacing-1 tx-color-03 tx-uppercase">
                                    <th className="wd-5p">&nbsp;</th>
                                    <th>Browser</th>
                                    <th className="text-right">Sessions</th>
                                    <th className="text-right">Bounce Rate</th>
                                    <th className="text-right">Conversion Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i className="fab fa-chrome tx-primary op-6"></i></td>
                                    <td className="tx-medium">Google Chrome</td>
                                    <td className="text-right">13,410</td>
                                    <td className="text-right">40.95%</td>
                                    <td className="text-right">19.45%</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-firefox tx-orange"></i></td>
                                    <td className="tx-medium">Mozilla Firefox</td>
                                    <td className="text-right">1,710</td>
                                    <td className="text-right">47.58%</td>
                                    <td className="text-right">19.99%</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-safari tx-primary"></i></td>
                                    <td className="tx-medium">Apple Safari</td>
                                    <td className="text-right">1,340</td>
                                    <td className="text-right">56.50%</td>
                                    <td className="text-right">11.00%</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-edge tx-primary"></i></td>
                                    <td className="tx-medium">Microsoft Edge</td>
                                    <td className="text-right">713</td>
                                    <td className="text-right">59.62%</td>
                                    <td className="text-right">4.69%</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-opera tx-danger"></i></td>
                                    <td className="tx-medium">Opera</td>
                                    <td className="text-right">380</td>
                                    <td className="text-right">52.50%</td>
                                    <td className="text-right">8.75%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
