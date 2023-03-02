import { Response, NextFunction } from 'express';
import { Model } from 'mongoose';
import { CustomRequest } from '../types/request.type';

export const isExistMiddleware =
  <T>(model: Model<T>) =>
  async (req: CustomRequest<T>, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const searchResult = await model.findById(id);

      if (!searchResult) throw new Error();

      next();
    } catch (error) {
      return res.status(400).send('entity not exist in database');
    }
  };
