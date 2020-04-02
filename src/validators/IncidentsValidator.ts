import { Joi, Segments } from 'celebrate'

export class IncidentsValidator {

    public static index = {
        [Segments.HEADERS]: Joi.object({
			authorization: Joi.string().required()
		}).unknown()
    }

    public static create = {
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required()
        }),
        [Segments.HEADERS]: Joi.object({
			authorization: Joi.string().required()
		}).unknown()
    }

    public static delete = {
        [Segments.HEADERS]: Joi.object({
			authorization: Joi.string().required()
		}).unknown()
    }
}