import { asClass, asValue, createContainer } from 'awilix';
import WorkOrderService from '../services/work-order.service';

const container = createContainer();

container.register({
    workOrderService : asClass(WorkOrderService).scoped()
});

export default container;