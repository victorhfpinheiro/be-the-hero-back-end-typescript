import { Joi, Segments } from 'celebrate';

export class ProfileValidator {
	public static index = {
		[Segments.HEADERS]: Joi.object({
			authorization: Joi.string().required()
		}).unknown()
	};
}
