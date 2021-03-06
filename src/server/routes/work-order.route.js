import express from 'express';
import { makeInvoker } from 'awilix-express';

import Controller from '../controllers/work-order.controller';
import validator from '../validation/validator';
import { getWorkOrdersSchema } from '../validation/work-order.validation';

const router = express.Router();
let controller = makeInvoker(Controller);

router.get('', validator.query(getWorkOrdersSchema), controller('getWorkOrders'));
router.get('/export', controller('export'));
router.get('/over-due-count', controller('getOverdueCount'));

export default router;