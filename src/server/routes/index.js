import workOrderRoute from './work-order.route';

const initializeRoutes = (app) =>{
    app.use('/api/work-orders', workOrderRoute);
};

export default {
    initializeRoutes
};