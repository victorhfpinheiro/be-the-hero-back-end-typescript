import { Joi, Segments } from 'celebrate'

export class SessionValidator {

    public static create = {
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required()
        })
    }
}