import joi from 'joi';

interface IUserSchema {
  email: joi.StringSchema;
  password: joi.StringSchema;
}

interface IPassSchema {
  password: joi.StringSchema;
}

export const userSchema = joi.object<IUserSchema>().keys({
  email: joi.string().email().required().messages({
    'string.email': 'email has to be such view email@domen.com',
    'any.required': 'email is required'
  }),
  password: joi.string().min(8).required().messages({
    'string.min': 'password must has at list 8 characters',
    'any.required': 'password is required'
  })
});

export const passSchema = joi.object<IPassSchema>().keys({
  password: joi.string().min(8).required().messages({
    'string.min': 'password must has at list 8 characters',
    'any.required': 'password is required'
  })
});
