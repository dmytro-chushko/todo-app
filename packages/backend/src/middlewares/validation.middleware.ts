import { Response, NextFunction } from 'express';
import createError from 'http-errors';
import { ObjectSchema } from 'joi';
import { CustomRequest } from '../types/request.type';

export const validationMiddleware =
  <T>(schema: ObjectSchema) =>
  (req: CustomRequest<T>, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new createError.BadRequest(error.message);
    }
    next();
  };
