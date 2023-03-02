import { Request } from 'express';

export interface CustomRequest<T> extends Request {
  body: T;
}

export interface AuthCustomRequest<T> extends CustomRequest<T> {
  user: Express.User;
}
