import { Response, Request, NextFunction } from 'express';
import { Model } from 'mongoose';

export const isExistMiddleware =
  <T>(model: Model<T>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const searchResult = await model.findById(id);

      if (!searchResult) throw new Error();

      req.searchResult = searchResult;

      next();
    } catch (error) {
      return res.status(400).json({ massage: 'entity not exist in database' });
    }
  };
