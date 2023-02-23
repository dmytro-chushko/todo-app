import joi from 'joi';

interface ICreateTodoSchema {
  title: joi.StringSchema;
  description: joi.StringSchema;
  isPrivate: joi.BooleanSchema;
}

interface IUpdateTodoSchema extends ICreateTodoSchema {
  isCompleted: joi.BooleanSchema;
}

export const createTodoSchema = joi.object<ICreateTodoSchema>().keys({
  title: joi.string().required(),
  description: joi.string().required(),
  isPrivate: joi.boolean()
});

export const updateTodoSchema = joi.object<IUpdateTodoSchema>().keys({
  title: joi.string(),
  description: joi.string(),
  isPrivate: joi.boolean(),
  isCompleted: joi.boolean()
});
