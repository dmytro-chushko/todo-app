import { Response, Request, NextFunction, RequestHandler } from 'express';

export const tryCatchMiddleware =
  (handler: RequestHandler) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await handler(req, res, next);

      res.send(result);
    } catch (error) {
      next(error);
    }
  };
