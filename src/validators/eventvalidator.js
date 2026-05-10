const Joi = require("joi");

const createEventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  date: Joi.date().required(),
  location: Joi.string().required(),
});

module.exports = { createEventSchema };