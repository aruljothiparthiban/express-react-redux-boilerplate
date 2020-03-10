import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WorkOrder from '../../components/work-order/Root';
import { getWorkOrders, getOverdueCount } from '../../actions/work-order.actions';

class WorkOrderContainer extends Component {

    componentDidMount(){
        this.props.getWorkOrders(1);
        this.props.getOverdueCount();
    }

    onPageChange(event){
        this.props.getWorkOrders(event.selected + 1);
        this.props.getOverdueCount();
    }

    render() {
        return (
            <WorkOrder 
                onPageChange={this.onPageChange.bind(this)} 
                {...this.props} 
            />
        );
    }
}

const mapStateToProps = (state) => ({
    workOrder : state.workOrder
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getWorkOrders,
    getOverdueCount
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WorkOrderContainer);