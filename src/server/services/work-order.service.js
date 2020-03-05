import workOrders from '../data/work-orders';

class WorkOrderService {

    getWorkOrders(params) {
        let { pageIndex, pageSize, filter } = params;
        let items = workOrders;
        if (filter) {
            items = items.filter(p => {
                let startDate = moment(p.Start_date, 'YYYY-MM-DD').toDate();
                return startDate >= filter.startDate && startDate <= filter.endDate;
            });
        }

        let count = items.length;

        items = items.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
        return Promise.resolve({
            items,
            count
        });
    }

    getOverdueCount() {
        let items = workOrders.filter(p => {
            return moment(p.Start_date, 'YYYY-MM-DD').toDate() < new Date();
        }).map(p => {
            p.Start_date = moment(p.Start_date, 'YYYY-MM-DD').format('DD-MM-YYYY');
            return p;
        });

        return Promise.resolve(items.length);
    }
}

export default WorkOrderService;