import { Response, Request, NextFunction, RequestHandler } from 'express';

export const tryCathMiddleware =
  (handler: RequestHandler) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await handler(req, res, next);

      res.json({
        status: 200,
        data: { result }
      });
    } catch (error) {
      next(error);
    }
  };
