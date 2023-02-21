import { Response, Request, NextFunction } from 'express';

type Handler = (res: Response, req: Request, next: NextFunction) => Promise<void>;

export const controllerWrapper =
  (handler: Handler) => async (res: Response, req: Request, next: NextFunction) => {
    try {
      await handler(res, req, next);
    } catch (error) {
      next(error);
    }
  };
