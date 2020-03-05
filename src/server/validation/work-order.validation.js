import Joi from 'joi';

export const getWorkOrdersSchema = Joi.object({
    pageIndex : Joi.number().min(1).required(),
    pageSize : Joi.number().min(1).max(50).default(10)
});