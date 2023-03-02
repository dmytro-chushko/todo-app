import passport from 'passport';
import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import { IUser } from '../types/user.type';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: Error, user: IUser) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return next(createError.Unauthorized());
    }

    req.user = user;

    next();
  });
};
