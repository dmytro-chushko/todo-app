import { Response, Request, NextFunction } from 'express';
import { HttpError } from 'http-errors';

export const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status).send(err.message);
  next();
};
