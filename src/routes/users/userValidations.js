import { celebrate, Joi, Segments } from "celebrate";

const validateFindAll = celebrate({
  [Segments.QUERY]: Joi.object({
    name: Joi.string().optional(),
    lastName: Joi.string().optional(),
    age: Joi.number().integer().positive().optional(),
    limit: Joi.number().integer().positive().raw().optional(),
    offset: Joi.number().integer().positive().raw().allow(0).optional(),
  }),
});

const validateCreate = celebrate({
  [Segments.BODY]: {
    user: Joi.object({
      name: Joi.string().required(),
      lastName: Joi.string().required(),
      age: Joi.number().integer().positive().optional(),
    }).required(),
  },
});

export { validateFindAll, validateCreate };
