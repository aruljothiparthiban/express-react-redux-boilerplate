import React, { Component } from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import WorkOrder from '../work-order/Root';
import WorkOrderDetail from '../work-order-detail/Table';

export default class ContentBody extends Component {

    render() {
        return (
            <div className="content content-fixed">
                {/* <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/detail">detail</Link>
                        </li>
                    </ul> */}
                <Switch>
                    <Route exact path="/">
                        <WorkOrder />
                    </Route>
                    <Route exact path="/detail">
                        <WorkOrderDetail />
                    </Route>
                </Switch>
            </div>
        );
    }
}
