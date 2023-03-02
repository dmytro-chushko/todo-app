import { Response, Request, NextFunction } from 'express';

export const tryCatchMiddleware =
  <T, U>(handler: (req: T, res: Response, next: NextFunction) => Promise<U>) =>
  async (req: Request | T, res: Response, next: NextFunction) => {
    try {
      const result = await handler(req as T, res, next);

      res.send(result);
    } catch (error) {
      next(error);
    }
  };
