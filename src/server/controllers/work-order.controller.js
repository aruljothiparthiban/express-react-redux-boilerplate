class WorkOrderController {

    constructor(options){
        this.workOrderService = options.workOrderService;
    }

    async getWorkOrders(req, res){
        let { query } = req;
        try{
            let result = await this.workOrderService.getWorkOrders(query);
            res.success(result);
        }
        catch(err){
            res.error(err);
        }
    }

    async getOverdueCount(req, res){
        try{
            let result = await this.workOrderService.getOverdueCount();
            res.success(result);
        }
        catch(err){
            res.error(err);
        }
    }
}

export default WorkOrderController;