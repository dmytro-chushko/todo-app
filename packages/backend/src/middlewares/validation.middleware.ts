import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export const validationMiddleware =
  (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400);
      next(error);
    }
    next();
  };
