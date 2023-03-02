import jwt from 'jsonwebtoken';
import { IUser } from '../types/user.type';

export const genToken = (user: IUser): string =>
  jwt.sign(
    {
      email: user.email,
      userId: user.id
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRATION }
  );
