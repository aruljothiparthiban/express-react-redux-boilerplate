import Excel from 'exceljs';
import tempfile from 'tempfile';

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
            console.log('err', err);
            res.error(err);
        }
    }

    async export(req, res){
        try{
            let items = await this.workOrderService.getAllWorkOrders();            
            let workbook = new Excel.Workbook();
            let worksheet = workbook.addWorksheet('Work Orders');

            worksheet.columns = [
                { header: 'Wo No', key: 'WO_key', width: 15 },
                { header: 'WO Name', key: 'WO_name', width: 35 },
                { header: 'Position Key', key: 'Pos_key', width: 18 },
                { header: 'MO Key', key: 'MO_key', width: 20 },
                { header: 'MO Name', key: 'MO_name', width: 30 },
                { header: 'Start Date', key: 'Start_date', width: 13 }
            ];

            items.forEach(p=>{
                worksheet.addRow(p);
            })

            let tempFilePath = tempfile('.xlsx');
            workbook.xlsx.writeFile(tempFilePath).then(function() {
                res.sendFile(tempFilePath, function(err){
                    console.log('---------- error downloading file: ' + err);
                });
            });
        }
        catch(err){
            console.log('err', err);
            res.error(err);
        }
    }
}

export default WorkOrderController;