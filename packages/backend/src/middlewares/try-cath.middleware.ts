import { Response, Request, NextFunction, RequestHandler } from 'express';

export const tryCathWrapper =
  (handler: RequestHandler) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
